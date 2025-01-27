import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
const bodyParser = 'bodyParser';
import http from 'http';
import { initializeWebSocket } from './websocket/index';

const app = express();

app.use(express.urlencoded({ limit: '90mb', extended: true }));
app.use(cors());
app.use(express.json({ limit: '90mb' }));
app.use(routes);

const server = http.createServer(app);
initializeWebSocket(server);
server.listen(process.env.WEBSOCKET_PORT);

export default app;
