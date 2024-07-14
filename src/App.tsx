import Header from './components/Header';
import Input from './components/Input';
import styles from './app.module.css';
import Button from './components/Button';
import TaskHeader, { Tasks } from './components/TaskHeader';
import { useEffect, useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState(
    localStorage.getItem('tasks')
      ? JSON.parse(localStorage.getItem('tasks') as string)
      : []
  );

  const handleCreateTask = () => {
    if (!value) return;
    setTasks([
      ...tasks,
      { id: tasks.length + 1, description: value, checked: false },
    ]);
    setValue('');
  };

  const handleInputValue = (value: string) => {
    setValue(value);
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter((task: Tasks) => task.id !== taskId));
  };

  const handleCheckedTask = (taskId: number) => {
    setTasks(
      tasks.map((task: Tasks) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.form}>
          <Input value={value} onSetValue={handleInputValue} />
          {value && <Button onCreateTask={handleCreateTask} />}
          {!value && <Button value={value} onCreateTask={handleCreateTask} />}
        </div>
        <div className={styles.taskList}>
          <TaskHeader
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onCheckedTask={handleCheckedTask}
          />
        </div>
      </div>
    </>
  );
}
