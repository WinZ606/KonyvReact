import './App.css';
import Konyvek from './components/Konyvek';
import Kosar from './components/Kosar';
import { KosarContext } from './contexts/KosarContext';
import { useContext } from 'react';

function App() {
  const { kosarLista, konyvLista, kosarba } = useContext(KosarContext)
  return (
    <div className="App">
      <header className="App-header">
        <p>Könyvek</p>
      </header>
      <section className="kosar">
        <Kosar lista={kosarLista}/>
      </section>
      <article>
        <Konyvek konyvLista={konyvLista} />
      </article>
    </div>
  );
}

export default App;
