import * as http from 'node:http';
import Router from './router.js';
import jsonParser from './parse_json.js';
import urlParser from './parse_url.js';
import Application from './applicaion.js'

const PORT = process.env.PORT || 4001;
const url = `http://localhost:${PORT}`;
const app = new Application();

app.use(jsonParser);
app.use(urlParser(url));
app.addRouter(userRouter);

const server = async () => {
  try {
      app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`))
  } catch (e) {
      console.log(e)
  }
}

server()