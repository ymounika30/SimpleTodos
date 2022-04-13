import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteUser} = props
  const {title, id} = todoDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="app-container">
      <p className="para">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        <p className="delete">Delete</p>
      </button>
    </li>
  )
}

export default TodoItem
