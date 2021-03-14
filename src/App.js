import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {convertBin, convertDec} from './components/BinDecConverter';

function App() {
  const [binval, setBinVal] = useState('');
  const [decRes, setDecRes] = useState('');
  const [decval,setDecVal] = useState('');
  const [binRes,setBinRes] = useState('');

  const BinToDec = (e) => {
    e.preventDefault();
    var res=convertBin(binval);
    setDecRes(res);
  }

  const DecToBin = (e) => {
    e.preventDefault();
    var i=0;
    var res=convertDec(decval);
    setBinRes(res);
  }
  return (
    <div className="App">
      <h1>Binary to Decimal converter</h1>
      <form onSubmit={BinToDec}>
        <input value = {binval} onChange={(e) => setBinVal(e.target.value)} placeholder="input a binary number"/>
        <button type="submit"> Submit</button>
      </form>
      <p>The decimal value of this number is: {decRes}</p>

      <h1>Decimal to Binary converter</h1>
      <form onSubmit={DecToBin}>
        <input value = {decval} onChange={(e) => setDecVal(e.target.value)} placeholder="input a decimal number"/>
        <button type="submit"> Submit</button>
      </form>
      <p>The binary value of this number is: {binRes}</p>
    </div>
  );
}

export default App;
