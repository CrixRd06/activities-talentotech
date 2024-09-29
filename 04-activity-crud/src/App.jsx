import { useState } from 'react'
import './App.css'
import { UsersList } from './components/UsersList';
import { UserForm } from './components/UserForm';

function App() {

  const [users, setUsers] = useState([
    { id: 1, name: 'Juan', email: 'juan@gmail.com' },
    { id: 2, name: 'Maria', email: 'maria@gmail.com' }
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleAddUser = () => {
    if (name && email) {
      const newUser = {
        id: users.length + 1,
        name,
        email
      };
      setUsers([...users, newUser]);
      setName("");
      setEmail("");
    }
  }

  const handleUpdateUser = () => {
    setUsers(
      users.map((user) =>
        user.id === currentUser.id ? { ...user, name, email } : user
      )
    );
    setEditing(false);
    setName("");
    setEmail("");
  }

  return (
    <main className='app'>
      <h1 className='app-title'>CRUD Usuarios</h1>
      <UserForm name={name} email={email} setName={setName} setEmail={setEmail} editing={editing} handleAddUser={handleAddUser} handleUpdateUser={handleUpdateUser}/>
      <UsersList users={users} setUsers={setUsers} setEditing={setEditing} setCurrentUser={setCurrentUser} setName={setName} setEmail={setEmail}/>
    </main>
  )
}

export default App
