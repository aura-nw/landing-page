"use client";
import { useEffect, useState } from "react";
import "./style.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => setIsReady(true), []);
  if (!isReady) {
    return <div></div>;
  }
  return (
    <div className="bg-[#000] pb-24">
        {children}
    </div>
  );
}
