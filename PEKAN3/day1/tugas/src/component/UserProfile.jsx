import { useContext } from "react";
import UserContext from "../context/UserContext";
function UserProfile() {
    const {user,login,logout,updateLogin} = useContext(UserContext)

    return(

        <>
        <h2>user login</h2>

        {user.isLogin ?(
            <>
            <p>Nama : {user.nama}</p>
            <p>Email: {user.email}</p>
            <p>status : login</p>
            <button  onClick={() => updateLogin("Budi", "budi@gmail.com")}>update profile</button>
            <button onClick={logout}>logout</button>
            </>

        ): (
            <> 
            <p>status : belum login</p>
            <button onClick={() => login("Andi", "andi@gmail.com")}>login</button>
            </>
        )}
        </>
    )
}
export default UserProfile