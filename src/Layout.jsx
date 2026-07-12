import {  Outlet } from "react-router-dom";
import { useTranslation } from "./customHooks/useTranslation";
import { useShallow } from "zustand/shallow";
import DesktopMenu from "./components/DesktopMenu";
import background from './images/background.png'
import useWidth from "./customHooks/useWidth";
import BurgerMenu from "./components/BurgerMenu";
import Footer from "./components/Footer";

function Layout() {
  const { setLanguage } = useTranslation(
    useShallow((state) => {
      return {
        lang: state.lang,
        setLanguage: state.setLanguage,
        t: state.t,
      };
    }),
  );

  const width = useWidth();
  const mobileWidth = width < 768;


  return (
    <div>
    <div className="relative min-h-screen flex flex-col">
      <nav className="sticky top-0 grid grid-cols-[1fr_auto_1fr] items-center h-24  text-white px-8">
  <div>{mobileWidth && <BurgerMenu />}</div>
  <div className="flex justify-start">

    {!mobileWidth && <DesktopMenu />}
    </div>
 

  <div className="flex gap-4 justify-end">
    <button onClick={() => setLanguage("arm")}>Հայ</button>
    <button onClick={() => setLanguage("ru")}>Ру</button>
  </div>
</nav>
    <main className="flex-1">
      <Outlet />
      </main>
        <div className="absolute inset-0 -z-10">
    <img src={background} alt="" className="w-full h-full object-cover" />
  </div>
    </div>
      <Footer />
    </div>
  );
}

export default Layout;
