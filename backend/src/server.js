import http from 'http';

import app from './app';
import setupWebsocket from './websocket';

const server = http.Server(app);

setupWebsocket(server);
server.listen(3333);
