import { useEffect,useState } from "react";

function CleanUp() {
    const [width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    useEffect(() =>{
        const heandelSize =() =>{
           setHeight(window.innerHeight)
        setWidth(window.innerWidth) 
        }
            window.addEventListener('resize',heandelSize)
    console.log('Event listener "resize" ditambah');
    
    return () =>{
        window.removeEventListener('resize',heandelSize)
        console.log('Event listener "resize" dihapus');
        
    }
    },[])

  return (
    <div>
      <h2>Ukuran Jendela Browser</h2>
      <p>Lebar: {width}px</p>
      <p>Tinggi: {height}px</p>
    </div>
  );

}
function Add() {
  const [showTracker, setShowTracker] = useState(true);

  return (
    <div>
      <h1>Aplikasi Pelacak Ukuran Jendela</h1>
      <button onClick={() => setShowTracker(prev => !prev)}>
        {showTracker ? 'Sembunyikan' : 'Tampilkan'} Pelacak
      </button>
      {showTracker && <CleanUp />}
    </div>
  );
}

export default Add