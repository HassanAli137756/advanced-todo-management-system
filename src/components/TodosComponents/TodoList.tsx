import { useState } from "react"
import type { catagory, TodoStructure } from "../../Redux/TodoSlice"
import { useSelector } from "react-redux"
import RadioInput from "../RadioInput"
import TodoListCreater from "../TodoListCreater"
import Button from "../Button"
import { useNavigate } from "react-router"
import type { availableCatagories } from "../TodosComponents/SearchEngine"

type possibleCatagories = catagory | 'All-Catagories'


function TodoList()
{
    const [catagory, setCatagory] = useState<possibleCatagories>('All-Catagories')    
    const catagories = ['Fun', 'Work-Out', 'Study', 'All-Catagories']
    const allTodos:TodoStructure[] = useSelector((state: any) => state.todoReducer.todos)
    
    const targetedTodos = allTodos.length > 0 ?
    allTodos.filter(todo => catagory == 'All-Catagories' || todo.catagory == catagory
    )
    :
    null


    const navigate = useNavigate()
    
    const handleChange = (value: string) =>
    {
        
        setCatagory(value as availableCatagories)
        
    }

    

  return (
    <div>
        <div
        className="font-bold text-3xl flex justify-center italic text-teal-400"
        >
            <div>
                Your All Todos Are Here
            </div>
        </div>
        <br /><br />

        <div className="flex justify-start">
            <div>
            <div className="font-bold text-2xl italic ">
                Select-Catagory
            </div>
            <br />
            <div className="flex justify-evenly gap-5">
            {
                catagories.map(cat =>
                {
                    return(
                    <div key={cat} >
                        <RadioInput onChange={handleChange} value={catagory} label={cat} name="catagory" />
                    </div>
                    )
                }
            )
        }
            
            </div>
            </div>
        </div>

        <div className="flex justify-end">
                <Button onClick={() => navigate('/searchengine')} name="Click to deep Search"   />
        </div>

        <br /><br /><br />
        {targetedTodos && targetedTodos.length > 0 ? 
        
        <div><TodoListCreater todosList={targetedTodos} /></div> : 
        
        <div className="flex justify-center">
            <div className="font-bold text-red-700 text-3xl italic">There is no todo
            </div>
        </div>}
    </div>
  )
}

export default TodoList