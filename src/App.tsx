import { useSelector } from "react-redux"

function App() 
{
  const data = useSelector((state:any) => state.appointmentReducer)
  console.log(data);
  
  return (
    <div>App</div>

  )
}

export default App