import TodoItem from "./TodoItem"

const TodoList = ({todos, markTodoComplete, deleteTodo}) => {
    return (
        <section>
            <ul>
                {todos.map((todo,key) => (
                    <TodoItem todo={todo} key={key} markTodoComplete={markTodoComplete} deleteTodo={deleteTodo} />
                ))}
            </ul>
        </section>
    )
}

export default TodoList
