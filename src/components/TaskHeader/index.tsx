import Task from '../Tasks';
import styles from './taskHeader.module.css';
import { ClipboardList } from 'lucide-react';

export type Tasks = {
  id: number;
  description: string;
  checked: boolean;
};

type TaskHeaderProps = {
  tasks: Tasks[];
  onDeleteTask: (taskId: number) => void;
  onCheckedTask: (taskId: number) => void;
};

export default function TaskHeader({
  tasks,
  onDeleteTask,
  onCheckedTask,
}: TaskHeaderProps) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.count}>
          <strong>Tarefas criadas</strong> <span>{tasks.length}</span>
        </div>
        <div className={styles.pending}>
          <strong>Concluídas</strong>{' '}
          <span>
            {tasks.filter((task) => task.checked).length} de {tasks.length}
          </span>
        </div>
      </header>

      <main className={styles.tasksContainer}>
        {!tasks.length && (
          <div className={styles.tasksContainerDisable}>
            <ClipboardList size={60} />
            <div className={styles.tasksContainerDescriptionDisabled}>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}

        {tasks.map((task) => (
          <Task
            key={task.id}
            taskId={task.id}
            taskDescription={task.description}
            checked={task.checked}
            onDeleteTask={onDeleteTask}
            onCheckedTask={() => onCheckedTask(task.id)}
          />
        ))}
      </main>
    </>
  );
}
