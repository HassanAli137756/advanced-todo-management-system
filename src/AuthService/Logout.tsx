import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { logout } from "../Redux/AuhtSlice"
import Input from "../components/Input"
import { useForm } from "react-hook-form"
import Button from "../components/Button"
import { useNavigate } from "react-router"


function Logout()
{
    const [error, setError] = useState<string>('')
    const [targetedCaptcha, setTargetedCaptcha] = useState<string>('')
    const dispatch = useDispatch()
    const {handleSubmit, register} = useForm()
    const navigate = useNavigate()


    useEffect(() =>
    {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
        let pendingCaptch = ''
        for(let a=1; a<9; a++)
        {
            const randomNumber = Math.floor(Math.random() * letters.length)
            pendingCaptch += letters.charAt(randomNumber)
        }

        setTargetedCaptcha(pendingCaptch)


    }, [])


    const deleteAccout = (data: any) =>
    {
        console.log(data);
        
        if(targetedCaptcha == data.captcha)
        {
            dispatch(logout())
            navigate('/login')
        }
        else
        {
            setError('There is an unknown error please try later')
        }
    }

  return (
    <div>
        <div className="flex justify-center ">
            <div>
                
        <div className="flex justify-center">

            <div className="font-bold text-2xl italic text-cyan-700">Enter Captcha To LogOut</div>

        </div>
        <br /><br />

        <div className="rounded-2xl bg-black/50 p-15 ">
        <div className="font-bold select-none text-2xl bg-white text-black rounded-2xl p-2 ">
            {targetedCaptcha}
        </div>

        <br />

        <form onSubmit={handleSubmit(deleteAccout)}>
            <Input 
            name="captcha"
            register={register}
            placeholder="Type Captcha..."
            label="Captcha"   
            />
            <br />
            {error.length > 0 && <div className="font-semibold text-red-700 text-lg">{error}<br/></div>}
            <div className="flex justify-center">
                <Button name="LOG-OUT" type="submit" />
            </div>
        </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Logout