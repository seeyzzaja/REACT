function SyntheticEvent() {
    const HandelClick = (e)=>{
        e.preventDefault()
        alert ('link di klik,tapi navigasi saya cegah')
        console.log('navigasi di klik tapi saya mencegah nya');
        
    }
     const handleInputChange = (event) => {

    console.log('Nilai input:', event.target.value);
  };
  return(
    <div>
        <h2>SyntheticEvent</h2>
        <a href="https://www.google.com" onClick={HandelClick}>klik</a>
        <br /><br />
        <input type="text" onChange={handleInputChange} placeholder="klik di sini"/>
    </div>
  )
}
export default SyntheticEvent