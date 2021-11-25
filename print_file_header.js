const utils = require("./utils");

const pageType = {
  "45 bf": "B+ Tree Page",
  "00 02": "Undo Log Page",
  "00 03": "INODE Page",
  "00 04": "Insert Buffer Free List Page",
  "00 00": "ALLOCATED Page",
  "00 05": "IBuf Bitmap Page",
  "00 06": "Sys Page",
  "00 07": "Trx Sys Page",
  "00 08": "File Space Header Page",
  "00 09": "XDES Page",
  "00 0a": "BLOB Page",
};
function printFileHeader(buf) {
  console.log("============FILE HEADER===========");
  console.log(`checksum: ${utils.toHexs(utils.range(buf, 0, 3))}`);
  console.log(`page offset: ${utils.toNumber(utils.range(buf, 4, 7))}`);
  console.log(`prev page: ${utils.toNumber(utils.range(buf, 8, 11))}`);
  console.log(`next page: ${utils.toNumber(utils.range(buf, 12, 15))}`);
  console.log(
    `page lsn: ${utils.toNumber(utils.range(buf, 16, 23))}, hex: ${utils.toHexs(
      utils.range(buf, 16, 23)
    )}`
  );
  console.log(`page type: ${pageType[utils.toHexs(utils.range(buf, 24, 25))]}`);
  console.log(
    `table space id: ${utils.toNumber(
      utils.range(buf, 34, 37)
    )}, hex: ${utils.toHexs(utils.range(buf, 34, 37))}`
  );
}
module.exports = printFileHeader;
