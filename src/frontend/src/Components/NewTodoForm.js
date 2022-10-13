import { useRef } from "react"
import PlusIcon from "./Icons/PlusIcon"

const NewTodoForm = ({createNewTodo}) => {
    const newTodoTitle = useRef()

    const onSubmit = (e) => {
        e.preventDefault()

        const title = newTodoTitle.current.value
        if (title.trim().length === 0) {
            return
        }

        newTodoTitle.current.value = ''
        createNewTodo(title)
    }

    return (
        <form onSubmit={onSubmit}>
            <input placeholder="Add your todo here..." type="text" ref={newTodoTitle} />
            <button type="submit"><PlusIcon /></button>
        </form>
    )
}

export default NewTodoForm
