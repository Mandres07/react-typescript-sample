import React, { useState } from 'react';
import './NewTodo.css';

type NewTodoProps = {
   onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
   const [inputValue, setInputValue] = useState('');

   const todoSubmitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      props.onAddTodo(inputValue);
      setInputValue('');
   };

   const inputChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
      setInputValue(event.currentTarget.value);
   };

   return (
      <form onSubmit={todoSubmitHandler}>
         <div className='form-control'>
            <label htmlFor='todo-text'>Todo Text</label>
            <input type="text" id='todo-text' value={inputValue} onChange={inputChangeHandler} />
         </div>
         <button type='submit'>ADD TODO</button>
      </form>
   );
};

export default NewTodo;