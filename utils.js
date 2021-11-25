function toHexs(nums) {
  var hexs = [];
  nums.forEach((num) => {
    let hex = num.toString(16);
    if (hex.length == 1) hex = "0" + hex;
    hexs.push(hex);
  });
  return hexs.join(" ");
}
function toNumber(nums) {
  let hexstring = "";
  nums.forEach((n, i) => {
    hexstring += toHexs([n]);
  });
  return parseInt(hexstring, 16);
}

function range(buf, start, end) {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(buf[i]);
  }
  return result;
}
module.exports = {
  toHexs,
  toNumber,
  range,
};
