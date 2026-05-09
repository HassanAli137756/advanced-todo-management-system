import { useDispatch } from "react-redux"
import { deleteTodo, edit, toggleComplete, type TodoStructure } from "../Redux/TodoSlice"
import { useState} from "react"
import Button from "./Button"

interface TodoProps
{
  todosList: TodoStructure[]
}
interface PendingTodos
{
  id: string
  completedStatus: boolean
  newText: string
}



export function TodoCreater({todosList}:TodoProps)
{
  
    const dispatch = useDispatch()
    const [pendingTodos, setPendingTodos] = useState<PendingTodos[]>([])
    

    const deleteTask = (id:string) =>
    {
        dispatch(deleteTodo(id))
    }

    const toggleCheck = (id: string) =>
    {
      dispatch(toggleComplete(id))
    }

    const updateTodo = ({id, newText, completedStatus}:PendingTodos) =>
    {
      const targetedTodo = pendingTodos.filter(todo =>
      {
        
        const matchID = todo.id == id
       
        return matchID 
      }
      )
      
      
        
      if(targetedTodo.length > 0)
      {
        
        
        
        dispatch(edit({id: id, newText: targetedTodo[0].newText}))
        setPendingTodos(prev => prev.filter(todo => todo.id !== id))
      }
      else if(targetedTodo.length == 0)
      {
        
        setPendingTodos(prev => ([...prev, {id: id, newText: newText, completedStatus: completedStatus}]))
        dispatch(edit({id: id}))
      }
      else
      {
        console.log('nothing condition met');
        
      }

    }

    
    const valueSetter = (id: string, todoText: string) =>  // correct working
    {
      
      
        if(pendingTodos.length > 0)
        {
          const targetTodos = pendingTodos.filter(todo =>
          {
            const matchId = todo.id == id

            return matchId
          }
          )

          if(targetTodos.length > 0)
          {
            return targetTodos[0].newText
          }
          else
          {
            return todoText
          }
        }
        else
        {
          return todoText
        }
    }

    const valueUpdater = (id:string, e:any) => // Correctly Woring
    {
      
      
      setPendingTodos(prev => prev.map(todo => todo.id === id ? ({...todo, newText: e.target.value, }) : todo))
      
    }

    
    

  return(
    <div>
        {
          todosList.map(todo =>
          {
            return(
            <div key={todo.id}>
              <div className="flex justify-center">
                <div className="">

              <div className={`rounded-2xl  transition-all duration-500 p-2 ${todo.isCompleted ? 'bg-gray-500 text-black/50 ' : 'bg-white/70'} `}>
                <div className='flex justify-evenly'>
                  <div className="flex justify-between w-2/3">
                  <input type="checkbox"
                  checked = {todo.isCompleted}
                  onChange={() => toggleCheck(todo.id)}
                  /> &nbsp;
                  <input 
                  type="text"
                  className={`font-bold text-[0.6cm] overflow-hidden border-none outline-none ${todo.isCompleted ? 'line-through' : ''}`}
                  onChange={(e) => valueUpdater(todo.id, e)}
                  value={valueSetter(todo.id, todo.text)}
                  readOnly = {todo.isReadOnly}
                  />
                  </div>
                  <div>
                    <div className="flex justify-evenly w-1/3">
                        <div >
                          < Button 
                          
                          onClick={() => !todo.isCompleted ? updateTodo({completedStatus: todo.isCompleted, id: todo.id , newText: todo.text}) : null} 
                          
                          name={todo.isReadOnly ? 'Edit' : 'Save'} 
                          
                          classes="bg-green-700 w-[3cm] " />
                        </div>
                          &nbsp;
                        <div >
                          < Button onClick={() => 
                            
                          deleteTask(todo.id)} 
                          
                          name="Delete" 
                          
                          classes="bg-red-700 w-[3cm] " />
                        </div>
                    </div>
                  </div>
                </div>
                <div className="text-yellow-500">
                  <div className="flex justify-between">
                    <div className="font-bold  ">
                      Category: {todo.catagory}
                    </div>


                    <div className="font-bold">
                      Date: {todo.date}
                    </div>


                    <div className="font-bold">
                      Rating: {todo.rating}
                    </div>
                    
                  </div>
                </div>
              </div>
              </div>
              </div>
              <br />
            </div>
            )
          }
          )
        }
    </div>
    
  )
}
