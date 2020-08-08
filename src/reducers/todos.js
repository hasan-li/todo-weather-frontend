import orderBy from 'lodash/orderBy';

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

const initialState = {
	todoList: [],
	displayCompleted: false,
	sortOrder: 'asc',
	displayAddTodo: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TODOS: {
			const { todoList } = action;
			const { sortOrder } = state;
			const sortedTodoList = orderBy(todoList, ['created_at'], [sortOrder]);
			const updatedSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
			return {
				...state,
				todoList: sortedTodoList,
				sortOrder: updatedSortOrder,
			}
    }
    case UPDATE_TODO_ITEM: {
      return {
        ...state,
      }
		}
		case TOGGLE_DONE_ITEMS: {
			return  {
				...state,
				displayCompleted: !state.displayCompleted,
			}
		}
		case TOGGLE_SORT: {
			const { todoList, sortOrder } = state;
			const sortedTodoList = orderBy(todoList, ['created_at'], [sortOrder]);
			const updatedSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
			return  {
				...state,
				todoList: sortedTodoList,
				sortOrder: updatedSortOrder,
			}
		}

		case SET_ADD_TODO: {
			return {
				...state,
				displayAddTodo: !state.displayAddTodo,
			}
		}

		default:
			return state;
	}
};

export default reducer;