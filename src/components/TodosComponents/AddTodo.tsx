import { useState } from "react"
import { useDispatch } from "react-redux" 
import { addTodo, type catagory, type rating } from "../../Redux/TodoSlice"
import RadioInput from "../RadioInput"
import Button from "../Button"

interface TodoStructure
{
    text: string
    rating: 'Low' | 'Medium' | 'High'
    catagory: 'Work-Out' | 'Fun' | 'Study'
}


function AddTodo()
{
    const [todo, setTodo] = useState<TodoStructure>(
    {
        text: '',
        catagory: 'Fun',
        rating: 'Medium'
    }
    )

    const [placeHolder, setPlaceHolder] = useState<string>('Type Todo...')
    const dispatch = useDispatch()
    const catagories = ['Work-Out', 'Fun', 'Study']
    const ratings = ['Low', 'Medium', 'High']
    const [successMsg, setSuccessMsg] = useState<string>('')

    const addTask = () =>
    {
        if(todo.text.trim().length > 0)
        {
            dispatch(addTodo(todo))
            setSuccessMsg('Successfully Added Todo')
            setTodo({catagory: 'Fun', rating: 'Medium', text: ''})
            setTimeout(() =>
            {
                setSuccessMsg('')
            }, 2500);
            
        }
        else
        {
            setPlaceHolder('Please type at least one letter')
        }
    }

    const handleCatagoryChange = ( value: string) =>
    {
        setTodo(prev => ({...prev, catagory: value as catagory}))
    }
    
    const handleRatingChange = ( value: string) =>
    {
        setTodo(prev => ({...prev, rating: value as rating}))
    }
    
    console.log(todo);
    


  return(
    <div>
        <div className="flex justify-center">
            <div className=" font-bold text-3xl text-teal-300 italic ">
                Add Todo With Some Specifications
            </div>
        </div>
        <br />
        <br />

        <form onSubmit={(e) => (e.preventDefault(), addTask()) }>
            
            <div className="w-full flex justify-center">
            <input 
            type="text"
            value={todo.text}
            className="font-bold text-2xl w-1/2 rounded-2xl p-2.5 pl-2.5 bg-black text-white "
            placeholder={placeHolder}
            onChange={(e) => setTodo(prev => ({...prev, text: e.target.value}))}
            />
            {successMsg.length > 0 && <div className="font-bold text-xl italic text-green-700 "><br/>{successMsg}</div>}
            
            </div>
            <br /><br />

            <div className="rounded-2xl  p- flex justify-center bg-blue-300 border-black " >
                <div className="w-1/2">
                <div className="font-bold text-2xl text-sky-500 flex justify-start">
                    <div>
                        Select-Catagory
                    </div>
                </div>

                <div>
                <div className="flex justify-between text-sky-500">
                {
                    catagories.map(cat =>
                    {
                        return(
                            <div key={cat}>
                            <RadioInput label={cat} name="catagory" value={todo.catagory} onChange={handleCatagoryChange} />
                            </div>
                        )
                    }
                    )
                }
                </div>
                <br /><br />
            </div>

            <div className="text-purple-600">
                <div className="font-bold text-2xl flex justify-start">
                    <div>
                        Select-Rating
                    </div>
                </div>


                <div className="flex  justify-between">
                {
                    ratings.map(rate =>
                    {
                        return(
                            <div key={rate}>
                            <RadioInput label={rate} name="rating" value={todo.rating} onChange={handleRatingChange} />
                            </div>
                        )
                    }
                    )
                }
                </div>
            </div>
            <br /><br /><br />
            <div className="flex justify-center">
                <Button type="submit" name="Add" classes={todo.text.trim().length > 0 ? 'w-[5cm]' : 'bg-gray-400 w-[5cm] text-black/50 line-through'} />
            </div>
            <br />
            </div>
            </div>
        </form>
    </div>
  )
}

export default AddTodo