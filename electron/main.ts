import path from 'path';
import { app, BrowserWindow, ipcMain, shell } from 'electron';
import { release } from 'os';
import { createServer } from './webServer';

const execSync = require('child_process').execSync;
// import installExtension, {
// 	REACT_DEVELOPER_TOOLS,
// } from 'electron-devtools-installer';

let win: BrowserWindow | null = null;

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration();

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName());

if (!app.requestSingleInstanceLock()) {
	app.quit();
	process.exit(0);
}

const URL = process.env.VITE_DEV_SERVER_URL;
const INDEX_HTML = path.join(__dirname, '../dist/index.html');

const createWindow = () => {
	win = new BrowserWindow({
		title: 'Main window',
		minWidth: 780,
		webPreferences: {
			// preload,
			// Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
			// Consider using contextBridge.exposeInMainWorld
			// Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
			nodeIntegration: true,
			contextIsolation: false,
		},
	});
	if (process.env.VITE_DEV_SERVER_URL) {
		// TODO: fix devtools integration
		// Install react dev tool
		// installExtension(REACT_DEVELOPER_TOOLS)
		// 	.then(name => console.log(`Added Extension:  ${name}`))
		// 	.catch(err => console.log('An error occurred: ', err));

		win.loadURL(URL!);

		win.webContents.openDevTools();
	} else {
		win.loadFile(INDEX_HTML);
	}

	// remove menu bar
	//   win.setMenu(null);

	// Make all links open with the browser, not with the application
	win.webContents.setWindowOpenHandler(({ url }) => {
		if (url.startsWith('https:')) shell.openExternal(url);
		return { action: 'deny' };
	});

	return win;
};

app.whenReady().then(() => {
	const window = createWindow();
	// Start web server
	createServer(window);
});

app.on('window-all-closed', () => {
	win = null;
	if (process.platform !== 'darwin') app.quit();
});

app.on('second-instance', () => {
	if (win) {
		// Focus on the main window if the user tried to open another
		if (win.isMinimized()) win.restore();
		win.focus();
	}
});

app.on('activate', () => {
	const allWindows = BrowserWindow.getAllWindows();
	if (allWindows.length) {
		allWindows[0].focus();
	} else {
		const window = createWindow();
		// Start web server
		createServer(window);
	}
});

// TODO: store setting data on flat json file
ipcMain.on('save-settings', (event, arg) => {
	console.log(arg);
});

ipcMain.on('open-file', (event, arg) => {

	execSync('code -g ' + arg, {
		stdio: 'inherit',
	});
});
