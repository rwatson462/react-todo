import {v4 as uuid4} from 'uuid'

const getTodosFromStorage = () => JSON.parse(localStorage.todos ?? '[]')
const storeTodosInStorage = (todos) => localStorage.todos = JSON.stringify(todos)

export const Todo = (name, complete = false, deleted = false) => {
    return {
        name,
        complete,
        deleted,
        id: uuid4()
    }
}

export const CloneTodo = ({name, complete, deleted, id}) => {
    return {
        name,
        complete,
        deleted,
        id
    }
}

const upgrade = () => {
    const todos = getTodosFromStorage().map(todo => {
        // give all existing todos a UUID4 id
        // todo.id = uuid4()

        // standardise complete flag on todos
        // const isComplete = todo.complete || todo.completed
        // todo.complete = isComplete
        // delete todo.completed

        return todo
    })

    storeTodosInStorage(todos)
}

const TodoRepository = () => {
    const getAll = () => {
        upgrade()
        return getTodosFromStorage()
    }

    const getById = (id) => {
        return getTodosFromStorage().find(todo => todo.id === id)
    }

    const store = (todos) => {
        storeTodosInStorage(todos)
    }

    return {
        getAll,
        getById,
        store,
    }
}

export default TodoRepository
