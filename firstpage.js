var http = require ("http");
var fs = require ("fs");
http.createServer(function (request, response) {
   fs.readFile('/home/chandan/aayush/1.html', function(err,data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(data);
            response.end();
});
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080');
