const utils = require("./utils");

var direction = ["left", "right", "samerec", "samepage", "nodirection"];
function printPageHeader(buf) {
  console.log("\n\n===========PAGE HEADER============");
  console.log(`slots: ${utils.toNumber(utils.range(buf, 0, 1))}`);
  heap_top = utils.toNumber(utils.range(buf, 2, 3));
  heap_count = utils.toNumber(utils.range(buf, 4, 5));
  free_top = utils.toNumber(utils.range(buf, 6, 7));
  garbage_bytes = utils.toNumber(utils.range(buf, 8, 9));
  last_insert = utils.toNumber(utils.range(buf, 10, 11));
  direction = direction[utils.toNumber(utils.range(buf, 12, 13))];
  n_direction = utils.toNumber(utils.range(buf, 14, 15));
  rec_cnt = utils.toNumber(utils.range(buf, 16, 17));
  console.log(`PAGE_HEAP_TOP: ${heap_top}`);
  console.log(`PAGE_N_HEAP: ${heap_count}`);
  console.log(`PAGE_FREE: ${free_top}`);
  console.log(`PAGE_GRABAGE: ${garbage_bytes}`);
  console.log(`last insert_pos: ${last_insert}`);
  console.log(`last direction: ${direction}`);
  console.log(`PAGE_N_DIRECTION: ${n_direction}`);
  console.log(`record count: ${rec_cnt}`);
  return {
    heap_top,
    heap_count,
    free_top,
    garbage_bytes,
    last_insert,
    rec_cnt,
  };
}

module.exports = printPageHeader;
