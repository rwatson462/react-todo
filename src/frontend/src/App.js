import {useReducer, useState} from 'react'
import TodoRepository, { Todo } from './Repository/TodoRepository'
import useRepository from './Repository/useRepository'
import HeaderBar from './Components/HeaderBar'
import TodoList from './Components/TodoList'
import {TodoReducerBuilder} from './Hooks/TodoReducer'
import NewTodoForm from './Components/NewTodoForm'
import NavBar from './Components/NavBar'
import ProgressBar from './Components/ProgressBar'

const App = () => {
    const [displayOptions, setDisplayOptions] = useState({
        hideComplete: false,
        hideDeleted: false
    })

    const todoRepository = useRepository(TodoRepository)

    const [todos, todoDispatcher] = useReducer(TodoReducerBuilder(todoRepository), [], todoRepository.getAll)

    const [newTodoTitle, setNewTodoTitle] = useState('')

    const updateDisplayOptions = (option) => {
        setDisplayOptions({
            ...displayOptions,
            [option]: !displayOptions[option]
        })
    }

    const createNewTodo = (e) => {
        // this is triggered from a form submit, so we want to stop the actual form submission
        e.preventDefault()
        todoDispatcher({
            action:'add',
            payload: Todo(newTodoTitle)
        })
        setNewTodoTitle('')
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
        />
        <NewTodoForm
            newTodoTitle={newTodoTitle}
            setNewTodoTitle={setNewTodoTitle}
            createNewTodo={createNewTodo}
        />
    </>
}

export default App
