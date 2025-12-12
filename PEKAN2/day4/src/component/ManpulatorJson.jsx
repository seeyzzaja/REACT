import axios from "axios";
import { useEffect,useState } from "react";

function Manipulation() {
    const [user,setUser] = useState([])
    const [loading,setLoading] =useState (true)
    const [error,setError] = useState(null)

useEffect(()=>{
    const fatchUser = async () =>{
        try {
            const response= await axios.get('https://jsonplaceholder.typicode.com/users')
            const prosesUser = response.data
            .map(user =>({
                id : user.id,
                name:user.name,
                email :user.email,
                city :user.address.city

            }))
            .filter(user => user.city === 'Gwenborough')
            setUser(prosesUser)
        } catch (error) {
           setError(error) 
        }
        finally{
            setLoading(false)
        }
    }
    fatchUser()
},[])
  if (loading) return <p>Memuat daftar pengguna...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;
  if (user.length === 0) return <p>Tidak ada pengguna yang ditemukan di Gwenborough.</p>;
return(
<>
<div>
      <h2>Daftar Pengguna (Manipulasi Data)</h2>
      <ul>
        {user.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email}) - {user.city}
          </li>
        ))}
      </ul>
    </div>
</>
)
}

export default Manipulation