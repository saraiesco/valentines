import './App.scss';
import { useState } from 'react';
import bear from './assets/bear.jpg';
import kiss from './assets/bearskissing.gif';

function App() {
  const[noCount,setNoCount]=useState(0);
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

  function handleNoClick(){
    setNoCount(noCount + 1);
  }

  function getNoButtonText(){
    return phrases[Math.min(noCount, phrases.length-1)];
  }
  return (
    <div className="App">
      <header className="App-header">
        { yesPressed?(<>
        <img src={kiss} alt="love"/>
        <div>Yayyyy!!! besos besos</div>
        </>) :(
          <>
        <b><p>
          Valentines
        </p></b>
      <img className='bear' src={bear} alt='bear'/>
        <p>Will you be my Valentine?</p>
        <div className='buttonContainer'>
        <button style={{fontSize: yesButtonSize}} className='yesButton' onClick={()=>setYesPressed(true)}>Si</button>
        <button className="noButton" onClick={handleNoClick}>{getNoButtonText()}</button>
        </div>
        </>
        )
}
      </header>
    </div>
  );
}

export default App;
