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
        <td className="text-center">{time}{clock}</td>
        {/* <button onClick={() => deleteTodo(id)} className="bg-[#6D5D6E] pl-2 pr-2 rounded hover:bg-[#6D5D7E]">
          Delete
        </button> */}
      </>
    )
  }
