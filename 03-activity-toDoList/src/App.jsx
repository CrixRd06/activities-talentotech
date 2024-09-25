import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

export default function App() {
  
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {text: taskText, completed: false};
    setTasks([...tasks, newTask]);
  }

  const deleteTask = (taskIndex) => {
    const newTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(newTasks);
  }
  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TaskForm addTask={addTask}/>

      <TaskList tasks={tasks} deleteTask={deleteTask}/>
    </div>

  );
}
