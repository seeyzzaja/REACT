import GuesGreeting from "./GuesGreeting"
import UserGreeting from "./UserGreeting"

function Greeting(props) {
   const login =props.login
    if (login) {
    return    <UserGreeting/>
    } else {
        return <GuesGreeting/>
    }

}
export default Greeting