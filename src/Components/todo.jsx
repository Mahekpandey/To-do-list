import './CSS/todo.css'


const todo = () => {
  return (
    <div className='todo'>
    <div className="todo-header">To-do List</div>
    <div className="todo-add">
        <input type='text' placeholder='Add your task' className='todo-input'/>
    </div>
    </div>
  )
}

export default todo