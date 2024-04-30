import express from 'express';
import path from 'path';
import { createRequire } from "module";
const require = createRequire(import.meta.url);

import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
const outputJson = require("./swagger-output.json");
import cookieParser from 'cookie-parser';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import http from 'http'
const server = http.createServer(app);
import { Server } from 'socket.io'

import socketInit from './sockets/jogoSocket.js';

const io = new Server(server);

socketInit(io);

app.use(cookieParser());
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(outputJson));

server.listen('5000', function() {
    console.log('backend em execução');
})