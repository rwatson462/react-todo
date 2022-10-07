import TodoItem from "./TodoItem"

const TodoList = ({todos, markTodoComplete, deleteTodo, hideComplete, hideDeleted}) => {
    return (
        <section>
            <ul>
                {todos.filter(todo => {
                    if (hideDeleted && todo.deleted) return false;
                    if (hideComplete && todo.complete) return false;
                    return true;
                }).map((todo,key) => (
                    <TodoItem todo={todo} key={key} markTodoComplete={markTodoComplete} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </section>
    )
}

export default TodoList
