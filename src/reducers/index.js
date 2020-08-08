import { combineReducers } from 'redux';

import { REDUCER_KEY as FORECAST_REDUCER_KEY } from 'src/actionTypes/forecast';
import { REDUCER_KEY as TODO_REDUCER_KEY } from 'src/actionTypes/todos';

import forecastReducer from './forecast';
import todosReducer from './todos';

const reducers = combineReducers({
	[FORECAST_REDUCER_KEY]: forecastReducer,
	[TODO_REDUCER_KEY]: todosReducer,
});

export default reducers;