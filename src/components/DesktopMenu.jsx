import { NavLink } from "react-router-dom"
import { useTranslation } from "../customHooks/useTranslation"

function DesktopMenu(){
    const t = useTranslation((state) => state.t)
    return (
         <div className="flex gap-12">
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? "text-red-500" : "")}
    >
      {t("nav.home")}
    </NavLink>
    <NavLink
      to="products"
      className={({ isActive }) => (isActive ? "text-red-500" : "")}
    >
      {t("nav.products")}
    </NavLink>
    <NavLink
      to="about"
      className={({ isActive }) => (isActive ? "text-red-500" : "")}
    >
      {t("nav.about")}
    </NavLink>
    <NavLink
      to="contacts"
      className={({ isActive }) => (isActive ? "text-red-500" : "")}
    >
      {t("nav.contacts")}
    </NavLink>
  </div>
    )
}

export default DesktopMenu