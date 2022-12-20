import { log } from './app-provider';
export default (state: any, action: { type: string; payload?: any }) => {
	switch (action.type) {
		case 'CLEAN_LOGS':
			return {
				...state,
				logs: [],
			};
		case 'SHOW_HIDDEN_SETTINGS':
			return {
				...state,
				showSettings: !state.showSettings,
			};
		case 'FILTER_LOGS':
			return {
				...state,
				filtered: state.logs.filter((log: log) => log.color === action.payload),
			};
		case 'HANDLE_LOG':
			return {
				...state,
				logs: [action.payload, ...state.logs],
			};
		default:
			return state;
	}
};
