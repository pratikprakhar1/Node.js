import React from 'react';
import './Introduction.css'; // Import your CSS for styling

const Introduction = () => {
  return (
    <div className="introduction">
      <h1>Introduction to Node.js</h1>
      <p>
        Node.js is an open-source, cross-platform JavaScript runtime environment. It's primarily used for building fast, scalable network applications. Unlike traditional JavaScript, which runs in the browser, Node.js runs on the server, enabling developers to use JavaScript for both client-side and server-side code.
      </p>
      <p>
        Node.js is built on the V8 JavaScript engine, the same engine used in Google Chrome, which allows it to execute code very quickly. Since it's designed for high-performance applications, Node.js is commonly used for backend services, APIs, and real-time applications like chat applications or live data feeds.
      </p>
      <p>
        One of the key features of Node.js is its non-blocking, event-driven architecture. Unlike traditional server-side programming, where each request spawns a new thread, Node.js operates on a single thread and uses an event loop to handle multiple requests concurrently. This design allows Node.js to handle thousands of simultaneous connections with a single server without significant overhead.
      </p>
      <p>
        Node.js also excels at handling I/O operations asynchronously, such as reading from a database, accessing the filesystem, or making network requests. This ensures that the server doesn’t get “stuck” while waiting for an operation to complete, maximizing efficiency and responsiveness.
      </p>
      <p>
        For JavaScript developers, Node.js represents a seamless way to extend their skills to server-side development without having to learn a new programming language. As the ecosystem continues to grow, Node.js remains a top choice for building modern web applications, particularly those requiring real-time communication or large-scale, high-performance server operations.
      </p>
      <p>
        With Node.js, you can take advantage of the latest ECMAScript features without waiting for browser updates, as Node.js itself decides which version of JavaScript to run, making it a forward-thinking platform for developers.
      </p>

      <h2>Example: A Simple Node.js Web Server</h2>
      <p>Let’s look at the most basic Node.js application: a simple web server:</p>
      
      <pre>
        <code>
          {`const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(port, hostname, () => {
  console.log(\`Server running at http://\${hostname}:\${port}/\`);
});`}
        </code>
      </pre>

      <p>
        To run this code, save it as a <code>server.js</code> file, then run <code>node server.js</code> in your terminal. If using ES modules (mjs), save it as <code>server.mjs</code> and run <code>node server.mjs</code>.
      </p>
      <p>
        This example demonstrates a basic HTTP server built with Node.js. The server listens on a specified port and responds with a plain-text "Hello, World!" message. Let's break down the code:
      </p>

      <h3>Code Breakdown</h3>
      <ul>
        <li>
          <strong>Creating the server:</strong> We use the <code>createServer()</code> function from Node.js’s <code>http</code> module. It returns a new HTTP server that handles incoming requests and sends responses.
        </li>
        <li>
          <strong>Listening on a port:</strong> The <code>listen()</code> method makes the server listen for requests on a specified port and hostname. In this case, it's <code>127.0.0.1:3000</code>, which is your local machine.
        </li>
        <li>
          <strong>Request and Response objects:</strong> Each time a request is received, the callback function is executed with two parameters: <code>req</code> (request) and <code>res</code> (response). The <code>req</code> object contains information about the incoming request, while the <code>res</code> object is used to send the response back to the client.
        </li>
      </ul>

      <h3>Sending a Response</h3>
      <p>
        The server sets the HTTP status code to <code>200</code>, indicating a successful response, then sets the content type to <code>text/plain</code> and sends the string <code>'Hello, World!'</code> as the response body:
      </p>

      <pre>
        <code>
          {`res.statusCode = 200;`}
        </code>
      </pre>

      <p>
        This tells the client that the request was successful. Then, we use <code>res.setHeader()</code> to set the response headers:
      </p>

      <pre>
        <code>
          {`res.setHeader('Content-Type', 'text/plain');`}
        </code>
      </pre>

      <p>
        Finally, we call <code>res.end()</code> to send the response to the client:
      </p>

      <pre>
        <code>
          {`res.end('Hello, World!\\n');`}
        </code>
      </pre>

      <h3>What Happens Next?</h3>
      <p>
        Once the server is running, you can open a web browser or use a tool like <code>curl</code> to access <code>http://127.0.0.1:3000/</code>. The server will respond with a "Hello, World!" message.
      </p>
      
    </div>
  );
};

export default Introduction;
