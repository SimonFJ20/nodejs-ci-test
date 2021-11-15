import cors from "cors";
import express from "express";
import { api } from "./api";

const PORT = 8000;

const main = () => {
    const app = express();

    app.use(cors(), express.json());

    app.use('/', api());

    app.use('/', express.static('./public'));

    app.listen(PORT, () => console.log('NodeJS Express server on port', PORT));
}

main();
