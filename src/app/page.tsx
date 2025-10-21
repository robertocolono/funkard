"use client";
import { useEffect, useState } from "react";
import HomeGuest from "@/components/home/HomeGuest";
import HomeUser from "@/components/home/HomeUser";

export default function Page() {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  useEffect(() => {
    setIsAuth(!!localStorage.getItem("funkard_token"));
  }, []);
  if (isAuth === null) return null;
  return isAuth ? <HomeUser /> : <HomeGuest />;
}

