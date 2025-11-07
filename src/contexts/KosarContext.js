import { createContext } from "react";
import { konyvLista } from "../adat";
import { useState } from 'react';

export const KosarContext = createContext("");

export const KosarProvider = ({ children }) => {
  const [kosarLista, setKosarLista] = useState([]);
  function kosarba(adat) {
    const sl = [...kosarLista];
    sl.push(konyvLista[adat]);
    setKosarLista([...sl]);
    console.table(sl);
  }

  return <KosarContext.Provider value={{ kosarLista, konyvLista, kosarba }}>
    {children}
  </KosarContext.Provider>;
};
