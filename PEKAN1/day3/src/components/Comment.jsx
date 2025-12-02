import UserInfo from "./UserInfo";

function Coment({author,text,date}) {
    return(
        <div className="Coment">
          <UserInfo user={author}/>
            
        <div className="Comment-text">
        {text}
        </div>
        <div className="Comment-date" style={{ fontSize: '0.8em', color: '#666' }}>
        {date.toLocaleDateString()}
        </div>


        </div>
    )
}

export default Coment