import { all } from 'redux-saga/effects';

import { todosSagas } from './todos';
import { forecastSagas } from './forecast';

export default function* rootSaga() {
	yield all([
		...todosSagas,
		...forecastSagas,
	]);
};
