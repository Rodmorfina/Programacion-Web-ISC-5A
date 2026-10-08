import express, { Router, type Express } from 'express';

type ServerOptions ={
    port: number;
    routes: Router;
    dataFormat: any;
}

export class Server {
    private readonly port: number;
    private readonly server: Express;
    private readonly routes: Router;
    private readonly dataFormat: any;

    public constructor(options: ServerOptions) {
        this.server = express();
        this.port = options.port;
        this.routes = options.routes;

        this.dataFormat = options.dataFormat;
    }

    public start = ()=>{
        //Con esto se entiende que las peticiones se pueden formatear en JSON
        this.server.use(this.dataFormat);
        this.server.use("/api", this.routes);

        this.server.listen(this.port, ()=>{
            console.log(`server running on port ${this.port}`);
        });
    }
}