import { BrowserWindow } from 'electron';
import { Response, Request } from 'express';
const express = require('express');

const server = express();

export const createServer = (window: BrowserWindow) => {
	server.use(express.json());
	server.post('/log', (req: Request, res: Response) => {
		window.webContents.send('log', JSON.stringify(req.body));

		res.status(204).send();
	});

	server.listen(9723, () => {
		console.log(`Webserver running at port ${9723}`);
	});
};
