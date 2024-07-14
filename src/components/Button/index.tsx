import styles from './button.module.css';
import { PlusCircle } from 'lucide-react';

type ButtonProps = {
  onCreateTask: () => void;
};

export default function Button({ onCreateTask }: ButtonProps) {
  return (
    <>
      <button className={styles.button} type="submit" onClick={onCreateTask}>
        Criar
        <span>
          <PlusCircle size={20} />
        </span>
      </button>
    </>
  );
}
