import styles from './NoTasks.module.css'
import Clipboard from '../assets/Clipboard.svg'

export function NoTasks() {
  return (
    <div className={styles.NoTasks}>
      <header className={styles.Header}>
        <div>
          <p className={styles.CreatedTask}>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div>
          <p className={styles.ConcludedTask}>Concluídas</p>
          <span>0</span>
        </div>
      </header>
      <main className={styles.Main}>
        <img src={Clipboard} alt="imagem de uma prancheta" />
        <div>
          <h4>Você ainda não tem tarefas cadastradas</h4>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </main>
    </div>
  )
}
