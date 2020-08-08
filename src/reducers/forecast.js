import {
	GET_FORECAST,
	FETCH_FORECAST,
	SET_FORECAST,
} from 'src/actionTypes/forecast';

const initialState = {
	forecastData: [],
	city: undefined,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FORECAST: {
			return {
				...state,
				forecastData: action.forecastData.list,
				city: action.forecastData.city,
			}
		}
		default:
			return state;
	}
};

export default reducer;