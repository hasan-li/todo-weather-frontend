import {
	GET_FORECAST,
	FETCH_FORECAST,
	SET_FORECAST,
} from 'src/actionTypes/forecast';

export const getForecast = () => ({
	type: GET_FORECAST,
});

export const fetchForecast = () => ({
	type: FETCH_FORECAST,
});

export const setForecast = forecast => ({
	type: SET_FORECAST,
	forecast,
});
