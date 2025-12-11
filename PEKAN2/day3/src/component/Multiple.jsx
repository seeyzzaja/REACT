import { useState, useEffect } from "react";

export default function MultipleEffects() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect 1: update document title saat count berubah
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Count berubah ->", count);
  }, [count]);

  // useEffect 2: log ke console saat name berubah
  useEffect(() => {
    console.log("Name berubah ->", name);
  }, [name]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Multiple useEffect Example</h2>

      <div>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Tambah Count</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Nama: {name}</h3>
        <input
          type="text"
          placeholder="Ketik nama..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}
