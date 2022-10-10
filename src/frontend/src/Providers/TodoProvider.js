import { createContext, useReducer, useState } from 'react'
import useLocalStorage from '../Hooks/useLocalStorage'
import Todo from '../Models/Todo'
import TodoReducer from '../Reducers/TodoReducer'

export const TodoContext = createContext({
    displayOptions: {},
    setDisplayOptions: () => {}
})

const TodoProvider = ({children, ...props}) => {
    const [displayOptions, setDisplayOptions] = useState({
        hideComplete: false,
        hideDeleted: false
    })

    const updateDisplayOptions = (option) => {
        setDisplayOptions({
            ...displayOptions,
            [option]: !displayOptions[option]
        })
    }

    // We only need the getter here to pipe into our Reducer
    const [getStoredTodos,] = useLocalStorage('todos', [])

    const [todos, todoDispatcher] = useReducer(TodoReducer, [], getStoredTodos)

    const createNewTodo = (todoTitle) => {
        todoDispatcher({
            action: 'add',
            payload: Todo(todoTitle)
        })
    }

    const markTodoComplete = (todoId) => {
        todoDispatcher({
            action: 'complete',
            payload: todoId
        })
    }

    const deleteTodo = (todoId) => {
        todoDispatcher({
            action: 'delete',
            payload: todoId
        })
    }

    const hardDeleteTodo = (todoId) => {
        todoDispatcher({
            action: 'hardDelete',
            payload: todoId
        })
    }

    const context = {
        displayOptions,
        updateDisplayOptions,
        todos,
        createNewTodo,
        markTodoComplete,
        deleteTodo,
        hardDeleteTodo,
    }

    return (
        <TodoContext.Provider value={context}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider
