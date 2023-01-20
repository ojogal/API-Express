import * as http from 'node:http';
import Router from './router.js'

const PORT = process.env.PORT || 4001;

const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, { 'Content-type': 'application/json' });
    emitter.emit(`[${req.url}]:[${req.method}]`, req, res)
  } catch (e) {
    res.end('Server does not work')
  }
});

server.listen(PORT, () => { console.log(`Server started on PORT ${PORT}`) })



const router = new Router();

router.get('/users', (req, res) => { res.end('request to users') });