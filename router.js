import EventEmitter from 'node:events';

const emitter = new EventEmitter();

export default class Router {
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
  };

  get(path, handler) { this.request('GET', path, handler) };

  post(path, handler) { this.request('POST', path, handler) };

  put(path, handler) { this.request('PUT', path, handler) };

  delete(path, handler) { this.request('DELETE', path, handler) };
};