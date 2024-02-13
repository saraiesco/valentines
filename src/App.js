import './App.scss';
import { useState } from 'react';
import bear from './assets/bear.jpg';

function App() {
  const[noCount,setCount]=useState(0);
  const[yesPressed, setYesPressed]=useState(false);
  const yesButtonSize = noCount*20 +16;

  const phrases=[
    "No",
    "Are you sure?",
    "Really sure?",
    "Boogs please",
    "Pretty please",
    "nooooooooo ;("
  ]

  return (
    <div className="App">
      <header className="App-header">
        <b><p>
          Valentines
        </p></b>
      <img className='bear' src={bear} alt='bear'/>
        <p>Will you be my Valentine?</p>
      </header>
    </div>
  );
}

export default App;
