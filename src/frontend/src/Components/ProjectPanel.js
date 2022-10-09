import { useState } from "react"
import NewProjectForm from "./NewProjectForm"
import ProjectList from "./ProjectList"

const ProjectPanel = () => {
    const [newProjectTitle, setNewProjectTitle] = useState('')
    const [projects, setProjects] = useState([])

    const createNewProject = (e) => {
        e.preventDefault()
        console.log('Creating new project named', newProjectTitle)
        setProjects([...projects, newProjectTitle])
    }

    return <>
        <ProjectList projects={projects} />
        <NewProjectForm
            newProjectTitle={newProjectTitle}
            setNewProjectTitle={setNewProjectTitle}
            createNewProject={createNewProject}
        />
    </>
}

export default ProjectPanel
