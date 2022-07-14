import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

export function NewTask() {
  return (
    <form className={styles.newTaskForm}>
      <textarea placeholder="Add a new task" />
      <button type="submit">
        <p>Criar</p>
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
