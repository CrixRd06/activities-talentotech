import { useCallback } from "react";

export default function ButtonCount({ count, setCount }) {
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <section className="card">
      <h2>Contador</h2>
      <button onClick={increment}>count is {count}</button>
    </section>
  );
}
