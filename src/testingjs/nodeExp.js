var http = require('http'); 
var url = require('url'); 
var dt = require('./myModule'); 
var fs = require('fs'); 
var uc = require('upper-case'); 


http.createServer(function (req, res) {
    // Load webpage.html
    if (req.url == "/site") {
        fs.readFile('webpage.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data); 
            return res.end(); 
        });
    }
    // Create a text file.
    else if (req.url == "/file") {
        fs.writeFile('text.txt', 'Hello!\n', function(err) {
            if (err) throw err; 
            console.log('Saved!'); 
        });
    }
    // Delete the text.txt file. 
    else if (req.url == "/delfile") {
        fs.unlink('text.txt', function(err){
            if (err) throw err; 
            console.log('File deleted!'); 
        });
    }
    // Test nodejs functionality. 
    else {
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write("TESTING HOSTING ON PORT: " + uc.upperCase("Hey I'm Joseph! <br>")); 
        res.write("TESTING MODULES: The date and time are currently - " + dt.myDateTime() + "<br>");
        res.write("TESTING REQ ARGUMENT: " + req.url + "<br>");
        var q = url.parse(req.url, true).query; 
        var txt = q.year + " " + q.month;
        res.write("TESTING URL PARSE: " + txt); 

        res.end(); 
    }
}).listen(8080); 