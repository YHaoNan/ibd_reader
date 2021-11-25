可能它只能成功的读InnoDB数据页吧。

# 使用
```
npm install

node ibd_block_reader.js -f innodb表空间文件 -b 第几个块 -bs 块大小 -e 字符编码（没啥用）
```
## 案例

```bash
node ibd_block_reader.js -f /var/lib/mysql/test_db/test_page.ibd -b 4

============FILE HEADER===========
checksum: c1 34 dd d3
page offset: 4
prev page: 4294967295
next page: 4294967295
page lsn: 2332278334, hex: 00 00 00 00 8b 03 be 3e
page type: B+ Tree Page
table space id: 110, hex: 00 00 00 6e


===========PAGE HEADER============
slots: 26
PAGE_HEAP_TOP: 3520
PAGE_N_HEAP: 32870
PAGE_FREE: 0
PAGE_GRABAGE: 0
last insert_pos: 3493
last direction: samerec
PAGE_N_DIRECTION: 99
record count: 100


===========Infimum And Supremum============
Infimum Recoreder Header: 01 00 02 00 1c
Supremum Recoreder Header: 05 00 0b 00 00
Next Record Offset: 33


============MAY BE IT IS THE FIRST ROW IN THIS PAGE===========
<Buffer 00 00 00 01 00 00 00 00 75 9b 82 00 00 00 bc 01 10 78 78 78 78 78 78 78 78 78 78>
```

