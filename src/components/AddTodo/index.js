import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTodoItem, setAddTodo } from 'src/actions';

import './style.scss';

const AddTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');

  const save = () => {
    dispatch(addTodoItem({
      title,
      description,
      priority,
      uuid: uuidv4(),
    }));
    dispatch(setAddTodo());
	};

  return (
    <div className="add-todo">
      <input
        className="add-todo__input"
        type="text"
        placeholder="Title"
        onInput={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        className="add-todo__input"
        onInput={e => setDescription(e.target.value)}
      />
      <select onChange={e => setPriority(e.target.value)}>
        <option value=""></option>
        <option value="low">Low</option>
        <option value="normal">Normal</option>
        <option value="high">High</option>
      </select>
      <button
        onClick={save}
        className="add-todo__btn"
      >
        Save
      </button>
    </div>
  );
}

export default AddTodo;
