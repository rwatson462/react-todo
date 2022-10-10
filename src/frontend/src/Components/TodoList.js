import TodoItem from "./TodoItem"

const TodoList = ({todos, markTodoComplete, deleteTodo, hardDeleteTodo}) => (
    <section>
        <ul>
            {todos.map((todo,key) => (
                <TodoItem
                    key={key}
                    todo={todo}
                    markTodoComplete={markTodoComplete}
                    deleteTodo={deleteTodo}
                    hardDeleteTodo={hardDeleteTodo}
                />
            ))}
        </ul>
    </section>
)

export default TodoList
