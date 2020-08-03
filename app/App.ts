import "reflect-metadata";
import { Container } from "inversify";
import * as restify from 'restify';
import { Server } from 'restify';

import { bind }from "./bind";


export class App {
    private readonly port: number;
    private server: Server
    public readonly container: Container;

    constructor(port: number = 80) {
        this.port = port;
        this.container = new Container();
    }

    public getServer(): Server {
        return this.server;
    }

    public async start(): Promise<App> {
        await bind(this.container);

        this.server = restify.createServer();
        this.server.use(restify.plugins.queryParser());
        this.server.use(restify.plugins.bodyParser());

        return new Promise((resolve, reject) => {
            console.log(`Server is up & running on port ${this.port}`);
            this.server.listen(this.port, () => {
              return resolve(this);
            });
        });
    }
}

