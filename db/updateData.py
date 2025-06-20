#!/usr/bin/python
# coding: utf-8 

import os
import sys
import shutil
import subprocess
from pathlib import Path
from typing import List, Optional
from datetime import datetime
import re

# 常量定义
BASE_DIR = Path(os.path.dirname(os.path.abspath(__file__))).parent
BAT_DIR = BASE_DIR / 'db'
jieba_js_DIR = BASE_DIR / 'js' / 'jieba-js'
expbat_path = BAT_DIR / 'expbat.bat'
impbat_path = BAT_DIR / 'impbat.bat'
compressbat_path = BAT_DIR / 'compress.bat'
jieba_expbat_path = jieba_js_DIR / 'expbat.bat'


def run_bat_script(script_path: Path, script_name: str, working_dir: Path) -> None:
    """运行bat脚本的通用函数"""
    print(f"正在运行 {script_name} ...")
    try:
        subprocess.run(str(script_path), shell=True, cwd=working_dir, check=True)
        print(f"{script_name} 执行完成")
    except subprocess.CalledProcessError as e:
        print(f"{script_name} 执行出错，返回码：{e.returncode}")
        print(f"错误信息：{e}")
        sys.exit(1)
    except FileNotFoundError:
        print(f"错误: 找不到文件 {script_path}")
        sys.exit(1)


def run_python_script(script_path: Path, script_name: str, working_dir: Path) -> None:
    """运行Python脚本的通用函数"""
    print(f"正在运行 {script_name} ...")
    try:
        subprocess.run([sys.executable, str(script_path)], cwd=working_dir, check=True)
        print(f"{script_name} 执行完成")
    except subprocess.CalledProcessError as e:
        print(f"{script_name} 执行出错，返回码：{e.returncode}")
        print(f"错误信息：{e}")
        sys.exit(1)
    except FileNotFoundError:
        print(f"错误: 找不到文件 {script_path}")
        sys.exit(1)


def update_version() -> None:
    """更新js/index.js文件中的版本号为当前日期"""
    print("\n开始更新版本号...")
    
    # 设置文件路径
    js_file_path = BASE_DIR / 'js' / 'index.js'
    
    # 检查文件是否存在
    if not js_file_path.exists():
        print(f"错误: 找不到文件 {js_file_path}")
        return
    
    # 获取当前日期作为版本号 (格式: YYYYMMDD)
    current_date = datetime.now().strftime("%Y%m%d")
    
    try:
        # 读取文件内容
        with open(js_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 使用正则表达式替换版本号
        # 匹配 "更新版本：YYYYMMDD" 格式
        pattern = r'更新版本：\d{8}'
        replacement = f'更新版本：{current_date}'
        
        # 检查是否找到匹配项
        if re.search(pattern, content):
            # 替换版本号
            new_content = re.sub(pattern, replacement, content)
            
            # 写回文件
            with open(js_file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"版本号已更新为: {current_date}")
        else:
            print("警告: 在文件中未找到版本号格式 '更新版本：YYYYMMDD'")
            
    except Exception as e:
        print(f"更新版本号时出错: {str(e)}")


def copy_files_to_targets(source_dir: Optional[Path] = None) -> None:
    """将.gz文件复制到目标目录"""
    print("\n开始复制.gz文件到目标目录...")
    
    # 设置源目录和目标目录
    if source_dir is None:
        source_dir = BAT_DIR  # 使用db目录作为源目录
    target_dir = Path(r"E:\LocalRepository\github\db-server\public")
    
    # 检查目标目录是否存在
    if not target_dir.exists():
        raise ValueError(f"目标目录不存在: {target_dir}")
    
    # 获取所有.gz文件
    gz_files = list(source_dir.glob("*.gz"))
    
    if not gz_files:
        print(f"警告: 在目录 {source_dir} 下没有找到.gz文件")
        return
        
    # 复制文件
    success_count = 0
    for gz_file in gz_files:
        try:
            target_path = target_dir / gz_file.name
            shutil.copy2(gz_file, target_path)
            print(f"已复制: {gz_file.name}")
            success_count += 1
        except Exception as e:
            print(f"复制文件 {gz_file.name} 时出错: {str(e)}")
            continue
    
    print(f"\n完成! 共复制了 {success_count}/{len(gz_files)} 个.gz文件到 {target_dir}")


def main():
    print("=" * 50)
    print("开始执行数据更新流程...")
    print("=" * 50)
    
    # 运行各个bat脚本
    run_bat_script(expbat_path, "expbat.bat", BAT_DIR)
    run_bat_script(impbat_path, "impbat.bat", BAT_DIR)
    run_bat_script(compressbat_path, "compress.bat", BAT_DIR)
    run_bat_script(jieba_expbat_path, "jieba-js下的 expbat.bat", jieba_js_DIR)
    
    # 运行Python脚本
    set_files_script = jieba_js_DIR / 'setFilesToJs.py'
    run_python_script(set_files_script, "jieba-js下的 setFilesToJs.py", jieba_js_DIR)

    # 更新版本号
    update_version()
    
    # 复制文件到目标目录
    copy_files_to_targets()
    
    print("\n" + "=" * 50)
    print("数据更新流程执行完成!")
    print("=" * 50)


if __name__ == '__main__':
    main()