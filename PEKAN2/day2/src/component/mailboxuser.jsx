function MailboxUser(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div style={{ border: '5px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
            <h1>Hello!</h1>
            <h3>Ini adalah Kumpulan Mailbox anda</h3>
            {unreadMessages.length > 0 && (
                <h2>Kamu Memiliki  {unreadMessages.length} unread messages.</h2>
            )}
            {unreadMessages.length === 0 && (
                <h2>Tidak ada pesan baru</h2>
            )}
        </div>
    );
}

export default MailboxUser;

