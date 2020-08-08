import {
	GET_TODOS,
  SET_TODOS,
  UPDATE_TODO_ITEM,
	FETCH_TODOS,
	TOGGLE_DONE_ITEMS,
	TOGGLE_SORT,
	ADD_TODO_ITEM,
	SET_ADD_TODO,
} from 'src/actionTypes/todos';

export const getTodos = () => ({
	type: GET_TODOS,
});

export const fetchTodos = () => ({
	type: FETCH_TODOS,
});

export const updateTodoItem = todoItem => ({
	type: UPDATE_TODO_ITEM,
	todoItem,
});

export const setTodos = todoList => ({
	type: SET_TODOS,
	todoList,
});

export const toggleDoneItems = () => ({
	type: TOGGLE_DONE_ITEMS,
});

export const toggleSort = () => ({
	type: TOGGLE_SORT,
});

export const addTodoItem = todoItem => ({
	type: ADD_TODO_ITEM,
	todoItem,
});

export const setAddTodo = todoItem => ({
	type: SET_ADD_TODO,
	todoItem,
});
