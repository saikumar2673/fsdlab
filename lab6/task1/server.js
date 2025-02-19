const http=require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        // fs.readFile('./homepage.html',"utf-8",(err,val)=>{
        //     if(err)
        //         console.log("error in reading");
        //     else
        //     {
        //         res.write(val);
        //         res.end();
        //     }
        // })
        res.write("this is the home page");
        res.end();
    }
    else if(req.url==='/about')
    {
        res.write("this is the home page i have made");
        res.end();
    }
    else if(req.url==='/contact')
        {
            res.write("this is the contact page");
            res.end();
        }
    else
    {
        res.write("404 pagenot founderror");
        res.end();
    }
});

server.listen(8080,()=>{
    console.log("server is running");
})