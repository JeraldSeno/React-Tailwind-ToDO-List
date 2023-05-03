export function TodoItem({ completed, id, title, date, time, clock, toggleTodo, deleteTodo, }) {
    return (
      <>
        <td className="text-center">
          <input
              type="checkbox"
              checked={completed}
              onChange={e => toggleTodo(id, e.target.checked)}
              onClick={() => deleteTodo(id)}
          />
        </td>
        <td className="text-center">{title}</td>
        <td className="text-center">{date}</td>
        <td className="text-center">{time} {clock}</td>
      </> 
    )
  }
