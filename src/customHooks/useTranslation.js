import { create } from "zustand";
import { persist } from "zustand/middleware";
import { translations } from "../tranlations";

const makeT = (lang) => (key, vars) => {
  const text = key
    .split(".")
    .reduce((obj, part) => obj?.[part], translations[lang]);

  if (typeof text !== "string") return key;
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? `{${name}}`);
};

export const useTranslation = create(
  persist(
    (set) => ({
      lang: "arm",
      t: makeT("arm"),
      setLanguage: (lang) => set({ lang, t: makeT(lang) }),
    }),
    {
      name: "language-storage",
      partialize: (state) => ({ lang: state.lang }),
      merge: (persisted, current) => ({
        ...current,
        ...persisted,
        t: makeT(persisted?.lang ?? current.lang),
      }),
    }
  )
);