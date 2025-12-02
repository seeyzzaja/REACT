import Avatar from "./Avatar";

function UserInfo({user}) {
    return(
        <div className="UserInfo">
            <Avatar user={user}/>
            <div className="UserInfo">{user.name}</div>
        </div>
    )
}

export default UserInfo