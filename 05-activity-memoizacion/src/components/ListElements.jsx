import { memo } from "react";

export const ListElements = memo(function ListElements({ list, setList, inputValue, setInputValue, handleChange}) {
    console.log("la lista se volvio a renderizar");

    const addItem = () => {
        if (inputValue.trim() !== ('')) {
            setList([...list, inputValue]);
            setInputValue('');
        }
    }

    return (

        <section className="card">
            <h2>Lista de elementos</h2>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="Añadir nueva fruta..." />
            <button onClick={addItem}>Agregar</button>
            <ul>
                {
                    list.map((fruit, index) => (
                        <li key={fruit}>{fruit}</li>
                    ))
                }
            </ul>
        </section>
    )
});


