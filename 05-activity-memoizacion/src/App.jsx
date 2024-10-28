import { useState, lazy } from "react";
import "./App.css";
import { ListElements } from "./components/ListElements";
import { FormList } from "./components/FormList";
import { Operation } from "./components/operation";
import { Suspense } from "react";

const ButtonCount = lazy(() => import("./components/ButtonCount"));

function App() {
  const [count, setCount] = useState(15);
  const [list, setList] = useState([
    "Manzana",
    "Pera",
    "Banano",
    "Sandia",
    "Limon",
    "Mango",
    "Guayaba",
    "Tomate de arbol",
    "Mora",
    "Piña",
    "Maracuya",
    "Naranja",
  ]);

  return (
    <main>
      <h1>Taller de Optimización y Memoización</h1>
      <ButtonCount count={count} setCount={setCount} />
      <FormList list={list} setList={setList} />
      <Suspense fallback={<Loading />}>
        <ListElements list={list} />
      </Suspense>
      <Operation number={count} />
    </main>
  );
}

function Loading() {
  return <h2>Cargando...</h2>;
}

export default App;
