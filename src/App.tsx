import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { NoTasks } from './components/NoTasks'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <NewTask />
      <NoTasks />
    </div>
  )
}
