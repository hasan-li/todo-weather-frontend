import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

import {
	FETCH_FORECAST,
	SET_FORECAST,
} from 'src/actionTypes/forecast';
import { apiKey, baseApiUrl } from 'src/const/forecast';

function* fetchForecast() {
	const url = `${baseApiUrl}?q=Warsaw&appid=${apiKey}&units=metric`;
	const { status, data: { city, list } } = yield axios(url);

	if (status !== 200) {
		console.log('Error while fetching forecast data');
		return;
	}
	const forecastData = { city, list };
	yield put({ type: SET_FORECAST, forecastData });
}

export const forecastSagas = [
	takeLatest(FETCH_FORECAST, fetchForecast),
];
