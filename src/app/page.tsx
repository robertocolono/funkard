"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HomeGuest from "@/components/home/HomeGuest";
import HomeUser from "@/components/home/HomeUser";

export default function HomePage() {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    setIsAuth(!!localStorage.getItem("funkard_token"));
  }, []);

  if (isAuth === null) return null;

  return (
    <>
      <Navbar />
      {isAuth ? <HomeUser /> : <HomeGuest />}
    </>
  );
}