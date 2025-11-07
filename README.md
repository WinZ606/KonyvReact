A React-ben a Provider egy olyan eszköz, amivel adatokat tudunk megosztani a komponenseink között anélkül, hogy azokat propsként kéne továbbadni.
Ez főleg akkor hasznos, ha valamit az egész alkalmazás több pontján is el kell érni.
A működése: először létrehozunk egy kontextust a createContext() függvénnyel, majd a Provider komponenssel körbevonjuk azokat a részeket, ahol elérhetővé akarjuk tenni az adatot.
A Provider egy value nevű propot kap, ebben adjuk át az értéket, amit meg akarunk osztani.
A komponensek ezután a useContext() hook segítségével tudják ezt az értéket elérni
