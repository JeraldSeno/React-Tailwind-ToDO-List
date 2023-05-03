import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <table className="w-full p-2 border-2">
      <thead>
        <tr>
          <th>Done</th>
          <th>Name</th>
          <th>Due Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr key={todo.id}>
            <TodoItem
              {...todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}