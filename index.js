//Part 4: Creating a Node Server:

/* Use the require keyword to include the http module, 
which is built into Node (and does not need to be installed separately by npm). 
This module allows node to transfer data over 
the Hyper Text Transfer Protocol (HTTP) used by the internet. */

const http = require('http');

//Next, we need to define the location and port of the server. 
//For now, we will use a local address; 

const hostname = '127.0.0.1';
const port = 3000;

/*The createServer method of the http object allows us to define how the server will behave. 
The configuration below respond with a status code of 200 (“success”) and the text content “Hello World!”
The variables req and res correspond to the request and response objects of the server communications. */

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
  });

/*Finally, we need to tell the server to actually listen for communications. 
We do this by calling the listen method of the server object we just created, 
and passing it the port and hostname we previously defined. 
It also accepts a callback function that we can use to indicate that the server is running. */

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  
