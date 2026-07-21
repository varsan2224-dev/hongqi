import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useTranslation } from "./customHooks/useTranslation";
import DesktopMenu from "./components/DesktopMenu";
import background from "./images/background.png";
import useWidth from "./customHooks/useWidth";
import useScrolled from "./customHooks/useScrolled";
import BurgerMenu from "./components/BurgerMenu";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

function Layout() {
  const setLanguage = useTranslation((state) => state.setLanguage);

  const width = useWidth();
  const mobileWidth = width < 768;
  const scrolled = useScrolled();

  return (  
    <div>
      <div className="relative min-h-screen flex flex-col">
        <nav
          className={`sticky top-0 z-10 grid grid-cols-[1fr_auto_1fr] items-center
            px-8 text-white transition-all duration-300
            ${
              scrolled
                ? "h-16 bg-black/80 backdrop-blur-md border-b border-red-500/30 shadow-[0_4px_30px_rgba(220,38,38,0.15)]"
                : "h-24 bg-black/50 border-b border-transparent"
            }`}
        >
          <div>{mobileWidth && <BurgerMenu />}</div>
          <div className="flex justify-start">
            {!mobileWidth && <DesktopMenu />}
          </div>
          <div className="flex gap-4 justify-end">
            <button data-keep-menu onClick={() => setLanguage("arm")}>Հայ</button>
            <button data-keep-menu onClick={() => setLanguage("ru")}>Ру</button>
          </div>
        </nav>

        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
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