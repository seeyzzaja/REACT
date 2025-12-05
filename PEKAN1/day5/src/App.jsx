import { useState } from 'react';
import './App.css'

function App() {
const [count, setCount] = useState(0);
let style ={
  color:'blue',
   backgroundColor: '#9d1577ff',
   
}
let para ={
   fontSize: '16px',
    lineHeight: '1.5',
    color: '#b3d52dff',
    margin: '10px '
  
}
const [cont,set] =useState(0)
const increment =() => {set( cont => cont +1)}
const decrement =()=>{set( cont => cont -1)}


  const [name, setName] = useState('naufal');
  const [age, setAge] = useState(20);
  const [isEditing, setIsEditing] = useState(false);
   const [todos, setTodos] = useState([
    { id: 1, text: 'Belajar React Hooks', completed: false },
    { id: 2, text: 'Membangun Aplikasi Todo', completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;

    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      completed: false,
    };
    setTodos(prevTodos => [...prevTodos, newTodo]); // Tambahkan todo baru
    setNewTodoText('');
  };

  const toggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id)); // Hapus todo
  };

  return (
    <>
      <div>
      <p style={para}>Anda mengklik {count} kali</p>
      <button style={style} onClick={() => setCount(count + 1)}>
        Klik Saya
      </button>
    </div>
    <div>
      <p style={para}>count : {cont}</p>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
    </div>
    <div>
      <h2>profil pengguna</h2>
      { isEditing ?(
        <div>
          <input
           type="text"
           value={name}
           onChange={(e) => setName(e.target.value)}
           />
           <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))} />
            <button onClick={() =>setIsEditing(false)}>simpan</button>
        </div>
      ):(
        <div>
          <p>Nama:{name}</p>
          <p>Usia: {age}</p>
          <button onClick={()=> setIsEditing(true)} >edit Profil</button>
        </div>
      )
      }
    </div>
    <div>
      <h2>Daftar Tugas</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Tambahkan tugas baru..."
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTodo(todo.id)} style={{ cursor: 'pointer' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
