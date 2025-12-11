function LoginButton(props) {
    const isLogin = props.isLogin
    return(
        <>
<button onClick={props.onClick}>{isLogin ? 'logout' : 'login'}</button>
        </>
    )
}

export default LoginButton