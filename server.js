var http = require('http');
var server = http.createServer();
var fs = require('fs');
var qs = require('querystring');

server.on('request', function(req, res) {

    js = fs.readFileSync('./client.js');
    html = fs.readFileSync('./hello-form.html');

    if(req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write('TOPページです。');
        res.end();
    }

    if(req.url === '/hello-api') {
        if(req.method === 'POST') {
            var postData = "";
            req.on('data', function(chunk) {
                postData += chunk;
            }).on('end', function() {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify(qs.parse(postData)));
                res.end();
            });
        }
    }

    fs.stat('.' + decodeURI(req.url), function(err, stats) {
        if (err) {
            console.log('kita');
            res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
            res.end('ページが見つかりません。');
        } else {
            if (req.url === '/client.js') {
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.write(js);
                res.end();
            }
    
            if (req.url === '/hello-form.html') {
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                res.write(html);
                res.end();

            }
        }
    })

    // if (req.url != '/favicon.ico') {

    //     if (req.url === '/client.js') {
    //         js = fs.readFileSync('./client.js');
    //         res.writeHead(200, {'Content-Type': 'text/javascript'});
    //         res.write(js);
    //         res.end();
    //     }

    //     if (req.url === '/hello-form.html') {
    //         html = fs.readFileSync('./hello-form.html');
    //         res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    //         res.write(html);
    //         res.end();
    //     }

    //     if(req.url === '/hello-api') {
    //         if(req.method === 'POST') {
    //             var postData = "";
    //             req.on('data', function(chunk) {
    //                 postData += chunk;
    //             }).on('end', function() {
    //                 res.writeHead(200, {'Content-Type': 'application/json'});
    //                 res.write(JSON.stringify(qs.parse(postData)));
    //                 res.end();
    //             });
    //         }
    //     }

    // } else {
    //     console.log('Favicon.ico');
    // }
}).listen(80);