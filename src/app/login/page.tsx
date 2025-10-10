"use client";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem("token", data.token);
      alert("Login OK ✅");
      window.location.href = "/";
    } else alert("Credenziali errate");
  };

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input className="p-2 mb-2 text-black" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="p-2 mb-2 text-black" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="bg-yellow-500 px-4 py-2 rounded" onClick={login}>Accedi</button>
    </div>
  );
}