import { useEffect, useState } from "react"
import styles from './styles/styles.module.css'

const myTasks = [
  {id: '1', task: 'Lavar a louça'},
  {id: '2', task: 'Fazer almoço'},
  {id: '3', task: 'Estudar ReactJs'},
  {id: '4', task: 'Limpar a casa'}
]

export function App() {

  const [ tasks, setTasks ] = useState([]) 

  useEffect(()=> {

    async function fetchData() {
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      const finalResult = await result.json()
      return finalResult
    }

    fetchData().then(res => setTasks(res))
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Buscando dados</h1>
      <ol className={styles.listStyle}>
        {tasks.map((tasks)=> {
          return(
            <li key={tasks.id} className={styles.rowListStyle}>
              {tasks.title}
              {tasks.completed ? ' - Tarefa Concluída' : null}
            </li>
          )
        })}
      </ol>
    </div>
  )
}