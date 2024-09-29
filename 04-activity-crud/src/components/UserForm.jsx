export function UserForm({ name, email, setName, setEmail, editing, handleAddUser, handleUpdateUser }) {
    return (
        <section className='section-form'>
            <h2 className="section-form-title">Formulario</h2>
            <section className='section-form-user'>
                <input type="text" placeholder='Nombre...' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder='Email...' value={email} onChange={(e) => setEmail(e.target.value)} />
                {
                    editing ? (<button onClick={handleUpdateUser}>Actualizar Usuario</button>) :
                        (<button onClick={handleAddUser}>Agregar Usuario</button>)
                }
            </section>
        </section>
    );
}