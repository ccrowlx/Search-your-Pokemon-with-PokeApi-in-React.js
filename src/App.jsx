import React, { useState } from 'react';
import './css/App.css';
import TittleComponent from './components/title-component/TittleComponent.jsx';
import CardsComponent  from './components/card-component/CardsComponent.jsx';
import SearchBarComponent from './components/search-bar-component/SearchBarComponent';


export function App() {

  const [nameValue, setNameValue] = useState('');

  const handleEnterPress = (value) => {
    setNameValue(value);
  }

  return (
    <>
      <TittleComponent></TittleComponent>
      <SearchBarComponent  
      onEnterPress={handleEnterPress}></SearchBarComponent>
      <CardsComponent namePokemon={nameValue} ></CardsComponent>

    </>
  )
}

export default App
