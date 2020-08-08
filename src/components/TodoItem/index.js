import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';

import { updateTodoItem } from 'src/actions';
import { LOW, NORMAL, HIGH } from 'src/const/todos';

import './style.scss';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [priority, setPriority] = useState(todo.priority);
  const [done, setDone] = useState(Boolean(Number(todo.done)));
  const editHandle = () => {
		setEdit(!edit);
	};
  const saveEdit = () => {
    setEdit(!edit);
    dispatch(updateTodoItem({
      title,
      description,
      uuid: todo.uuid,
      priority,
      id: todo.id,
      done,
    }));
	};

  return (
    <div className="todo-item">
      <div className={cx({
        'todo-item--done': done,
        'todo-item--in-progress': !done,
      })}>
        {edit ? (
            <>
              <input
                className="todo-item__input"
                type="text"
                defaultValue={title}
                onInput={e => setTitle(e.target.value)}
              />
              <input
                type="text"
                defaultValue={description}
                className="todo-item__input"
                onInput={e => setDescription(e.target.value)}
              />
              <select value={priority} onChange={e => setPriority(e.target.value)}>
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
              </select>
              {!done && <button>Done</button>}
              <button onClick={saveEdit}>Save</button>
            </>
          ) : (
            <>
              <p className="todo-item__title">{title}</p>
              <p>{description}</p>
              <div className={cx({
                'todo-item__priority--low': priority === LOW,
                'todo-item__priority--normal': priority === NORMAL,
                'todo-item__priority--high': priority === HIGH,
              })}>
                {priority}
              </div>
              <button
                onClick={editHandle}
                className="todo-item__btn"
              >
                Edit
              </button>
            </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
