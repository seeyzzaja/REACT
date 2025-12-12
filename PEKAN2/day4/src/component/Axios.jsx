import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

function AxiosDataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    const fatchData = async ()=>{
        try{
            const respon= await axios.get('https://jsonplaceholder.typicode.com/users/3')
            setData(respon.data)
        }
        catch (err){
            setError(err)
        }
        finally{
            setLoading(false)
        }
    }
    fatchData()
    
  },[])

  if (loading) return <p>memuat data...</p>
  if (error) return <p>terjadi kesalahan: {error.message}</p>

  return(
<>
<h2>hasil fatcing dengan axios</h2>
<p>nama : {data.name}</p>
<p>email: {data.email}</p>
<p>website : {data.website}</p>
<p>no hp: {data.phone}</p>
</>

  )
}

export default AxiosDataComponent;