import  { useEffect, useState } from "react";



export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState("");
  const [filter, setFilter] = useState("all"); 
  const [theme, setTheme] = useState("light"); 

  
  useEffect(() => {
    try {
      const raw = localStorage.getItem("todo_app_v1");
      if (raw) setTodos(JSON.parse(raw));
    } catch (e) {
      console.error("Gagal baca localStorage:", e);
    }
    
    const savedTheme = localStorage.getItem("todo_theme_v1");
    if (savedTheme) setTheme(savedTheme);
  }, []);

 
  useEffect(() => {
    localStorage.setItem("todo_app_v1", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todo_theme_v1", theme);
  }, [theme]);

  const addTodo = (e) => {
    e.preventDefault();
    const text = newTodoText.trim();
    if (!text) return;

    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    const newTodo = { id, text, completed: false };
    setTodos((p) => [...p, newTodo]);
    setNewTodoText("");
  };

  const toggleTodo = (id) => {
    setTodos((p) => p.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id) => {
    setTodos((p) => p.filter((t) => t.id !== id));
  };

  const clearCompleted = () => setTodos((p) => p.filter((t) => !t.completed));

  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const activeCount = todos.filter((t) => !t.completed).length;

  const toggleTheme = () => setTheme((th) => (th === "light" ? "dark" : "light"));


  const styles = `
    :root{
      --bg: #ffffff; --card: #f9f7fbff; --text: #19240fff; --muted: #6b7280; --accent: #2563eb; --danger:#ef4444;
    }
    [data-theme='dark']{ --bg:#0b1220; --card:#0f1724; --text:#e6eef8; --muted:#9aa6b2; --accent:#7c3aed; --danger:#fb7185 }

.todo-wrap{
  height:100vh;
  width:100vw;
  display:flex;
  align-items:stretch;
  justify-content:center;
  padding:0;
  margin:0;
  box-sizing:border-box;
}

.card{
  width:100%;
  max-width:640px;
  height:100%;
  overflow-y:auto;
  background:var(--card);
  border-radius:0;
  box-shadow:0 6px 20px rgba(2,6,23,0.08);
  padding:18px;
}

    header{display:flex; align-items:center; justify-content:space-between; gap:12px}
    h1{font-size:20px; margin:0}
    .controls{display:flex; gap:8px; align-items:center}

    form{display:flex; gap:8px; margin-top:14px}
    input[type='text']{flex:1; padding:10px 12px; border-radius:8px; border:1px solid rgba(15,23,36,0.06); background:transparent; color:var(--text); outline:none}
    button.btn{background:var(--accent); color:white; border:none; padding:9px 12px; border-radius:8px; cursor:pointer}
    button.ghost{background:transparent; border:1px solid rgba(15,23,36,0.06); padding:8px 10px; border-radius:8px; cursor:pointer}

    ul.todo-list{list-style:none; padding:0; margin:18px 0 8px 0}
    li.todo-item{display:flex; align-items:center; gap:12px; padding:10px; border-radius:8px; margin-bottom:8px; transition:all .22s ease; transform:translateY(0); opacity:1}
    li.todo-item.enter{ transform:translateY(-6px); opacity:0 }
    .todo-item .text{flex:1; cursor:pointer}
    .todo-item .text.done{ text-decoration:line-through; opacity:0.6 }

    .filters{display:flex; gap:8px; align-items:center}
    .filter-btn{padding:6px 10px; border-radius:8px; cursor:pointer; border:1px solid transparent}
    .filter-btn[aria-pressed='true']{ background:var(--accent); color:white }

    .meta{display:flex; justify-content:space-between; align-items:center; margin-top:12px; color:var(--muted); font-size:13px}

    .empty{padding:18px; border-radius:8px; text-align:center; color:var(--muted); background:linear-gradient(90deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))}

    @media (prefers-reduced-motion: no-preference){
      .todo-item{transition:transform .18s cubic-bezier(.2,.9,.3,1), opacity .18s}
    }
  `;

  return (
    <div className="todo-wrap" data-theme={theme}>
      <div className="card" role="application" aria-labelledby="todo-title">
        <style>{styles}</style>

        <header>
          <div>
            <h1 id="todo-title">Daftar Tugas</h1>
            <div style={{ color: "var(--muted)", fontSize: 13 }}>{activeCount} tugas aktif</div>
          </div>

          <div className="controls">
            <button
              className="ghost"
              onClick={toggleTheme}
              aria-pressed={theme === "dark"}
              title="Toggle theme"
            >
              {theme === "light" ? "🌞 Light" : "🌙 Dark"}
            </button>
          </div>
        </header>

        <form onSubmit={addTodo} aria-label="Tambah tugas" style={{ marginTop: 12 }}>
          <input
            aria-label="Teks tugas"
            type="text"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="Tambahkan tugas baru..."
          />
          <button className="btn" type="submit">Tambah</button>
        </form>

        <ul className="todo-list" aria-live="polite">
          {filteredTodos.length === 0 && (
            <li className="empty">Tidak ada tugas.</li>
          )}

          {filteredTodos.map((todo) => (
            <li key={todo.id} className={`todo-item`}>
              <input
                id={`chk_${todo.id}`} 
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                aria-label={`Tandai ${todo.text} selesai`}
              />

              <label htmlFor={`chk_${todo.id}`} className={`text ${todo.completed ? "done" : ""}`} onClick={() => toggleTodo(todo.id)}>
                {todo.text}
              </label>

              <button
                onClick={() => deleteTodo(todo.id)}
                aria-label={`Hapus ${todo.text}`}
                style={{ marginLeft: 8, background: 'transparent', border: 'none', cursor: 'pointer' }}
                title="Hapus tugas"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>

        <div className="meta">
          <div className="filters" role="tablist" aria-label="Filter tugas">
            <button className="filter-btn" onClick={() => setFilter("all")} aria-pressed={filter === "all"}>Semua</button>
            <button className="filter-btn" onClick={() => setFilter("active")} aria-pressed={filter === "active"}>Aktif</button>
            <button className="filter-btn" onClick={() => setFilter("completed")} aria-pressed={filter === "completed"}>Selesai</button>
          </div>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button className="ghost" onClick={() => { setTodos([]); }} title="Hapus semua">Hapus semua</button>
            <button className="ghost" onClick={clearCompleted} title="Hapus yang selesai">Hapus selesai</button>
          </div>
        </div>

      </div>
    </div>
  );
}
