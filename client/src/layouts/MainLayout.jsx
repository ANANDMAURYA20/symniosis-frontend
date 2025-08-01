import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components/main";

export const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};