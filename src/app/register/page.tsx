"use client";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const register = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name })
    });
    if (res.ok) {
      alert("Registrazione OK ✅");
      window.location.href = "/login";
    } else alert("Registrazione fallita");
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold mb-4">Registrazione</h1>
      <input className="p-2 mb-2 text-black" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
      <input className="p-2 mb-2 text-black" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="p-2 mb-2 text-black" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-yellow-500 px-4 py-2 rounded" onClick={register}>Registrati</button>
    </div>
  );
}