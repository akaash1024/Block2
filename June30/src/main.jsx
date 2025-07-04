import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoList from '../Q11/TodoList.jsx'
import TaskManager from '../Q12/TaskManager.jsx'
import CounterApp from '../Q13/CounterApp.jsx'
import BasicTodoList from '../Q14/BasicTodoList.jsx'
import AttendanceManager from '../Q15/AttendanceManager.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <TodoList />
    <TaskManager />
    <CounterApp />
    <BasicTodoList />
    <AttendanceManager />
  </StrictMode>,
)
