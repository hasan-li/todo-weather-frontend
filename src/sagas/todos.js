import { takeLatest, put, call } from 'redux-saga/effects';

import {
	GET_TODOS,
  SET_TODOS,
  UPDATE_TODO_ITEM,
	FETCH_TODOS,
	ADD_TODO_ITEM,
} from 'src/actionTypes/todos';
import { baseUrl } from 'src/const/api';

function* fetchTodoList() {
	const url = `${baseUrl}todo/list`;
	const todoList = yield fetch(url, {
		method: 'GET',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json; charset=utf-8',
		}
	}).then(r => {
		if (r.status !== 200) {
			console.log('failed while getting todo list', r.status);
			return;
		}
		return r.json();
	});

	yield put({ type: SET_TODOS, todoList });
}

function* updateTodoList({ todoItem }) {
	const url = `${baseUrl}todo/update`;

	yield fetch(url, {
		method: 'POST',
		cache: 'default',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify(todoItem),
	});
}

function* addTodoItem({ todoItem }) {
	const url = `${baseUrl}todo/add`;

	yield fetch(url, {
		method: 'POST',
		cache: 'default',
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Content-Type': 'application/json; charset=utf-8',
		},
		body: JSON.stringify(todoItem),
	});

	yield call(fetchTodoList);
}

export const todosSagas = [
	takeLatest(FETCH_TODOS, fetchTodoList),
	takeLatest(UPDATE_TODO_ITEM, updateTodoList),
	takeLatest(ADD_TODO_ITEM, addTodoItem),
];
