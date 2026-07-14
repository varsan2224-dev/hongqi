import { useShallow } from "zustand/shallow"
import { useTranslation } from "../customHooks/useTranslation"

function Home(){
    const {t} = useTranslation(
        useShallow(state => ({
            t:state.t,
            lang:state.lang
        }))
    )
    return(
   <div className="w-full h-auto flex justify-center">
       <div>
         <h1 className="text-white">{t('home.title')}</h1>
       </div>
   </div>
    )
}

export default Home