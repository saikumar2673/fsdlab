const os=require('os');
console.log(os.uptime());
let up=os.uptime()

const days=Math.floor(up/(24*60*60));
const hrs=Math.floor(up%(24*3600)/(60*60));
const mins=Math.floor(up%3600/(60));
const sec=Math.floor(up%60);

console.log(` ${days} days ${hrs}hrs  ${mins}mins  ${sec}sec `)