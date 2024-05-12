const fs= require('fs');
const quote = "An apple a day keeps the doctor away";
fs.writeFileSync("awesome.txt", quote);

