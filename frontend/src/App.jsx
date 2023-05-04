import { useEffect, useState } from "react"
import { NewTodoForm } from "./ToDo/NewTodoForm"
import { TodoList } from "./ToDo/TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(newItem, newDue, newTime, newClock) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, date: newDue, time: newTime, clock: newClock, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="max-w-sm mx-auto">
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="m-5 text-center p-2 border-2 rounded">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      <div className="flex justify-center">
      <button className="h-7 mt-6 text-center w-fit" mx-auto>
        <a href="https://github.com/JeraldSeno/React-Tailwind-ToDO-List" target="_blank">
          <img className="h-5 m-auto" src="src/Svg/github.svg" alt="github"/>
        </a>
      </button>
      </div>
    </div>
  )
}