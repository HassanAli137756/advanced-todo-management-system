import { Outlet } from "react-router"
import Header from "./Header"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { savingTodos } from "../Redux/TodoSlice"

function Layout()
{
  const dispatch = useDispatch()
    
  useEffect(() =>
  {
       
    dispatch(savingTodos())
    
  }, [])
  
  return(
    <div>
        <Header />
        <br />
        <div className="ml-3 mr-3">
          <Outlet />
        </div>
    </div>
  )
}

export default Layout