import { Server } from './server.ts';
import dotenv from 'dotenv';
import routes from './routes/index.ts';
import express from 'express';

dotenv.config();

const port = Number(process.env.PORT);

function main() {
    const server = new Server({ port, routes, dataFormat: express.json() });

    server.start();
}

main();