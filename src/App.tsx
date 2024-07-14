import Header from './components/Header';
import Input from './components/Input';
import styles from './app.module.css';
import Button from './components/Button';
import TaskHeader, { Tasks } from './components/TaskHeader';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Levar o dog pra passear', checked: false },
    { id: 2, description: 'Comprar leite', checked: false },
  ] as Tasks[]);

  const handleCreateTask = () => {
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
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleCheckedTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, checked: !task.checked } : task
      )
    );
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.form}>
          <Input value={value} onSetValue={handleInputValue} />
          <Button onCreateTask={handleCreateTask} />
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
