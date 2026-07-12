import { create } from "zustand";
import { persist } from "zustand/middleware";
import { translations } from "../tranlations";

export const useTranslation = create(
    persist(
        (set,get) => ({
            lang:'arm',
            setLanguage:(lang) => set({lang}),
            t: (key,vars) => {
                const lang = get().lang
                const text = key.split('.').reduce((obj,part) => obj?.[part],translations[lang]);
                if(typeof text !== "string") return key;
                if(!vars) return text;
                return text.replace(/\{(\w+)\}/g,(_,name) => vars[name] ?? `{${name}}`) 
            }  
        }),
        {
            name:'language-storage',
            partialize:(state) => ({lang:state.lang})
        }
    )
)