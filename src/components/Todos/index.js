import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchTodos,
  toggleDoneItems,
  toggleSort,
  setAddTodo,
} from 'src/actions';
import {
  getTodoListSelector,
  getDisplayCompletedSelector,
  getAddTodoSelector,
} from 'src/selectors/todos';
import TodoItem from 'src/components/TodoItem';
import AddTodo from 'src/components/AddTodo';
import './style.scss';

const Todos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  const todos = useSelector(getTodoListSelector);
  const displayCompleted = useSelector(getDisplayCompletedSelector);
  const addTodo = useSelector(getAddTodoSelector);

  const handleToggleCompleted = () => {
    dispatch(toggleDoneItems());
  };

  const handleSort = () => {
    dispatch(toggleSort());
  };

  return (
    <div className="todos">
      <div className="todos__helpers">
        <button
          onClick={handleToggleCompleted}
          className="todos__helpers__toggle">
            Toggle Completed
        </button>
        <button
          onClick={handleSort}
          className="todos__helpers__toggle">
            Sort
        </button>
        <button
          onClick={() => dispatch(setAddTodo())}
          className="todos__helpers__toggle">
            {addTodo ? 'Dismiss new Todo idem' : 'Add'}
        </button>
      </div>
      {todos.map(todo => {
        const done = Boolean(Number(todo.done));
        return (!done || displayCompleted) && <TodoItem key={todo.uuid} todo={todo} />
      })}
      {addTodo && <AddTodo />}

    </div>
  );
}

export default Todos;
