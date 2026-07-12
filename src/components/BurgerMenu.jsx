import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "../customHooks/useTranslation";
import logo from "../images/logo.webp";

function BurgerMenu() {
  const links = [
    { to: "/", label: "nav.home" },
    { to: "/products", label: "nav.products" },
    { to: "/about", label: "nav.about" },
    { to: "/contacts", label: "nav.contacts" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const t = useTranslation((state) => state.t);
  const navigate = useNavigate()

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div
      ref={menuRef}
      className="w-full relative flex justify-start items-center gap-8"
    >
      <img
        onClick={() => navigate("/home")}
        className="cursor-pointer border border-red-500 rounded-full w-12 h-12 scale-120" 
        src={logo}
        alt=""
      />
      <button
        className="flex justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      <div
        className={`fixed border top-24 left-0 flex flex-col gap-4 px-4 py-2 overflow-hidden transition-all duration-300 ease-in-out 
            ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        {links.map((link) => {
          return (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "text-red-500" : "")}
            >
              {t(link.label)}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default BurgerMenu;
