export function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
          className="todo-checkbox"
        />
        
      </label>
      <button
        onClick={() => deleteTodo(id)}
        className="btn btn-danger"
        aria-label={`Delete todo: ${title}`}
      >
        Delete
      </button>
    </li>
  )
}