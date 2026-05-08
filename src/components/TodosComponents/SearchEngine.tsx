
import { useState } from "react"
import { useSelector } from "react-redux"
import RadioInput from "../RadioInput"
import TodoListCreater from "../TodoListCreater"
import {type TodoStructure, type catagory, type rating} from '../../Redux/TodoSlice'

export type availableCatagories = catagory | 'All-Catagories' 
export type availableRatings = rating | 'All-Rates'




export function SearchEngine()
{
    const [catagory, setCatagory] = useState<availableCatagories>('All-Catagories')    
    const [todoName, setTodoName] = useState<string>('')
    const catagories = ['Fun', 'Work-Out', 'Study', 'All-Catagories']
    const ratings = ['Low', 'Medium', 'High', 'All-Rates']
    const [rating, setRating] = useState<availableRatings>('All-Rates')
    const allTodos:TodoStructure[] = useSelector((state: any) => state.todoReducer.todos)
     
    const targetedTodos:TodoStructure[] = allTodos.filter(todo =>
    {
        const matcheCatagory = catagory == 'All-Catagories' || todo.catagory == catagory

        const matcheSearch = todoName.trim().length > 0 ?  todo.text.toLocaleLowerCase().includes(todoName.toLocaleLowerCase()) : true

        const matchrating = rating == 'All-Rates' || todo.rating == rating

        return matcheCatagory && matcheSearch && matchrating
    }
    )
    

    const catagorySetter = (cat: string) =>
    {
        setCatagory(cat as catagory)
    }

    const ratingSetter = (rate: string) =>
    {
        setRating(rate as rating)
    }

    
    console.log(rating, catagory);
    

    

  return (
    <div>
        <div className="flex justify-center"> 
        <div
        className="font-bold text-3xl underline italic text-teal-400"
        >Your All Todos Are Here</div>
        </div>
        <br /><br />


        <div className="flex text-blue-500 justify-between">
        <div className="flex justify-start">
        <div>
            <div className="font-bold text-2xl italic ">
                Select-Catagory
            </div>
            <br />
            <div className=" grid grid-cols-2 ">
            {
                catagories.map(cat =>
                {
                    return(
                    <div key={cat} onClick={() => catagorySetter(cat as catagory)}>
                        <RadioInput onChange={catagorySetter} value={catagory} label={cat} name="catagory" />
                    </div>
                    )
                }
                )
            }
            </div>
        </div>
        </div>

        <div className="flex text-cyan-700 justify-end">
            <div>
            <div className="font-bold text-2xl italic ">
                Select-Rating
            </div>
            <br />
            <div className=" grid grid-cols-2 ">
            {
                ratings.map(rate =>
                {
                    return(
                    <div key={rate} onClick={() => ratingSetter(rate as rating)}>
                        <RadioInput onChange={ratingSetter} value={rating} label={rate} name="ratings" />
                    </div>
                    )
                }
                )
            }
            </div>
            </div>
        </div>
        </div>
        <br />
        <br />
        <div className="flex justify-center">
            <input 
            type="text"
            placeholder="Search Todo..."
            className="font-bold text-2xl rounded-2xl bg-black text-green-600 p-2"
            onChange={(e) => setTodoName(e.target.value)}
            />
        </div>
        <br /><br /><br />
        {targetedTodos.length > 0 ? 
        
        <div>
            <TodoListCreater todosList={targetedTodos} />
        </div> : 
        <div className="font-bold flex justify-center text-red-700 text-3xl italic">
            <div>
                There is no todo
            </div>
        </div>}
    </div>
  )
}

