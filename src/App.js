import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function getData (setWordList, setFilterList) {
    fetch('words_dictionary.json',{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      }).then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        let fiveC = Object.keys(myJson).filter((key) => key.length === 5);
        setWordList(fiveC);
        setFilterList(fiveC);
      });
  }

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
    getData(setWordList, setFilterList);
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


  const handleInput = (e, index, wchars, setWchars) => {
    let cval = e.target.value;
    let newHash;
    if (cval === '') {
      newHash = {wc: cval,color: 'white', index: index};
    }else {
      newHash = {wc: cval,color: 'green', index: index};
    }
    let newArr = [...wchars];
    newArr[index] = newHash;
    console.log(newArr);
    setWchars(newArr);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wordle Solver
        </p>
        <div className="Chars-container">
          <ul>
             {wchars.map((wchar, index) =>
                // (<CharBlock key={index} {...wchar}/>))}
                <input key={wchar.index}
                        onChange={(e) => handleInput(e, wchar.index, wchars, setWchars)}
                        defaultValue={wchar.wc}
                        maxLength="1"
                        style={{backgroundColor: wchar.color}}/>)}
          </ul>
        </div>
      </header>
      <div className="WordList">
        {filterList.map((word) =>
                <div key={word}>{word}</div>)}
      </div>
    </div>
  );
}

export default App;
