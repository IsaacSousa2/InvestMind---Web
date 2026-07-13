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
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
      >
        {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {menuOpen && (
        <div
          className="fixed md:hidden right-4 top-16 bg-(--background) p-4 flex gap-4 z-10"
          onClick={() => setMenuOpen(false)}
        >
          <HeaderLinks />
        </div>
      )}
    </header>
  );
}