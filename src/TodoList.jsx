import { TodoItem } from './todoItem'  

export function TodoList({ todos, toggleTodo, deleteTodo }) {  
  return (
    <ul className='list'>
      {todos.length === 0 && "No todos"}
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        )
      })}
    </ul>
  )
}