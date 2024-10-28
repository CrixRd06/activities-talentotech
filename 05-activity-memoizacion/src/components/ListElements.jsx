import { memo } from "react";

export const ListElements = memo(function ListElements({ list }) {
  console.log("la lista se volvio a renderizar");

  return (
    <section className="section-list-fruits">
      <h2>Lista de elementos</h2>
      <ul>
        {list.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </section>
  );
});
