import * as http from 'node:http';
const PORT = process.env.PORT || 4001;

const server = http.createServer((req, res) => {});

server.listen(PORT, () => { console.log(`Server started on PORT ${PORT}`) })