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

		default:
			return state;
	}
};
