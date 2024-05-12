var path = require("path");
var p = "https://github.com/SangeethaShanmugm?tab=repositories";

console.log(path.dirname(p));
console.log(path.basename(p));
console.log(path.extname(p));
console.log(path.isAbsolute(p));