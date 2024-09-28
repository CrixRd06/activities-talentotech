import { useState } from 'react'
import './App.css'
import { ButtonCount } from './components/ButtonCount';
import { ListElements } from './components/ListElements';

function App() {
  const [count, setCount] = useState(0);
  const [list, setList] = useState(["Manzana", "Pera", "Banano", "Sandia"]);

  const [inputValue, setInputValue] = useState('');


  const handleChange = (e) => {
      setInputValue(e.target.value);
  }

  return (
    <>
      <h1>Taller de Optimización y Memoización</h1>
      <ButtonCount count={count} setCount={setCount}/>
      <ListElements list={list} setList={setList} inputValue={inputValue} setInputValue={setInputValue} handleChange={handleChange}/>

    </>
  )
}

export default App
