const http=require('http')

const fs=require('fs')

const server=http.createServer((req,res)=>{
    if(req.url==='/api/data')
    {
        fs.readFile('D:/fsdw/fsdlab/lab6/task4/user.json',(err,val)=>{
            if(err)
                console.log('error in reading file')
            else
            {
                const data=JSON.parse(val)
                res.write(JSON.stringify(data));
                res.end();
            }
        })
    }
});
server.listen(8085,()=>{
    console.log("server is running");
})