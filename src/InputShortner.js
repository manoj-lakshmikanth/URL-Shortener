import React, { useState } from 'react';

const InputShortner = ({ setInputVal }) => {
  const [value, setValue] = useState('');

  const submitHandler = () => {
    setInputVal(value);
    setValue('');
  };

  return (
    <div className="inputContainer">
      <h1>
        URL <span>Shortner</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste here"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></input>
        <button onClick={submitHandler}>Shorten</button>
      </div>
    </div>
  );
};

export default InputShortner;
