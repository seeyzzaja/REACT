import './app.css'
import Controlled from './component/Controlled '
import ButtonClicker from "./component/EventHandling"
import InputValidation from './component/InputValidation'
import SyntheticEvent from "./component/SyntheticEvent"
import UnControlledName from './component/unContorolled'

function App() {
 

  return (
    <>
   
      <div>
        <h2>Event Handling</h2>
       <ButtonClicker/>
      </div>
      <div>
        <SyntheticEvent/>
      </div>
      <div>
        <Controlled/>
      </div>
      <div>
        <UnControlledName/>
      </div>
      <div>
        <InputValidation/>
      </div>
    </>
  )
}

export default App
