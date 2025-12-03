import './App.css'
import MyButton from './component/MyButton';

function App() {
  const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px'
  };

  const paragraphStyle = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#721b1bff',
    margin: '10px 0'
  };
  const tugas = {
    backgroundColor: '#15429dff',
    color : 'red',
    textAlign: 'center',
    padding : '30px',
    borderRadius : '10px'
  }
const tugas1 = {
    backgroundColor: '#9d1577ff',
    color : 'blue',
    padding : '30px',
    borderRadius : '10px'
  }
  const pargraf = {
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#b3d52dff',
    margin: '10px '
  }
  

  return (
   <>
  <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto' }}>
    <header style={headerStyle}>
    <h1>ini adalah headerStyle</h1>
    </header>
  
    <p style={paragraphStyle}>
     Ini adalah contoh penggunaan <strong>inline styles</strong> dalam React.
        Setiap properti CSS ditulis sebagai pasangan kunci-nilai dalam objek JavaScript.
    </p>
  <button style={{
        backgroundColor: '#61dafb',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1em'
      }}>
        Klik Saya
      </button>
      </div>
{/* tugas nomor1 */}
      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto' }}>
        <div style ={tugas}>
          <h2>ini adalah tugas inline</h2>
        </div>
        <p style={pargraf}>ini paragraf tugas inline</p>
        <button style={{
        backgroundColor: '#61dafb',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1em'
      }}>
        Klik Saya
      </button>
      </div>
      
{/* tugas nomor2 */}

      
       <div className="container">
      <h1 className="title">Styling dengan <span className="highlight">CSS Classes</span></h1>
      <p>
        Ini adalah cara paling umum untuk me-style komponen React.
        Kita mengimpor file CSS dan menggunakan atribut <code className="highlight">className</code>.
      </p>
      <button className="button">Pelajari Lebih Lanjut</button>
    </div>
    <div>
      <h1>Styling dengan CSS Modules</h1>
      <MyButton onClick={() => alert('Default Button Clicked!')}>
        Default Button
      </MyButton>
      <MyButton type="primary" onClick={() => alert('Primary Button Clicked!')}>
        Primary Button
      </MyButton>
      <p>
        Nama kelas CSS di-hash secara otomatis untuk mencegah konflik nama.
        Lihat inspeksi elemen di browser untuk melihat nama kelas yang dihasilkan.
      </p>
    </div>
  </>
  )
}

export default App
// bagian Dynamic Styling dengan Props sama bagian Responsive Design dalam React belum paham mas