import React, {
	createContext,
	useContext,
	useReducer,
	ReactElement,
} from 'react';
import appReducer from './app-reducer';

type AppProviderProps = {
	children: ReactElement;
};

interface log {
	id: string;
	color: string;
	data: string;
	backTrace: string;
}

type InitialStateType = {
	logs: log[];
	showSettings: boolean;
	onCleanLogs?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	onShowSettings?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

// TODO: remove
const logs = [
	{
		id: '2',
		color: 'green',
		data: 'ppepepe',
		backTrace: 'cacaca',
	},
	{
		id: '1',
		color: 'red',
		data: 'ppepepe',
		backTrace: 'cacaca',
	},
	{
		id: '3',
		color: 'yellow',
		data: 'ppepepe',
		backTrace: 'cacaca',
	},
	{
		id: '5',
		color: 'blue',
		data: 'ppepepe',
		backTrace: 'cacaca',
	},
];

const initialState = {
	logs,
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

	return (
		<AppContext.Provider
			value={{
				logs: state.logs,
				showSettings: state.showSettings,
				onCleanLogs,
				onShowSettings,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
