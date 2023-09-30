import React from 'react'

const Miproyectos = () => {

    const bingo =
    'https://blogger.googleusercontent.com/img/a/AVvXsEgdkILln-RgrdXwJARXtDTr76rOHfYdMSZBXZcxKdsjIr5q8R3tzgQd5uxu3T_cbwFebZQcc4zL0sDBBpHLNyyYpxtpaSpTW1kUaM0WlUG0FGL-W5pDtKoMUKsvWQ4wvW6sFGOdv8ritP7BQiGWDnsjXZZYU74BVhfba0J82bR9UrixQ4GW7Gj-8D6M';

  const misakweb =
    'https://blogger.googleusercontent.com/img/a/AVvXsEjaeG2ZCpzkYi72y_huOlgCpaqoCC5VMkg7DB4r19xamgmk-6TS3Cn5d8K3eLSTzPuu9492Pq3bQHPZwMqyWeRwh1gxJJdsww8CAw2WDYUyxwlgKcupPmtstNn8GX7Vkz1uQWXWfzag8dTrvzP5VZr_SlK-TT7qsE0s0m2tcPm2AWBTVh0I2IvAvEuA';

  const ezio =
    'https://us.123rf.com/450wm/elenabsl/elenabsl1806/elenabsl180600001/102349097-estudiantes-que-utilizan-una-aplicaci%C3%B3n-de-aprendizaje-en-l%C3%ADnea-concepto-innovador-de-educaci%C3%B3n-y.jpg?ver=6';    

  const dario =
    'https://blogger.googleusercontent.com/img/a/AVvXsEg3kvY0CGPjuomnFwy_zo4ywZA_9ZWAmEbgl1My9tOw3uOml-V154NC91bnPKlodNmwZ6837HQ9_awoko7xytCBejhnMT4WyGQXM8wgVVorIGaescENpN186M-sYQNa4rPiluaQhmEFFXquHJY5uuvSRd7dAk7d2Ob0EbJ7T8L2ZokBwWr3eS1BXnZ6';
    
  const ayuda =
    'https://www.pc-dial-a-fix.co.uk/wp-content/uploads/2021/06/AdobeStock_195191785-1-1024x683.jpeg';

  const venta =
    'https://blogger.googleusercontent.com/img/a/AVvXsEhJ0VLcbAvAgW8gatKMfpQLPH22A4lOWm9DJiy89zMiOw0yQedsTGw4pO7e4z4rgTIwFjJiu4cNyXFczI94A4S2gf4FQGVn3c7XV1vvDU8TvAcGmzlLU4VOdT8OV5mL1BGTmBFlo9w-NU8lDNPzpxVT5HOWa9l6FxB3WracgLGQpS1WThzuKMwMIi1ETFk';
  

  return (
    <>
    <h2 className="pt-10 pb-5 text-4xl font-black text-center text-white sm:text-4xl">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-blue-400">
      Mis Proyectos
      </span>
    </h2>

    <div className="flex flex-col w-full lg:flex-row p-3">
      <div className="card w-350 bg-black shadow-xl">
        <h1 className="font-bold text-sky-400 text-2xl text-center pb-8">
          Juego Bingo
        </h1>
        <figure>
        <a href="https://eshekik-bingo.vercel.app/"className="flex space-x-5 items-center hover:text-slate-300">
          <img src={bingo} alt="Shoes" /></a></figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-orange-600 text-2xl text-left pb-1">Microsoft Edge📅!</h2>
          <p className="text-xs xl:text-sm font-normal"><strong className="text-[#9B9B9B]">
            Solo es compatible con el navegador EDGE, abstengase en abrir otros nevegadores. TOTALMENTE GRATUITO con servicio a nuestra COMUNIDAD. Una app que permite a los usuarios una mejor interacción en el momento de registro de datos conectada 100% con la nube. ademas permite visualizar una tablero de control de los diferentes numeros que con solo un clic Cambia de color en cual podra hacer un seguimiento de cuales numeros ya se balotearon.    SOLICITA LA CREDENCIALES AL DESARROLLADOR PARA ACCEDER AL DASHBOARD JUEGO BINGO 🎱🎱🎱.
            </strong></p>
        </div>
      </div>
      <div className="divider lg:divider-horizontal">|</div> 
      <div className="card w-350 bg-black shadow-xl">
        <h1 className="font-bold text-sky-400 text-2xl text-center pb-8">
        Web Informativo y Radio Streamin 24/7
        </h1>
        <figure>
        <a href="http://misakacike.22web.org/"className="flex space-x-5 items-center hover:text-slate-300">
          <img src={misakweb} alt="misakweb" /></a></figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-orange-600 text-2xl text-left pb-1">EDGE, CHROME, FIREFOX, ETC 📡</h2>
          <p className="text-xs xl:text-sm font-normal"><strong className="text-[#9B9B9B]">
          Es una app web conmpatible con todos los navegadores ademas de eso es responsivo para todas las plataformas Web, Movil y Tabletas🎧🎤.  podras encontrar diferentes contenidos, información de mi comunidad Misak, Emprendimientos Muckups y por su puesto las emisoras de nuestra comunidad y fuera de ello solo con un clic podras escuhar musicas variadas a gusto de cada uno🔎.
            </strong></p>
        </div>
      </div>
    </div>
    {/* _______________________2___________________________ */}
    <div className="flex flex-col w-full lg:flex-row p-3">
      <div className="card w-350 bg-black shadow-xl">
        <h1 className="font-bold text-sky-400 text-2xl text-center pb-8">
        Ezio Plataforma
        </h1>
        <figure>
        <a href="#"className="flex space-x-5 items-center hover:text-slate-300">
          <img src={ezio} alt="ezio" /></a></figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-orange-600 text-2xl text-left pb-1">WEB Registro de notas y mucho más</h2>
          <p className="text-xs xl:text-sm font-normal"><strong className="text-[#9B9B9B]">
          👽👾🌎🌍🌏Sitio web para colegios y escuelas realizada en PHP, ajax, javascript, CodeInteger.  aun esta en produccion pero muy pronto estara al alcance de quien los necesite.
            </strong></p>
        </div>
      </div>
      <div className="divider lg:divider-horizontal">|</div> 
      <div className="card w-350 bg-black shadow-xl">
        <h1 className="font-bold text-sky-400 text-2xl text-center pb-8">
        Taller de Seguridad Informatica
        </h1>
        <figure>
        <a href="https://phishing-fup.vercel.app/"className="flex space-x-5 items-center hover:text-slate-300">
          <img src={dario} alt="dario" /></a></figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-orange-600 text-2xl text-left pb-1">Hacking Etico 🔐🔒🔓</h2>
          <p className="text-xs xl:text-sm font-normal"><strong className="text-[#9B9B9B]">
          Taller realizado para el curso de seguridad informática del semillero de investigación 🖥️SENTINEL 💻.
            </strong></p>
        </div>
      </div>
    </div>
    {/* __________________________________________________ */}
    <div className="flex flex-col w-full lg:flex-row p-3">
      <div className="card w-350 bg-black shadow-xl">
        <h1 className="font-bold text-sky-400 text-2xl text-center pb-8">
        Tambien Presto servicios de sistemas Informaticos.
        </h1>
        <figure>
        <a href="#"className="flex space-x-5 items-center hover:text-slate-300">
          <img src={ayuda} alt="ayuda" /></a></figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-orange-600 text-2xl text-left pb-1">Asesor Informatico🖨️!</h2>
          <p className="text-xs xl:text-sm font-normal"><strong className="text-[#9B9B9B]">
          🖥️💻Actualización de Windows, Office, activacion de licencias, instalación de los sistemas Operativos tanto Windows Como Linux desde el arranque o en una Maquina Virtual , Mantenimiento de equipos de computo (Portatiles y/o Escritorio🖥️💻) .transmitir tu señal de Radio por Internet las 24/7📻 entre Muchas cosas Más🔈🔉🔊.
            </strong></p>
        </div>
      </div>
      <div className="divider lg:divider-horizontal">|</div> 
      <div className="card w-350 bg-black shadow-xl">
        <h1 className="font-bold text-sky-400 text-2xl text-center pb-8 animate-pulse">
        Software personalizado radio streaming a LA VENTA.
        </h1>
        <figure>
        <a href="https://nombre-tu-radio.vercel.app/"className="flex space-x-5 items-center hover:text-slate-300">
          <img src={venta} alt="venta" /></a></figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-orange-600 text-2xl text-left pb-1 animate-bounce">Sistema Frontend React 🖨️100% Responsivo para tabletas y movil  📡</h2>
          <p className="text-xs xl:text-sm font-normal"><strong className="text-[#9B9B9B] animate-pulse">
          🖥️💻Si necesitas tener una pagina wep personal para transmitir CLIC EN LA IMAGEN. Tu radio a internet este software te interesa🖥️💻) .transmitir tu señal de Radio por Internet las 24/7📻 y si tu link de radio ya esta por internet mejor aun transladamos el link a esta app. ademas podras mejorar mas y darle vida agregando imagenes,informacion y ubicacion de tu radio emisora  🔈🔉🔊.para mas informacion ponte en contacto con arandomCore en sus redes
            </strong></p>
        </div>
      </div>
    </div>
    {/* __________________________________________________ */}
    
   
    </>
  )
}

export default Miproyectos
