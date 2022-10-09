import { v4 as uuid4 } from 'uuid'

const Todo = (name, complete = false, deleted = false) => {
    return {
        name,
        complete,
        deleted,
        id: uuid4()
    }
}

export default Todo
