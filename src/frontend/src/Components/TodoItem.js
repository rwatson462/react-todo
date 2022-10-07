import Checkbox from "./Checkbox"

const TodoItem = ({todo, markTodoComplete, deleteTodo}) => {
    return (
        <li className={`todo-item ${todo.deleted ? 'deleted' : ''} ${todo.complete ? 'complete' : ''}`}>
            <Checkbox checked={todo.complete} onChange={e => markTodoComplete(todo.id)} />
            <span className="todo-name">{todo.name}</span>
            <span className="todo-delete fa fa-times fa-fw" onClick={e => deleteTodo(todo.id)}></span>
        </li>
    )
}

export default TodoItem
