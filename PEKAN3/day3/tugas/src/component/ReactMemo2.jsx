import React,{ useState } from "react";

function InfoCard({user}) {
    console.log('❌ InfoCard di-render');
    <p>{user.name}({user.role})</p>
}

const MemoInfoCard = React.memo(function MemoInfoCard({user}) {
    console.log('✅ MemoInfoCard di-render');
    <p>{user.name}({user.role})</p>
    
})

function Card() {
    const [online,setOnline] = useState(false)
const user ={
    name:'naufal',
    role:'web developer'
}
return(

<>
<button onClick={()=>setOnline(!online)}>status {online ? 'online' : 'offline'}</button>
<InfoCard user={user}/>
<MemoInfoCard user={user}/>
</>

)
}

export default Card