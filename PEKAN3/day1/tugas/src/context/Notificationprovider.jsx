import { useState } from "react";
import NotificationContext from "./NotificatoinContext";

function NotificationProvider({children}) {
    const [notification,setNotification] = useState(3)
const notif = () =>{
    setNotification(prev => prev +1)
}

    const clearNotif = () => {
        setNotification(0)
    }
const notifSet = {notification,notif,clearNotif}
    return(
<NotificationContext.Provider value={notifSet}>
    {children}
</NotificationContext.Provider>
    )
}


export default NotificationProvider