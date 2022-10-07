import {useReducer, useState} from 'react'
import TodoRepository, { Todo } from './Repository/TodoRepository'
import useRepository from './Repository/useRepository'
import HeaderBar from './Components/HeaderBar'
import TodoList from './Components/TodoList'
import {TodoReducerBuilder} from './Hooks/TodoReducer'
import NewTodoForm from './Components/NewTodoForm'
import NavBar from './Components/NavBar'

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

    return <>
        <HeaderBar />
        <NavBar
            hideComplete={displayOptions.hideComplete}
            toggleHideComplete={() => updateDisplayOptions('hideComplete')}
            hideDeleted={displayOptions.hideDeleted}
            toggleHideDeleted={() => updateDisplayOptions('hideDeleted')}
        />
        <TodoList
            todos={todos}
            markTodoComplete={markTodoComplete}
            deleteTodo={deleteTodo}
            hideComplete={displayOptions.hideComplete}
            hideDeleted={displayOptions.hideDeleted}
        />
        <NewTodoForm
            newTodoTitle={newTodoTitle}
            setNewTodoTitle={setNewTodoTitle}
            createNewTodo={createNewTodo}
        />
    </>
}

export default App
