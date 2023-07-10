
import './App.css';
import Box from './components/box';
import BoxForm from './components/BoxForm';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const boxList = (box) => {
    setBoxes( boxes => [...boxes, box ] ) 
  }


  return (
    <div className="App">
      <BoxForm boxList = { boxList }/>
      <div className='flex'>
        { boxes.map( (box, i) =>
          <Box color = { box.color } key={ i }/>
        )}
      </div>
      
    </div>
  );
}

export default App;
