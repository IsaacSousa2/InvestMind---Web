"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "@/../public/white-logo.svg";
import HeaderLinks from "./HeaderLinks";
import BlackButton from "./BlackButton";
import GreenButton from "./GreenButton";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-10 py-10 bg-(--background) h-16 w-full">
      <div>
        <Image src={Logo} alt="Logo" className="h-50 w-50" />
      </div>

      <div className="hidden md:flex">
        <HeaderLinks />
      </div>

      <div className="hidden md:flex gap-4">
        <BlackButton text="Entrar" />
        <GreenButton text="Crie sua conta" />
      </div>

      <button
        className="md:hidden z-50 relative"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-(--background) p-6 pt-24 pb-10 flex flex-col md:hidden z-40 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex flex-col items-center justify-center flex-1 gap-6">
          <HeaderLinks />
        </div>

        <div className="flex flex-col gap-4">
          <BlackButton text="Entrar" />
          <GreenButton text="Começar" />
        </div>
      </div>
    </header>
  );
}