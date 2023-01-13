import net from 'net';
import { BrowserWindow } from 'electron';

export const createServer = (window: BrowserWindow) => {
	// Crea un servidor TCP para recibir la información de log enviada por el paquete npm logy
	const server = net.createServer(socket => {
		socket.on('data', (data: string) => {
			console.log(JSON.parse(data));
			// Recibe la información de log y la muestra en la aplicación de escritorio
			window.webContents.send('log', JSON.parse(data));
		});

		socket.on('error', console.log);
	});

	server.listen(9723, () => {
		console.log('Servidor iniciado en el puerto 9723');
	});
};
