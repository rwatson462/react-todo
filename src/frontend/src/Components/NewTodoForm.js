import { useState } from "react"
import PlusIcon from "./Icons/PlusIcon"

const NewTodoForm = ({createNewTodo}) => {

    const [newTodoTitle, setNewTodoTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        createNewTodo(newTodoTitle)
        setNewTodoTitle('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input placeholder="Add your todo here..." type="text" value={newTodoTitle} onChange={e => setNewTodoTitle(e.currentTarget.value)} />
            <button type="submit"><PlusIcon /></button>
        </form>
    )
}

export default NewTodoForm
