const SVGFixer = require("oslllo-svg-fixer")

let folder = "";
var options = {
  showProgressBar: true,
}

function callback(err, fixer) {
  if (err) {
    throw err
  }
  console.log("done")
}

console.log("start");

SVGFixer(`svg/${folder}`, `fixed-svg/${folder}`, options).fix(callback)

console.log("end");