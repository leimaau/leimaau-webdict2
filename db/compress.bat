@echo off
chcp 65001
echo 正在压缩数据库文件...

REM 使用7-Zip压缩
"D:\Program Files\7-Zip\7z.exe" a -tgzip leimaau.db3.gz leimaau.db3
"D:\Program Files\7-Zip\7z.exe" a -tgzip leimaau2.db3.gz leimaau2.db3
"D:\Program Files\7-Zip\7z.exe" a -tgzip leimaau3.db3.gz leimaau3.db3

echo 压缩完成！