import { useRef } from "react";

function UnControlledName() {
    const nameInputRef = useRef(null)
    const HandelSubmit = (e) =>{
        e.preventDefault()
        alert('Nama yang di submit (unconrolled):  ' + nameInputRef.current.value)
        nameInputRef.current.value=''
    }
    return(
        <div>
            <form onSubmit={HandelSubmit}>
                <h2>unconrolled</h2>
                <label>
                    nama: <input type="text" ref={nameInputRef} defaultValue='naufal' />
                </label>
                <br />
                <button type="submit">submit</button>
            </form>
            <br />
        </div>
    )

}

export default UnControlledName