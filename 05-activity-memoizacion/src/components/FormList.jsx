import { useState } from "react";

export function FormList({ list, setList }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() !== "") {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  return (
    <section className="section-form-fruit">
      <h2>Agregar fruta</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Añadir nueva fruta..."
      />
      <button onClick={addItem}>Agregar</button>
    </section>
  );
}
