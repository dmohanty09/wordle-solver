import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import CharList from './components/CharList.js';
import FilterList from './components/FilterList.js';
import API from './API.js';

function App() {
  const startArr = []
  for (let i = 0; i < 5; i++) {
    startArr.push({wc: '',
                   color: 'white',
                   index: i});
  }
  const [wchars, setWchars] = useState(startArr);

  const [wordList, setWordList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(()=>{
    API.getData(setWordList, setFilterList);
  },[]);

  useEffect(()=>{
    let filtered = wordList.filter((word) => {
      for(let i = 0; i < wchars.length; i++){
        let wC = wchars[i];
        if(wC['color'] == 'green' && wC['wc'] !== word[i]){
          return false;
        }
      }
      return true;
    });
    setFilterList(filtered);
  },[wchars]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wordle Solver
        </p>
        <div className="Chars-container">
          <CharList wchars={wchars} setWchars={setWchars}/>
        </div>
      </header>
      <FilterList filterList={filterList}/>
    </div>
  );
}

export default App;
