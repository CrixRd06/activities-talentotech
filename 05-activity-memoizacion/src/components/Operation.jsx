import { useMemo } from "react";

export function Operation({ number }) {
  const fib = (numb) => {
    if (numb <= 1) return numb;
    return fib(numb - 1) + fib(numb - 2);
  };

  const calculation = (number) => {
    console.log("Calculando...");
    return fib(number);
  };

  const fibonacci = useMemo(() => calculation(number), [number]);

  return (
    <section>
      <h2>Operación</h2>
      <p>
        Fibonacci de {number} es: {fibonacci}
      </p>
    </section>
  );
}
