
const ProjectList = ({projects}) => (
    <ul>
        {projects.map((project, key) => <li key={key}>{project}</li>)}
    </ul>
)

export default ProjectList
