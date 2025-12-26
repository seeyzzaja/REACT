import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

interface FormState {
  username: string;
  age: number;
  isActive: boolean;
}

function Form() {
  const [form, setForm] = useState<FormState>({
    username: "",
    age: 0,
    isActive: false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="Username"
      />

      <input
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
      />

      <label>
        <input
          name="isActive"
          type="checkbox"
          checked={form.isActive}
          onChange={handleChange}
        />
        Aktif
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
