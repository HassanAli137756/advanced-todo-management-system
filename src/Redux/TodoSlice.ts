import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export interface TodoStructure
{
    text: string
    isCompleted: boolean
    id: string
    rating: 'Low' | "Medium" | 'High'
    catagory: 'Work-Out' | 'Fun' | 'Study'
    date: string
    isReadOnly: boolean
}

export type catagory = 'Work-Out' | 'Fun' | 'Study'
export type rating = 'Low' | "Medium" | 'High'

const time = new Date()

const rawTodos = localStorage.getItem('todoslist')
let allTodos:TodoStructure[] = []

if(rawTodos && rawTodos.length > 0)
{
    allTodos = JSON.parse(rawTodos)
}

const updateStorage = (data: TodoStructure[]) =>
{
    localStorage.setItem('todoslist', JSON.stringify(data))
}




export const todoSlice = createSlice(
{
    name: 'TodoSlice',
    initialState:
    {
        todos: allTodos as TodoStructure[]
    },
    reducers:
    {
        addTodo: (state, action:PayloadAction<{text: string, catagory: catagory, rating: rating}>) =>
        {
            state.todos.push(
            {
                text: action.payload.text,
                id: nanoid(),
                isCompleted: false,
                catagory: action.payload.catagory,
                rating: action.payload.rating,
                date: time.toLocaleDateString(),
                isReadOnly: true
            })

            updateStorage(state.todos)
        },

        deleteTodo: (state, action:PayloadAction<string>) =>
        {
            state.todos = state.todos.filter(todo => action.payload !== todo.id)

            updateStorage(state.todos)
        },

        toggleComplete: (state, action:PayloadAction<string>) =>
        {
            state.todos = state.todos.map(todo => todo.id == action.payload ? {...todo, isCompleted: !todo.isCompleted, isReadOnly: true} : todo)

            updateStorage(state.todos)
        },

        edit: (state, action:PayloadAction<{id: string, newText?: string}>) =>
        {
            console.log('editRedux', action.payload.newText);
            
            state.todos = state.todos.map(todo => 
            {
                const text = action.payload.newText
                const id = action.payload.id

                if(todo.id === id)
                {
                    if(text && text.length > 0)
                    {
                       return {...todo, text: text, isReadOnly: true}
                    }
                    else
                    {
                        return {...todo, isReadOnly: !todo.isReadOnly}
                    }
                }
                else return todo
            })

            updateStorage(state.todos)
        },

        savingTodos: (state) =>
        {
            state.todos = state.todos.map(todo => ({...todo, isReadOnly: true}))
        }
        
    }
}
)


export const {addTodo, deleteTodo, savingTodos, edit, toggleComplete} = todoSlice.actions
export const todoReducer = todoSlice.reducer


