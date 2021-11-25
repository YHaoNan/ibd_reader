var program = require("commander");
var fs = require("fs");
var printFileHeader = require("./print_file_header");
var printPageHeader = require("./print_page_header");
var printInfimumAndSupremum = require("./print_infimum_and_supremum");
const print_infimum_and_supremum = require("./print_infimum_and_supremum");

function read(fd, position, read_bytes) {
  var buffer = Buffer.alloc(read_bytes);
  fs.readSync(fd, buffer, 0, read_bytes, position);
  return buffer;
}
function read_block({ file, block, blocksize, encoding }) {
  try {
    var err,
      fd = fs.openSync(file);
    if (err) throw err;

    // initial page offset
    let pageOffset = parseInt(blocksize) * 1024 * parseInt(block);
    printFileHeader(read(fd, pageOffset, 38));
    pageOffset += 38;

    printPageHeader(read(fd, pageOffset, 56));
    pageOffset += 56;

    // printInfimumAndSupremum返回下一条记录的偏移量
    pageOffset += printInfimumAndSupremum(read(fd, pageOffset, 26));

    // 现在pageOffset已经指向页中第一条数据了
    console.log(
      "\n\n============MAY BE IT IS THE FIRST ROW IN THIS PAGE==========="
    );
    console.log(read(fd, pageOffset, 27));
  } catch (e) {
    console.log(e);
  }
}

program
  .version("0.0.1")
  .description("一个用于阅读ibd文件中的块的程序")
  .option("-f, --file <file>", "ibd文件", "/var/lib/mysql/ibdata1")
  .option("-b, --block <block index>", "块号", "0")
  .option("-bs, --blocksize <block size>", "块大小，单位KB", "16")
  .option("-e, --encoding <encoding>", "字符编码，默认latin1", "latin1")
  .action(read_block);
program.parse(process.argv);
