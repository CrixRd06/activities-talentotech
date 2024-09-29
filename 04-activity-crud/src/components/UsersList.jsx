export function UsersList({ users, setUsers, setEditing, setCurrentUser, setName, setEmail }) {

    const handleDeleteUser = (id) => {
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers);
    }

    const handleEditUser = (user) => {
        setEditing(true);
        setCurrentUser(user);
        setName(user.name);
        setEmail(user.email);
    };

    return (
        <section className='section-list'>
            <h2 className='section-list-title'>Lista de Usuarios</h2>
            <table className='section-list-table'>
                <thead>
                    <tr>
                        <th>N°</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className='section-list-td'>
                                <button onClick={() => handleEditUser(user)}>Editar</button>
                                <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}