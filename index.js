//Part 4: Creating a Node Server:

/* Use the require keyword to include the http module, 
which is built into Node (and does not need to be installed separately by npm). 
This module allows node to transfer data over 
the Hyper Text Transfer Protocol (HTTP) used by the internet. */

//const http = require('http');

//Next, we need to define the location and port of the server. 
//For now, we will use a local address; 

// const hostname = '127.0.0.1';
// const port = 3000;

/*The createServer method of the http object allows us to define how the server will behave. 
The configuration below respond with a status code of 200 (“success”) and the text content “Hello World!”
The variables req and res correspond to the request and response objects of the server communications. */

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
//   });

/*Finally, we need to tell the server to actually listen for communications. 
We do this by calling the listen method of the server object we just created, 
and passing it the port and hostname we previously defined. 
It also accepts a callback function that we can use to indicate that the server is running. */

//   server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });

//Change our createServer call to the following:

/*The Content-Type header is set to text/html, indicating that the response body will be in HTML format.
Instead of sending plain text (res.end('Hello World!\n');), 
the response body now consists of HTML content.
The HTML content includes an <h1> heading with red color and a <p> paragraph.
When a client makes a request to this server, it will respond with an HTML page 
containing the heading and paragraph specified in the script.
So, instead of just sending a plain text "Hello World!", 
the server will now send an HTML response with formatted content.*/

//   const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<h1 style="color: red">Hello World!</h1>');
//     res.write('<p>I wonder what else we can send...</p>');
//     res.end();
//   }); 

//   server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });
//Part 5: Open Exploration

//Create at least two different routes for your application using Node.js. 
//Have the “default” route continue to render the content above

// In this new code add the url module to parse the URL of incoming requests
const http = require('http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

// Inside the request handler, 
// check the pathname property of the parsed URL to determine which route the request is for
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Create “default” route
    if (parsedUrl.pathname === '/') {
        // Default route
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write('<p>I wonder what else we can send...</p>');
        res.end();
        // Create two additional routes: /about and /contacts
    } else if (parsedUrl.pathname === '/about') {
        // About route
        res.write('<h1>About</h1>');
        res.write("<p>Hi, I'm so happy to have you here!</p>");
        res.end();
    } else if (parsedUrl.pathname === '/contacts') {
        // Contacts route
        res.write('<h1>Contacts</h1>');
        res.write('<p>You can contact me via email at me@gmail.com</p>');
        res.end();
        // If the requested route doesn't match any of the predefined routes, 
        // return a 404 Not Found response
    } else {
        // Route not found
        res.statusCode = 404;
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
});
//Accept a callback function to indicate that the server is running
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
