import Checkbox from "./Checkbox"
import DeleteIcon from "./Icons/DeleteIcon"
import DeleteHardIcon from "./Icons/DeleteHardIcon"

const TodoItem = ({todo, markTodoComplete, deleteTodo, hardDeleteTodo}) => (
    <li className={`todo-item ${todo.deleted ? 'deleted' : ''} ${todo.complete ? 'complete' : ''}`}>
        <Checkbox checked={todo.complete} onChange={e => markTodoComplete(todo.id)} />
        <span className="todo-name">{todo.name}</span>
        { todo.deleted && <DeleteHardIcon className="todo-delete-hard" title="Permanently delete" onClick={(e => hardDeleteTodo(todo.id))} /> }
        <DeleteIcon className="todo-delete" onClick={e => deleteTodo(todo.id)} />
    </li>
)

export default TodoItem
