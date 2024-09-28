export function ButtonCount({ count, setCount }) {
    return (
        <section className="card">
            <h2>Contador</h2>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </section>
    )
}