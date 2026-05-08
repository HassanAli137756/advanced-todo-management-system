import { useState } from "react"
import { useNavigate } from "react-router"
import { login } from "../Redux/AuhtSlice"
import { useDispatch } from "react-redux"
import Input from "../components/Input"
import {useForm} from 'react-hook-form'
import Button from "../components/Button"

function Login()
{

  const [error, setError] = useState<string>('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register, handleSubmit} = useForm()

  const createAccount = (data: any) =>
  {
    if(data.email.length > 0 && data.name.length > 0 && data.password.length > 0)
    {
        dispatch(login(data))
        navigate('/')
    }
    else
    {
      setError('There is an unknown error please try later')
    }
  }

  return(
    <div className="flex justify-center ">
      <div>

        <form className="bg-black/50 p-15 rounded-2xl" onSubmit={handleSubmit(createAccount)}>
            <Input
            label="Name"
            name="name"
            register={register}
            placeholder="Enter Name..."
            
            />
            <br />

            <Input
            label="Password"
            name="email"
            type="email"
            register={register}
            placeholder="Enter Password..."
            />
            <br />

            <Input
            label="Password"
            name="password"
            type="password"
            register={register}
            placeholder="Enter Password..."
            />
             <br /><br />

            {error.length > 0 && <div>{error}</div>}

             <div className="flex justify-center">

              <div>
                  <Button  name="LOGIN" type="submit" />
              </div>

             </div>
        </form>
    </div>
    </div>
  )
}

export default Login