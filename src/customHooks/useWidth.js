import { useEffect, useState } from "react"

function useWidth(){
   const [width,setWidth] = useState(window.innerWidth);
   useEffect(() => {
     const onResize = () => setWidth(window.innerWidth);

     window.addEventListener('resize',onResize);
     return () => removeEventListener('resize',onResize)
   })
   
   return width

}

export default useWidth