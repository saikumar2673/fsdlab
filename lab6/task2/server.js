const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);
    if (parsedUrl.pathname === '/greet') {
        const name = parsedUrl.query.name;
        const age = parsedUrl.query.age;
        console.log(name, age)

        if (name) {
            res.write(`Hello, ${name}!${age}`);
            res.end();
        } else {
            // res.write();
            res.end('Error: No name provided!');
        }
    }
    else {
        // res.write();
        res.end('Error: Page not found!');
    }
});
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});