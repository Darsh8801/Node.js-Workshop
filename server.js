var http=require('http');
http.createServer(function(req,res)
{
    res.end("welcome to js");
}).listen(3000);
console.log("server maja ma");