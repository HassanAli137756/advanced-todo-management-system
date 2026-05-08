import {  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './Redux/store'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import ProtectedLayout from './Routing/ProtectedLayout'
import TodoList from './components/TodosComponents/TodoList'
import AddTodo from './components/TodosComponents/AddTodo'
import Summery from './components/TodosComponents/Summery'
import { SearchEngine } from './components/TodosComponents/SearchEngine'
import Login from './AuthService/Login'
import Logout from './AuthService/Logout'

const router = createBrowserRouter(
createRoutesFromElements(
<Route path='' element={<ProtectedLayout/>} >
    <Route index path='/' element={<TodoList />} />
    <Route path='/addtodo' element={<AddTodo/>} />
    <Route path='/summery' element={<Summery />} />
    <Route path='/searchengine' element={<SearchEngine />} />
    <Route path='/login' element={<Login />} />
    <Route path='/logout' element={<Logout />} />
</Route>
)
)


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
    <Provider store={store}>

      <RouterProvider router={router} />

    </Provider>
      
      
  </StrictMode>,
)
