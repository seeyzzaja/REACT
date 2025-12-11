function MailBox(props) {
    const unRedMessage =props.unRedMessage
    
    return(
        <>
        <h2>conditional renddering dengan && operator</h2>
        <h1>hallo</h1>
        {unRedMessage.length > 0 && 
        <h2>anda punya {unRedMessage.length} pesan belum di baca</h2>}
        {unRedMessage.length === 0 &&
        <p>tidak ada pessan baru</p>}
        </>
    )
}
export default MailBox