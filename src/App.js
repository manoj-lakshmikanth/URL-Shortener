import InputShortner from './InputShortner';
import './App.css';
import BackgroundAnimate from './BackgroundAnimate';
import LinkResult from './LinkResult';
import { useState } from 'react';

function App() {
  const [inputVal, setInputVal] = useState('');
  return (
    <div className="container">
      <InputShortner setInputVal={setInputVal} />
      <BackgroundAnimate />
      <LinkResult inputVal={inputVal} />
    </div>
  );
}

export default App;
