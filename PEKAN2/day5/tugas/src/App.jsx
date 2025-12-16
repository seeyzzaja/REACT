import { useState } from 'react'

import './App.css'
import NameInput from './component/Lifting'
import NameDisplay from './component/NameDisplay'

function App() {
  const [name,setName] = useState('')

  return (
    <>
    <div>
      <h2>contoh Lifting</h2>
      <NameInput
      name={name}
      setName={setName}/>
      <NameDisplay
      name={name}/>
    </div>
    </>
  )
}

export default App
