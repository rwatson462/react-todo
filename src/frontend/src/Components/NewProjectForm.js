import PlusIcon from "./Icons/PlusIcon"

const NewProjectForm = ({newProjectTitle, setNewProjectTitle, createNewProject}) => {
    return (
        <form>
            <input placeholder="Create new Project here..." type="text" value={newProjectTitle} onChange={e => setNewProjectTitle(e.currentTarget.value)} />
            <button type="submit" onClick={createNewProject}><PlusIcon /></button>
        </form>
    )
}

export default NewProjectForm
