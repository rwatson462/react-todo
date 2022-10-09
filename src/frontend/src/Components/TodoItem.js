import Checkbox from "./Checkbox"
import DeleteIcon from "./Icons/DeleteIcon"

const TodoItem = ({todo, markTodoComplete, deleteTodo}) => {
    return (
        <li className={`todo-item ${todo.deleted ? 'deleted' : ''} ${todo.complete ? 'complete' : ''}`}>
            <Checkbox checked={todo.complete} onChange={e => markTodoComplete(todo.id)} />
            <span className="todo-name">{todo.name}</span>
            <DeleteIcon className="todo-delete" onClick={e => deleteTodo(todo.id)}></DeleteIcon>
        </li>
    )
}

export default TodoItem
