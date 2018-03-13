var http = require('http');
var fs = require('fs');


//start server
http.createServer(function (req, res) {
  
  //display homepage
  fs.readFile('main/pages/general/html/index_home.html', function(err, data) {
  	console.log(err);
  	console.log(data);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });

}).listen(8080);