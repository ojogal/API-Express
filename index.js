import * as http from 'node:http';
import EventEmitter from 'node:events';

const PORT = process.env.PORT || 4001;
const emitter = new EventEmitter();

const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, { 'Content-type': 'application/json' });
    emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
  } catch (e) {
    res.end('Server does not work')
  }
});

server.listen(PORT, () => { console.log(`Server started on PORT ${PORT}`) })

class Router {
  constructor() {
    this.endpoints = {}
  };

  request(method = 'GET', path, handler) {
    if (!this.endpoints[path]) {
      this.endpoints[path] = {}
    };

    // /users [GET, POST, PUT], /post [GET, POST, PUT, DELETE]
    const endpoint = this.endpoints[path];

    if (endpoint[method]) { throw Error(`${method} method with ${path} address alreay exitsts`) };

    endpoint[method] = handler;
    emitter.on(`[${path}]:[${method}]`, (req, res) => { handler(req, res) })
  };

  get(path, handler) { this.request('GET', path, handler) };

  post(path, handler) { this.request('POST', path, handler) };

  put(path, handler) { this.request('PUT', path, handler) };

  delete(path, handler) { this.request('DELETE', path, handler) };
};

const router = new Router();

router.get('/users', (req, res) => { res.end('request to users') });