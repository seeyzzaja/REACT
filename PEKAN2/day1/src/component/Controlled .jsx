import { useState } from "react";
function Controlled() {
    const [name ,setName] = useState ('')

    const handelSubmit = (e) =>{
        e.preventDefault()
        alert('nama yang di submit '+ name)
        setName('')
    }
    const handelChange =(e) =>{
        setName(e.target.value)
        
    }
    return(
        
        <div>
            <form onSubmit={handelSubmit}>
            <h2>Controlled</h2>
            <label>
                nama:
                <input type="text" value={name} onChange={handelChange} />
            </label>
            <p>anda mengetik: {name}</p>
            <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default Controlled