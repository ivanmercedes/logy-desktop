import React, {
	createContext,
	useContext,
	useReducer,
	ReactElement,
	useEffect,
} from 'react';
import appReducer from './app-reducer';
const { ipcRenderer } = window.require('electron');

type AppProviderProps = {
	children: ReactElement;
};

export interface log {
	id: string;
	color: string;
	data: string;
	backTrace: string;
}

type InitialStateType = {
	logs: log[];
	filtered: log[] | null;
	showSettings: boolean;
	onCleanLogs?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onShowSettings?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onFilterLogs?: (value: string) => void;
};

const initialState = {
	logs: [],
	filtered: null,
	showSettings: false,
};

const AppContext = createContext<InitialStateType>(initialState);

export const AppProvider = ({ children }: AppProviderProps) => {
	const [state, dispatch] = useReducer(appReducer, initialState);

	const onCleanLogs = () =>
		dispatch({
			type: 'CLEAN_LOGS',
		});

	const onShowSettings = () =>
		dispatch({
			type: 'SHOW_HIDDEN_SETTINGS',
		});

	const onFilterLogs = (value: string) => {
		console.log(value);
		dispatch({
			type: 'FILTER_LOGS',
			payload: value,
		});
	};

	useEffect(() => {
		return () => {
			ipcRenderer.on('log', (event: Event, message: string) => {
				console.log(message);
				dispatch({
					type: 'HANDLE_LOG',
					payload: message,
				});
			});
		};
	}, []);

	return (
		<AppContext.Provider
			value={{
				logs: state.logs,
				filtered: state.filtered,
				showSettings: state.showSettings,
				onCleanLogs,
				onShowSettings,
				onFilterLogs,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
