可能它只能成功的读InnoDB数据页吧。

# 使用
```
npm install

node ibd_block_reader.js -f innodb表空间文件 -b 第几个块 -bs 块大小 -e 字符编码（没啥用）
```
