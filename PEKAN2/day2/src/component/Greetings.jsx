function GuesGreeting() {
    return <h2> anda sebagai guset</h2>
}

function UserGreeting() {
    return <h2>anda sebagai user</h2>
}

function Greeting(props) {
    const isGreeting = props.isGreeting
    if (isGreeting) {
        return <GuesGreeting/>
    } else {
        return <UserGreeting/>
    }
}

function LoginGreeting(params) {
    return(
        <div>
            <h2>conditional rendering dengan if else</h2>
            <Greeting isGreeting={true}/>
            <Greeting isGreeting={false}/>
        </div>
    )
}
export default LoginGreeting