const utils = require("./utils");

function print_infimum_and_supremum(buf) {
  console.log("\n\n===========Infimum And Supremum============");
  let infi_rec_header = utils.toHexs(utils.range(buf, 0, 4));
  let supre_rec_header = utils.toHexs(utils.range(buf, 13, 17));
  let next_record_offset = utils.toNumber(utils.range(buf, 3, 4)) + 5;
  console.log(`Infimum Recoreder Header: ${infi_rec_header}`);
  console.log(`Supremum Recoreder Header: ${supre_rec_header}`);
  console.log(`Next Record Offset: ${next_record_offset}`);
  return next_record_offset;
}
module.exports = print_infimum_and_supremum;
