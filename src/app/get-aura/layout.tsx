"use client";

import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <RainbowKitProvider>
        {children}
      </RainbowKitProvider>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={true} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"></ToastContainer>
    </div>
  );
}
