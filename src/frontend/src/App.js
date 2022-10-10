import {useReducer, useState} from 'react'
import Todo from './Models/Todo'
import HeaderBar from './Components/HeaderBar'
import TodoList from './Components/TodoList'
import NewTodoForm from './Components/NewTodoForm'
import NavBar from './Components/NavBar'
import ProgressBar from './Components/ProgressBar'
import TodoReducer from './Reducers/TodoReducer'
import useLocalStorage from './Hooks/useLocalStorage'

const App = () => {
    const [displayOptions, setDisplayOptions] = useState({
        hideComplete: false,
        hideDeleted: false
    })

    // We only need the getting here to pipe into our Reducer
    const [getStoredTodos,] = useLocalStorage('todos', [])

    const [todos, todoDispatcher] = useReducer(TodoReducer, [], getStoredTodos)

    const updateDisplayOptions = (option) => {
        setDisplayOptions({
            ...displayOptions,
            [option]: !displayOptions[option]
        })
    }

    const createNewTodo = (todoTitle) => {
        const newTodos = todoDispatcher({
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

    // maximum value of the progres bar is the total number of non-deleted Todos
    const progressBarMax = todos.reduce((count, todo) => count + (!todo.deleted ? 1 : 0), 0)

    // current value of the progress bar based on completed and not deleted Todos
    const progressBarValue = todos.reduce((count, todo) => count + (todo.complete && !todo.deleted ? 1 : 0), 0)

    // Filter the list of Todos here before passing down to components to reduce complexity
    const todosForDisplay = todos.filter(todo => {
        if (displayOptions.hideComplete && todo.complete) return false
        if (displayOptions.hideDeleted && todo.deleted) return false
        return true
    })

    return <>
        <HeaderBar />
        <NavBar
            hideComplete={displayOptions.hideComplete}
            toggleHideComplete={() => updateDisplayOptions('hideComplete')}
            hideDeleted={displayOptions.hideDeleted}
            toggleHideDeleted={() => updateDisplayOptions('hideDeleted')}
        />
        <ProgressBar
            max={progressBarMax}
            progress={progressBarValue}
        />
        <TodoList
            todos={todosForDisplay}
            markTodoComplete={markTodoComplete}
            deleteTodo={deleteTodo}
            hardDeleteTodo={hardDeleteTodo}
        />
        <NewTodoForm
            createNewTodo={createNewTodo}
        />
    </>
}

export default App
