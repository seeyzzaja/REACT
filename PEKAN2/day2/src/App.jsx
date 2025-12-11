import './App.css'
import Greeting from './component/Greeting'
import LoginBtn from './component/LoginBtn'
import { useState } from 'react'
import MailBox from './component/MailBox'
import PageStatus from './component/SwictsCase'
import ProductList from './component/ArrayList'




import StatusDetector from './component2/StatusDetector'
import MailboxUser from './component2/MailboxUser'
import StatusFunction from './component2/SwitchStatus'
import ProductListData from './component2/ProduckList'



function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const handleLoginClick = () => {
  //   setIsLoggedIn(true);
  // }

  // const handleLogoutClick = () => {
  //   setIsLoggedIn(false);
  // }

  const [dataStatus, setDataStatus] = useState('loading');

  const changeStatus = () => {
    const statuses = ['Loading', 'Success', 'Error', 'unknown'];
    const currentIndex = statuses.indexOf(dataStatus);
    const nextIndex = (currentIndex + 1) % statuses.length;
    setDataStatus(statuses[nextIndex]);
  };

  const yourMessages = ['Pesan 1', 'Pesan 2', 'Pesan 3'];
  // const emptyMessages = [];
  const Status = true;

  return (
    <>
      <div className="App">
       < StatusDetector checkInternet={Status} />
       {Status ? <MailboxUser unreadMessages={yourMessages} /> : <p>Tidak Bisa Memuat Apa Apa</p>}
        <StatusFunction Status={dataStatus} />
        <button onClick={changeStatus}>Change Data Status</button>

        <ProductListData />
      </div>
  </>
  )
}

export default App