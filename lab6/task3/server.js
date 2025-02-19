const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
       if(req.url=='/')
       {
          fs.readFile('D:/fsdw/fsdlab/lab6/task3/homepage.html',"UTF-8",(err,val)=>{
              if(err)
                 console.log("error in reading file")
              else
            {
                res.write(val);
                res.end();
            }
          });
       }
});
server.listen(8080,()=>{
    console.log('server is running');
})