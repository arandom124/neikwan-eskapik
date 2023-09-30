import React from 'react'

const Explaboral = () => {
    const manuela =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExNUVovpvbdSHP4qZ653OfAv3ScqQMJzfCQ&usqp=CAU';

    const sitis =
    'https://blogger.googleusercontent.com/img/a/AVvXsEhJceWIqcrkARbp6GL2pq_HhFsJnlWJLr78tZQ8sKP047BStmKgaz54bbFSOE6UccXtbYi7KeyUB4twh-KB0_l1G6JzsVE7c5vGUAjzedsQZQgaGXcyCaq5fiREdUEeyoZyr2YoGE-1oc2SVmo7KkJpev_jpd9lT6nzaZlLRhT6XmNMLp4_Tf9Ky86M';


  return (
    <>
        <h2 className="pt-10 pb-5 text-4xl font-black text-center text-white sm:text-4xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400">
                  Experiencia Laboral
                  </span>
                </h2>
                <div className=' p-9'>
                <div className="collapse bg-black">
                <input type="radio" name="my-accordion-1" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                <h1 className="text-2xl font-bold text-right">Institucion Educativa Misak Mama Manuela - sede Puente Real  <img src={manuela} style={{ width: '100px',height: '50px'}}/></h1>
                </div>
                
                <div className="collapse-content "> 
                  
                    <h1 className="text-xs xl:text-sm font-normal text-orange-600 text-right">Docente <strong className="text-[#9B9B9B]">(1 Mayo 2021 - 1 Noviembre 2021)</strong></h1><p className="text-zinc-300 text-sm  text-right">funciones a destacar, básicamente en la información de las partes de los pc y los programas office, <br></br>además de la programación de diseño en HTML. Y CSS:</p><li className="text-zinc-300 text-sm capitalize  text-right">Memoria Ram</li><li className="text-zinc-300 text-sm capitalize  text-right">Disco Mecanico y Solido</li><li className="text-zinc-300 text-sm capitalize  text-right">Estructura HTML Y CSS</li><li className="text-zinc-300 text-sm capitalize  text-right">Diseño Contenidos De una Página</li><li className="text-zinc-300 text-sm capitalize  text-right">Manejo Office</li><li className="text-zinc-300 text-sm capitalize  text-right">Diseño Plantilla Power Paint:</li>
                </div>
                </div>
                <div className="divider"></div>
                <div className="collapse bg-black">
                <input type="radio" name="my-accordion-1" /> 
                <div className="collapse-title text-xl font-medium">
                <h1 className="text-2xl font-bold text-right">Sitis Soluciones Informáticas Integrales en Salud S.A.S<img src={sitis} style={{ width: '190px',height: '50px'}}/></h1>
                </div>
                <div className="collapse-content"> 
                
                <h1 className="text-xs xl:text-sm font-normal text-orange-600 text-right">Testing y Documentación <strong className="text-[#9B9B9B]">(21 Enero 2021 - 27 Septiembre 2021)</strong></h1><p className="text-zinc-300 text-sm  text-right">Obtener información del sistema es decir descargar archivos actualizarlas y hacer el proceso de subir información<br></br> en los campos requeridos en caso de que se muestre una alerta quiere decir que no hay un buen funcionamiento<br></br> con respecto a subir archivos al aplicativo, luego se informa al desarrollador encargado para que él pueda inspeccionar<br></br> con respecto a ese fallo.</p><li className="text-zinc-300 text-sm capitalize text-right">Bases De Datos</li><li className="text-zinc-300 text-sm capitalize text-right">Estructuras y contenido digital de Excel</li><li className="text-zinc-300 text-sm capitalize text-right">Verificación y complimiento de subida de archivos</li><li className="text-zinc-300 text-sm capitalize text-right">Esta Practica laboal se trabajo remotamente en inicios de la pandemia</li>
                </div>
                </div>

            </div>
            </>
  )
}

export default Explaboral
