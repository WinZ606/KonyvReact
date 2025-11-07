import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import Konyv from './components/Konyv';
import { konyvLista } from './adat';
import Konyvek from './components/Konyvek';
import Kosar from './components/Kosar';

function App() {
  const [kosarLista,setKosarLista]=useState([])
  function kosarba(adat){
    const sl=[...kosarLista]
    sl.push(konyvLista[adat])
    setKosarLista([...sl])
    console.table(sl)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>Könyvek</p>
      </header>
      <section className="kosar">
        <Kosar lista={kosarLista}/>
      </section>
      <article>
        <Konyvek konyvLista={konyvLista} kosarba={kosarba}/>
      </article>
    </div>
  );
}

export default App;
