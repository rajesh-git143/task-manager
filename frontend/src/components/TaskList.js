import { useState, useEffect } from 'react';
import API from '../api';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get('/');
    setTasks(res.data);
  };

  const deleteTask = async (id) => {
    await API.delete(`/${id}`);
    fetchTasks();
  };

  const toggleComplete = async (task) => {
    await API.put(`/${task._id}`, { completed: !task.completed });
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      {tasks.map(task => (
        <div key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
          <button onClick={() => toggleComplete(task)}>
            Toggle Complete
          </button>
          <button onClick={() => deleteTask(task._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
