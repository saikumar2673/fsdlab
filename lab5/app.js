const os=require('os')
console.log(os.arch())
console.log(os.uptime())
console.log(os.totalmem())
console.log(os.freemem())

function checkmemory(){//()=>{
    setInterval(()=>{
        const totalmemory=os.totalmem();
        const freememory=os.freemem();
        
        console.log(((freememory/totalmemory)*100).toFixed(2));
    },5000);
}
const totalmemory=os.totalmem();
console.log('total memory is'+totalmemory);
// checkmemory();