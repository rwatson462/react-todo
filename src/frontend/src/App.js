import {useContext} from 'react'
import HeaderBar from './Components/HeaderBar'
import NavBar from './Components/NavBar'
import NewTodoForm from './Components/NewTodoForm'
import ProgressBar from './Components/ProgressBar'
import {TodoContext} from './Providers/TodoProvider'
import TodoList from './Components/TodoList'

const App = () => {
    const {
        displayOptions, updateDisplayOptions,
        todos,
        createNewTodo,
        markTodoComplete,
        deleteTodo,
        hardDeleteTodo,
    } = useContext(TodoContext)

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
