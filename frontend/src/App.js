import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useState } from 'react';

function App() {
  const [refresh, setRefresh] = useState(false);

  const handleTaskCreated = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList key={refresh} />
    </div>
  );
}

export default App;
