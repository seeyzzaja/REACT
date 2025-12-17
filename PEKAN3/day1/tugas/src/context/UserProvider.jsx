import { useState } from "react";
import UserContext from "./UserContext";

function UserProvider({children}) {
    const [user,setUser] = useState({nama:" ",email :" ",isLogin:false})

    const login = (nama,email) =>{
        setUser({
            nama: nama,
            email:email,
            isLogin:true
        })
    }
const logout = ()=>{
    setUser({
        nama:'',
        email:'',
        isLogin:false

    })
}
const updateLogin =(nama,email)=>{
    setUser(prev=>({
        ...prev,
        nama:nama,
        email:email
    }))
}

const data ={user,login,logout,updateLogin}
return(

    <UserContext value={data}>
        {children}
    </UserContext>
)
}

export default UserProvider