const http = require("http")
http.createServer(function(request,response){
    response.end("Hello Node.js")
}).listen(3000, "127.0.0.1", function(){
    console.log("Server is started on the port 3000")
})