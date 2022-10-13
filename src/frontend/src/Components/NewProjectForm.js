import { useRef } from "react"
import PlusIcon from "./Icons/PlusIcon"

const NewProjectForm = ({createNewProject}) => {
    const newProjectTitle = useRef()

    const onSubmit = (e) => {
        e.preventDefault()

        const title = newProjectTitle.current.value
        if (title.trim.length() === 0) {
            return
        }

        newProjectTitle.current.value = ''
        createNewProject(title)
    }

    return (
        <form onSubmit={onSubmit}>
            <input placeholder="Create new Project here..." type="text" ref={newProjectTitle} />
            <button type="submit"><PlusIcon /></button>
        </form>
    )
}

export default NewProjectForm
