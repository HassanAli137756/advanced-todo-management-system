import { useSelector } from "react-redux"
import type { loginStructure } from "../Redux/AuhtSlice"
import Layout from "./Layout"
import Login from "../AuthService/Login"


function ProtectedLayout()
{
    const userData:loginStructure = useSelector((state: any) => state.authReducer.loginData)


    if(userData.email.length > 0 && userData.name.length > 0 && userData.password.length > 0)
    {
        return(
        <div>
            <Layout />
        </div>
        )
    }
    return(
    <div>
        <br /><br /><br />
        <div className="font-bold text-2xl italic flex justify-center text-red-600">
            <div>
                Please login to use service
            </div>
        </div>
        <br /><br />
        <Login />
    </div>
    )
}

export default ProtectedLayout