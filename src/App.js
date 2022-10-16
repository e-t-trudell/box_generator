import {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';


function App() {
  const [collection,setCollection]= useState([])
  // const [box,setBox]= useState('')

  return (
    <div className="App">
      <Form collection={collection} setCollection={setCollection}/>
      <Display collection={collection} setcollection={setCollection} />
    </div>
  );
};

export default App;
