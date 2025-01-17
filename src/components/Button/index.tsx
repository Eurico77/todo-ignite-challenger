import styles from './button.module.css';
import { PlusCircle } from 'lucide-react';

type ButtonProps = {
  onCreateTask: () => void;
  value?: string;
};

export default function Button({ onCreateTask, value }: ButtonProps) {
  return (
    <>
      <button
        disabled={value?.length === 0}
        className={styles.button}
        type="submit"
        onClick={onCreateTask}
      >
        Criar
        <span>
          <PlusCircle size={20} />
        </span>
      </button>
    </>
  );
}
