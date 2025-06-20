#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
词典文件处理脚本
用于将各种词典数据文件转换为JavaScript格式
"""

import os
import logging
from pathlib import Path
from typing import List, Tuple

# 配置日志
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class DictProcessor:
    """词典处理器类"""
    
    def __init__(self, base_path: str = None):
        """
        初始化词典处理器
        
        Args:
            base_path: 基础路径，默认为当前脚本所在目录
        """
        if base_path is None:
            # 使用脚本所在目录作为基础路径
            self.base_path = Path(__file__).parent
        else:
            self.base_path = Path(base_path)
        
        logger.info(f"使用基础路径: {self.base_path}")
    
    def read_file_lines(self, file_path: str, start_line: int = 0, end_line: int = None) -> List[str]:
        """
        读取文件指定行范围的内容
        
        Args:
            file_path: 文件路径
            start_line: 开始行号（从0开始）
            end_line: 结束行号（不包含）
            
        Returns:
            文件行列表
        """
        full_path = self.base_path / file_path
        
        try:
            with open(full_path, 'r', encoding='utf-8') as file:
                lines = file.readlines()
                if end_line is None:
                    return lines[start_line:]
                else:
                    return lines[start_line:end_line]
        except FileNotFoundError:
            logger.error(f"文件未找到: {full_path}")
            return []
        except Exception as e:
            logger.error(f"读取文件 {full_path} 时出错: {e}")
            return []
    
    def write_js_file(self, file_path: str, content: str) -> bool:
        """
        写入JavaScript文件
        
        Args:
            file_path: 输出文件路径
            content: 文件内容
            
        Returns:
            是否写入成功
        """
        full_path = self.base_path / file_path
        
        try:
            with open(full_path, 'w', encoding='utf-8') as file:
                file.write(content)
            logger.info(f"成功写入文件: {full_path}")
            return True
        except Exception as e:
            logger.error(f"写入文件 {full_path} 时出错: {e}")
            return False
    
    def process_traditional_dict(self) -> bool:
        """处理繁体字词典"""
        logger.info("开始处理繁体字词典...")
        
        # 读取繁体字数据（跳过前6行）
        trad_lines = self.read_file_lines('simp_trad.txt', start_line=6)
        if not trad_lines:
            return False
        
        # 生成JavaScript代码
        js_content = f'var tradData = ['+''.join(trad_lines) + '];'
        
        # 写入文件
        return self.write_js_file('gzDict.js', js_content)
    
    def process_nn_dict(self) -> bool:
        """处理v_nb_zingjam_all_json词典"""
        logger.info("开始处理v_nb_zingjam_all_json词典...")
        
        # 读取数据
        nn_data_lines = self.read_file_lines('v_nb_zingjam_all_json.txt')
        if not nn_data_lines:
            return False
        
        # 读取现有文件的前360行
        existing_lines = self.read_file_lines('nnDict.js', end_line=360)
        
        # 生成JavaScript代码
        js_content = ''.join(existing_lines) + f'var nnDict = ['+''.join(nn_data_lines) + '];'
        
        # 写入文件
        return self.write_js_file('nnDict.js', js_content)
    
    def process_nnt_dict(self) -> bool:
        """处理v_nb_zingjam_bw_all_json词典"""
        logger.info("开始处理v_nb_zingjam_bw_all_json词典...")
        
        # 读取数据
        nnt_data_lines = self.read_file_lines('v_nb_zingjam_bw_all_json.txt')
        if not nnt_data_lines:
            return False
        
        # 读取现有文件的前360行
        existing_lines = self.read_file_lines('nntDict.js', end_line=360)
        
        # 生成JavaScript代码
        js_content = ''.join(existing_lines) + f'var nntDict = ['+''.join(nnt_data_lines) + '];'
        
        # 写入文件
        return self.write_js_file('nntDict.js', js_content)
    
    def process_seg_dict_plus(self) -> bool:
        """处理分词词典增强版"""
        logger.info("开始处理分词词典增强版...")
        
        # 读取分词数据
        seg_data_lines = self.read_file_lines('v_segdictplus_array.txt')
        if not seg_data_lines:
            return False
        
        # 读取现有文件的前3行
        existing_lines = self.read_file_lines('segDictPlus.min.js', end_line=3)
        
        # 生成JavaScript代码
        js_content = ''.join(existing_lines) + f'var segDictPlus = ['+''.join(seg_data_lines) + '];'
        
        # 写入文件
        return self.write_js_file('segDictPlus.min.js', js_content)
    
    def process_all_dicts(self) -> bool:
        """处理所有词典文件"""
        logger.info("开始处理所有词典文件...")
        
        success_count = 0
        total_count = 4
        
        # 处理各种词典
        if self.process_traditional_dict():
            success_count += 1
        
        if self.process_nn_dict():
            success_count += 1
        
        if self.process_nnt_dict():
            success_count += 1
        
        if self.process_seg_dict_plus():
            success_count += 1
        
        logger.info(f"词典处理完成: {success_count}/{total_count} 个文件处理成功")
        return success_count == total_count


def main():
    """主函数"""
    try:
        # 创建词典处理器实例
        processor = DictProcessor()
        
        # 处理所有词典
        success = processor.process_all_dicts()
        
        if success:
            logger.info("所有词典文件处理成功！")
        else:
            logger.warning("部分词典文件处理失败，请检查日志")
            
    except Exception as e:
        logger.error(f"程序执行出错: {e}")
        return 1
    
    return 0


if __name__ == "__main__":
    exit(main())