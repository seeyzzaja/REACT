
import './App.css'
import AbortFetchComponent from './component/AbortController'
import AxiosDataComponent from './component/axios'

import Fatching from './component/Fatch'
import Manipulation from './component/ManpulatorJson'



function App() {
 

  return (
    <>
      <div>
        <Fatching/>
      </div>
      <div>
        <AxiosDataComponent/>
      </div>
      <div>
        {/* <AbortFetchComponent/> */}
      </div>
      <div>
        <Manipulation/>
      </div>
    </>
  )
}

export default App
