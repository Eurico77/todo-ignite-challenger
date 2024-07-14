import styles from './input.module.css';

type InputProps = {
  value: string;
  onSetValue: (value: string) => void;
};

export default function Input({ value, onSetValue }: InputProps) {
  return (
    <>
      <input
        className={styles.input}
        type="text"
        name="task"
        value={value}
        placeholder="Adicione uma nova tarefa"
        onChange={(e) => onSetValue(e.target.value)}
      />
    </>
  );
}
