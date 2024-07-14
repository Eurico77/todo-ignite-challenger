import styles from './task.module.css';
import { Trash2 } from 'lucide-react';

type TaskProps = {
  taskId: number;
  taskDescription: string;
  checked: boolean;
  onDeleteTask: (taskId: number) => void;
  onCheckedTask: (taskId: number) => void;
};

export default function Task({
  taskId,
  taskDescription,
  onDeleteTask,
  onCheckedTask,
  checked,
}: TaskProps) {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <input
          type="checkbox"
          id={`checkbox-${taskId}`}
          checked={checked}
          onChange={() => onCheckedTask(taskId)}
        />
        <label htmlFor={`checkbox-${taskId}`}></label>
        {!checked && <span>{taskDescription}</span>}
        {checked && (
          <s>
            <span className={styles.disabled}>{taskDescription}</span>
          </s>
        )}
      </div>
      <button className={styles.icon} onClick={() => onDeleteTask(taskId)}>
        <Trash2 size={20} />
      </button>
    </div>
  );
}
