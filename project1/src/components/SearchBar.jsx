import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';
const SearchBar = () => {
  const [text, setText] = useState('');
const dispatch=useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text))
    setText('')
    console.log('Form submitted with:', text);
  };

  return (
    <div>
      <form 
        onSubmit={submitHandler}
        className="flex gap-5 p-10"
      >
        <input 
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            console.log('Typing:', e.target.value);
          }}
          required
          className="w-full border-2 px-4 py-2 text-xl rounded outline-none text-black"
          type="text" 
          placeholder="Search anything..." 
        />

        <button 
          className="cursor-pointer border-2 px-4 py-2 text-xl rounded hover:bg-blue-500 hover:text-white transition"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
