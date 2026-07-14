import { Link } from "react-router-dom";
import { useTranslation } from "../customHooks/useTranslation";

function NotFound() {
    const t = useTranslation((state) => state.t)
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-6 text-white">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <p className="text-neutral-300">{t('notFound.title')}</p>
      <Link
        to="/"
        className="rounded-full bg-red-700 px-8 py-3 font-semibold w-[152px]
          transition-all duration-300 hover:bg-red-500 hover:scale-105"
      >
        {t('notFound.navigate')}
      </Link>
    </div>
  );
}

export default NotFound;