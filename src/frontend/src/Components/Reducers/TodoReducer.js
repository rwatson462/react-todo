import useLocalStorage from "../../Hooks/useLocalStorage"

const CloneTodo = ({name, complete, deleted, id}) => {
    return {
        name,
        complete,
        deleted,
        id
    }
}

const TodoReducer = (todos,command) => {
    // We only need the setter from local storage
    const [,storeTodos] = useLocalStorage('todos')

    switch (command.action) {

        case 'add': {
            /**
             * This function is idempotent by accident as the state update triggered from the
             * return value of this function does not overwrite the global state immediately.
             * Instead that update is queued up so when this function runs twice in StrictMode,
             * only the second execution has the new todo included and stored.
             */
            const newTodos = [...todos, command.payload]
            storeTodos(newTodos)
            return newTodos
        }

        case 'complete': {
            /**
             * In StrictMode, this function is called twice so we need to make sure it is
             * idempotent.  We do this by cloning the todo list and altering the single todo
             * in that new list.  It's a bit awkward because JavaScript doesn't clone objects
             * and arrays easily
             */
            todos = todos.map(todo => {
                // Protect against marking Deleted Todos as Completed
                if (todo.id === command.payload && !todo.deleted) {
                    todo = CloneTodo(todo)
                    todo.complete = !todo.complete
                }
                return todo
            })

            const newTodos = [...todos]
            storeTodos(newTodos)
            return newTodos
        }

        case 'delete': {
            todos = todos.map(todo => {
                if (todo.id === command.payload) {
                    todo = CloneTodo(todo)
                    todo.deleted = !todo.deleted
                }
                return todo
            })
            
            const newTodos = [...todos]
            storeTodos(newTodos)
            return newTodos
        }

        case 'hardDelete':
            todos = todos.filter(todo => todo.id !== command.payload)
            const newTodos = [...todos]
            storeTodos(newTodos)
            return newTodos

        default:
            throw new Error(`Invalid action given to TodoReducer: ${command.action}`)
    }
}

export default TodoReducer
