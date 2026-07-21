import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e) {
      if (e.target.closest("[data-keep-menu]")) return;
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
      className="w-full relative flex justify-start items-center gap-6"
    >
      <img
        onClick={() => navigate("/")}
        className="cursor-pointer rounded-full w-12 h-12 object-cover ring-2 ring-red-500/70 transition-transform duration-200 hover:scale-110"
        src={logo}
        alt="logo"
      />

      <button
        aria-label="Toggle menu"
        className="flex items-center justify-center w-10 h-10 rounded-lg text-gray-200 transition-colors duration-200 hover:bg-gray-800 active:scale-95"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {createPortal(
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity duration-300
            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        />,
        document.body
      )}

      {createPortal(
        <div
          data-keep-menu
          className={`fixed top-24 left-4 z-[9999] flex flex-col gap-1 w-56 p-3
            rounded-2xl border border-gray-700 bg-gray-900 shadow-xl shadow-black/40
            origin-top transition-all duration-300 ease-out
            ${
              isOpen
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 -translate-y-3 scale-95 pointer-events-none"
            }`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200
                ${
                  isActive
                    ? "bg-red-500/15 text-red-400"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              {t(link.label)}
            </NavLink>
          ))}
        </div>,
        document.body
      )}
    </div>
  );
}

export default BurgerMenu;