import Checkbox from "./Checkbox"

const NavBar = ({hideComplete, toggleHideComplete, hideDeleted, toggleHideDeleted}) => {
    return (
        <nav>
            <ul>
                <li><Checkbox checked={hideComplete} onChange={() => toggleHideComplete()} label="Hide completed Todos" /></li>
                <li><Checkbox checked={hideDeleted} onChange={() => toggleHideDeleted()} label="Hide deleted Todos" /></li>
            </ul>
        </nav>
    )
}

export default NavBar
