var http=require('http');
var a=10;
var b=20;
var c= a +b;
var msg = `A value is $(a)</br> B value is $(b) </br>sum is $(c)`;
http.createServer(function(req,res)
{
    res.writeHead(200, {
        'Content-type':'text/html'});
    res.end(msg);
}).listen(8801);
console.log("server maja ma");