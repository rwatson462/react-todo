
const NewTodoForm = ({newTodoTitle, setNewTodoTitle, createNewTodo}) => {
    return (
        <form>
            <input placeholder="Add your todo here..." type="text" value={newTodoTitle} onChange={e => setNewTodoTitle(e.currentTarget.value)} />
            <button type="submit" onClick={createNewTodo}>Create</button>
        </form>
    )
}

export default NewTodoForm
