import { createSelector } from 'reselect';
import getFp from 'lodash/fp/get';

import { REDUCER_KEY as FORECAST_REDUCER_KEY } from 'src/actionTypes/forecast';

export const forecastSelector = getFp(
	FORECAST_REDUCER_KEY,
);

export const getForecastSelector = createSelector(
	forecastSelector,
	getFp('forecastData'),
);
export const getCitySelector = createSelector(
	forecastSelector,
	getFp('city'),
);
