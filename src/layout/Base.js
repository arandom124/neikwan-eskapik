import Quiensoy from "../pages/Quiensoy"
import Resumen from "../pages/Resumen"
import Idiomas from "../pages/Idiomas"
import Miproyectos from "../pages/Miproyectos"
import Herramientas from "../pages/Herramientas"
import Explaboral from "../pages/Explaboral"
import Educacion from "../pages/Educacion"
import Footer from "./Footer"
import Karosel from "../pages/Karosel"

const Base = () => {
  return (
    <div className="bg-zinc-800 h-full">
      <Quiensoy/>
      <Resumen/>
      <Idiomas/>
      <Miproyectos/>
      <Herramientas/>
      <Explaboral/>
      <Educacion/>
      <Karosel/>
      <Footer/>

      
    </div>
  )
}

export default Base
