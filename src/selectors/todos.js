import { createSelector } from 'reselect';
import getFp from 'lodash/fp/get';

import { REDUCER_KEY as TODOS_REDUCER_KEY } from 'src/actionTypes/todos';

export const todosSelector = getFp(
	TODOS_REDUCER_KEY,
);

export const getTodoListSelector = createSelector(
	todosSelector,
	getFp('todoList'),
);


export const getDisplayCompletedSelector = createSelector(
	todosSelector,
	getFp('displayCompleted'),
);

export const getAddTodoSelector = createSelector(
	todosSelector,
	getFp('displayAddTodo'),
);
