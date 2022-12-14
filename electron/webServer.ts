const express = require("express");
import { BrowserWindow } from "electron";
import { Response, Request } from "express";

const server = express();

export const createServer = (window: BrowserWindow) => {
  server.use(express.json());
  server.post("/log", (req: Request, res: Response) => {
    console.log(req.body);

    window.webContents.send("log", JSON.stringify(req.body));

    res.status(204).send();
  });

  server.listen(9723, () => {
    console.log(`Webserver running at port ${9723}`);
  });
};
