import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface loginStructure
{
    name: string
    email: string
    password: string
}

let rawData = localStorage.getItem('userLoginInfor')
let userData:loginStructure = {name: '', email: '', password: ''} 

if(rawData && rawData.length > 0)
{
    userData = JSON.parse(rawData) as loginStructure
}

console.log(localStorage.getItem('userLoginInfor'));


export const authSlice = createSlice(
{
    name: 'authSlice',
    initialState:
    {
        loginData: userData
    },
    reducers:
    {
        login: (state, action:PayloadAction<loginStructure>) =>
        {
            state.loginData = action.payload
            localStorage.setItem('userLoginInfor', JSON.stringify(action.payload ))
        },

        logout: (state) =>
        {
            state.loginData = {email: '', name: '', password: ''}
            localStorage.setItem('userLoginInfor', '')

        }
    }
}
)




export const {login, logout}  = authSlice.actions
export const authReducer = authSlice.reducer