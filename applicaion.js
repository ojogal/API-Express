import * as http from 'node:http';
import EventEmitter from 'node:events';

export default class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer()
  };

  _createServer() {
    return http._createServer()
  };
}