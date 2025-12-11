import Add from "./component/CleanUp";
import Dependencies from "./component/EffectDependencies"
import UseEffect from "./component/Hooks"
import { useState } from "react"
import MultipleEffects from "./component/Multiple";
import FetchSimulation from "./component/Fetch";


function App() {

  

  return(

<>
<div>
  <h2>lihat bagian console</h2>
  <UseEffect/>
</div>
<div>
  
  <Dependencies/>
</div>
<div>
<Add/>
</div>
<div>
  <MultipleEffects/>
</div>
<div>
  <FetchSimulation/>
</div>
</>
  )
}
export default App