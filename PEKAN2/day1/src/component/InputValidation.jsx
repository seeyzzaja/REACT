import { useState } from "react";

function InputValidation() {
    const [email,SetEmail] = useState ('')
    const [password,setpassword] = useState ('')
    const [emailError,SetEmailError] = useState ('')
    const [passwordError,setpasswordError] = useState ('')

    const ValidationEmail = (email) =>{
        if (!email.includes('@')) {
            SetEmailError('email harus ada tanda @')
        } else {
            SetEmailError('')
        }
    }
    const ValidationPassword =(password) =>{
        if (password.length < 6) {
            setpasswordError('password tidak boleh kurang dari 6 huruf')
        } else {
            setpasswordError('')
        }
    }
    const handelEmailChange =(e)=>{
        const newEmail = e.target.value
        SetEmail(newEmail)
        ValidationEmail(newEmail)
    }
    const handelPasswordChange =(e) =>{
        const newPassword = e.target.value
        setpassword(newPassword)
        ValidationPassword(newPassword)
    }
    const handelSubmit= (e) =>{
          e.preventDefault();

          ValidationEmail(email)
          ValidationPassword(password)

          if (!passwordError && !emailError && email && password) {
            alert('formulir berhasil di isi')
            console.log(`Email: ${email} paaword: ${password}`);
            
          } else {
            alert('perbaiki kesalahan formulir')
          }
    }
    return(
        <div>
            <form onSubmit={handelSubmit}>
                <div>
              <label>
                Email:
                <input
                 type="text"
                 value={email}
                 onChange={handelEmailChange} />
              </label>
               {emailError && <p style={{ color: 'red', fontSize: '0.8em' }}>{emailError}</p>}
              </div>
              <div>
                <label>
                    password: 
                    <input 
                    type="password"
                     value={password}
                     onChange={handelPasswordChange} />
                </label>
                {passwordError && <p style={{ color: 'red', fontSize: '0.8em' }}>{passwordError}</p>}
              </div>
              <br />
              <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default InputValidation