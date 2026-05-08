import { useSelector } from "react-redux"
import type { catagory, rating, TodoStructure } from "../../Redux/TodoSlice"
import SummeryProvider, { type SummeryStrucutre } from "../SummeryProvider"




function Summery()
{
    const allTodos:TodoStructure[] = useSelector((state: any) => state.todoReducer.todos)

    const catagoryTodosCounter = (catagory:catagory, completed:boolean) =>
    {
        
        const targetedTodos = allTodos.filter(todo =>
        {
            const matchCatagory = todo.catagory == catagory
            const matchStatus = todo.isCompleted == completed

            return matchCatagory && matchStatus
        }
        )

        return targetedTodos.length

    }

    const ratingTodosCoutner = (rating:rating, completed:boolean) =>
    {
        
        const targetedTodos = allTodos.filter(todo =>
        {
            const matchRating = todo.rating == rating
            const matchStatus = todo.isCompleted == completed

            return matchRating && matchStatus
        }
        )

        return targetedTodos.length

    }

    const wholeTodosCounter = (status:boolean) =>
    {
        console.log(status);
        
        const targetedTodos = allTodos.filter(todo =>
        {
            return todo.isCompleted == status

        }
        )

        return targetedTodos.length
    }

    const catagorySummeries = 
    [
        {
            completed: catagoryTodosCounter('Work-Out', true),
            description: 'Work-Out Summery',
            pending: catagoryTodosCounter('Work-Out', false),
            total: catagoryTodosCounter('Work-Out', true) + catagoryTodosCounter('Work-Out', false),
            title: 'Work-Out'
        },
        {
            completed: catagoryTodosCounter('Fun', true),
            description: 'Fun Summery',
            pending: catagoryTodosCounter('Fun', false),
            total: catagoryTodosCounter('Fun', true) + catagoryTodosCounter('Fun', false),
            title: 'Fun'
        },
        {
            completed: catagoryTodosCounter('Study', true),
            description: 'Study Summery',
            pending: catagoryTodosCounter('Study', false),
            total: catagoryTodosCounter('Study', true) + catagoryTodosCounter('Study', false),
            title: 'Study'
        }
    ] as SummeryStrucutre[]

    const ratingSummeries = 
    [
        {
            completed: ratingTodosCoutner('Low', true),
            description: 'Your Low-Rating Tasks Summery',
            pending: ratingTodosCoutner('Low',false),
            total: ratingTodosCoutner('Low', true) + ratingTodosCoutner('Low', false),
            title: 'Low'
        },

        {
            completed: ratingTodosCoutner('Medium', true),
            description: 'Your Medium-Rating Tasks Summery',
            pending: ratingTodosCoutner('Medium', false),
            total: ratingTodosCoutner('Medium', true) + ratingTodosCoutner('Medium', false),
            title: 'Medium'
        },
        {
            completed: ratingTodosCoutner('High', true),
            description: 'Your High-Rating Tasks Summery',
            pending: ratingTodosCoutner('High',false),
            total: ratingTodosCoutner('High', true) + ratingTodosCoutner('High', false),
            title: 'High'
        },
    ] as SummeryStrucutre[]

  return(
    <div>
        <div className="italic font-bold text-cyan-700 underline text-2xl flex justify-center ">
            <div>Your Summery Of All Tasks</div>
        </div>
        <br /><br />

        <div>
        <div className="italic font-bold text-cyan-700 underline text-2xl flex justify-center ">
            <div>BASIC SUMMERY</div>
        </div>
        <br />

        <div className="flex justify-center ">
            <div className="w-full"> 
                <SummeryProvider
                completed={wholeTodosCounter(true)}
                description="Basic Summery of Todos"
                pending={wholeTodosCounter(false)}
                total={allTodos.length}
                />
            </div>
        </div>
        </div>


        <div>
            <div className="italic font-bold text-cyan-700 underline text-2xl flex justify-center ">
            <div>IN-DEPTH SUMMERY</div>
            </div>
            <br /><br />

            <div>
            <div className="italic font-bold text-purple-700 underline text-2xl flex justify-start ">
            <div className="pl-5">1. CATAGORY-BASED-SUMMERY</div>
            </div>
            <br />
            <div className="flex justify-between">
            {
                catagorySummeries.map(catSummery =>
                {
                    return(
                    <div key={catSummery.description}>
                        <SummeryProvider {...catSummery} />
                    </div>
                    )
                }
                )
            }
            </div>
            </div>
            <br /><br />

            <div>
            <div className="italic font-bold text-purple-700 underline text-2xl flex justify-start ">
            <div className="pl-5">1. RATING-BASED-SUMMERY</div>
            </div>
            <br />
            <div className="flex justify-between">
            {
                ratingSummeries.map(ratSummery =>
                {
                    return(
                    <div key={ratSummery.description}>
                        <SummeryProvider {...ratSummery} />
                    </div>
                    )
                }
                )
            }
            </div>
            </div>

        </div>
    </div>
  )
}

export default Summery