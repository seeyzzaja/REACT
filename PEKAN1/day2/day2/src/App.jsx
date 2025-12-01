function Wrapper(add) {
  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      {add.children}
    </div>
  );
}

function Ap() {
  return (
    <Wrapper>
      <h1>Ini adalah konten di dalam Wrapper</h1>
      <p>Konten ini diteruskan sebagai children.</p>
    </Wrapper>
  );
}

function App() {
  const myStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '150px',
  };

  const userName = "Alice";
  const greeting = <h1>Hello, {userName}!</h1>;

  const no1 = 10;
  const no2 = 10;
  const result = <p>hasilnya adalah {no1 + no2}</p>;

  function f1(user) {
    return user.firstname + '' + user.lastname;
  }

  const user = { firstname: "naufal ", lastname: 'rassyid' };
  const welcome = <p>selamat datang {f1(user)}</p>;

  const person = { name: 'naufal', age: 20 };
  const personInfo = <p>Nama: {person.name}, Usia: {person.age}</p>;

  return (
    <div>
      <div style={myStyle}>{greeting}</div>
      {result}
      {welcome}
      {personInfo}

      {/* RENDER KOMPONEN LAIN */}
      <Ap />
    </div>
  );
}

export default App;
