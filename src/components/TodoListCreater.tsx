
import {  type TodoStructure } from "../Redux/TodoSlice"
import { TodoCreater } from "./TodoCreater"

interface TodoCreaterProps
{
  todosList: TodoStructure[]
}


function TodoListCreater({todosList}:TodoCreaterProps)
{

  if(todosList.length > 0)
  {
    return(
    <div>
      <TodoCreater todosList={todosList} />
    </div>
    )
  }
  else
  {
    return(
    <div>
      <div className="font-bold text-2xl italic text-red-700- ">There is no task</div>
    </div>
    )
  }
  
}

export default TodoListCreater