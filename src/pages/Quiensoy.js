import React from 'react'
import Github from '../assets/Github';
import LinkedIn from '../assets/Linkedln';
import Facebook from '../assets/Facebook';
import Instagram from '../assets/Instagram';
import Twitter from '../assets/Twitter';

const Quiensoy = () => {
  const dario =
    'https://blogger.googleusercontent.com/img/a/AVvXsEjmvioCa42776dE49q7PwtlpGJqvend4qbTwgyBoXPCm0Egeu1JKZuIDF5hFB2xGjl9uT3IlNEP-TGazyKknZlMegBve94f8ZHH0pmXlG8SbsE3DGmL5wcGU-EuIIWgD3qFAuMh27kG-3v2guXK5t1IaMkUXznmX4YvM12Hcy79iu9K6kO5324v2q1Q';

    const dragon =
    'https://blogger.googleusercontent.com/img/a/AVvXsEiFp5-pQwo9NYqHj7E9YGjS5qNMmH1BNErjiA6eHRE2kR169DnvyQMjAQ7veghLfr0ZP_-FdE00HQEa6ajHqY3HpfKKbDu-Uyq5vmSKprFNeBpVQYYVazo9-dwLKu00_WSZa5pG3xH60S-ZiqLZQHRk0sXujEw3G6VDTuK_FpjzpBNrl9AA3DJpKVdq';

    const avatar =
    'https://blogger.googleusercontent.com/img/a/AVvXsEh-k8LuPRCBvZp80lskW4d4FXtwjvFJcjmM9Ew2eDA0cbbhi7jdzDv3oMYMoyy0QGzG4KKmZDUB9lsvYUDMD2uJThyuj2u_iGKhyshYGul5sA-7Oo9EU8mh7_-JlJKmMkOE2IPva9Qrmj6V9JRTha3M1hXUoGeAgoZPzB7Rq4WpOim2-ryuH7USOHEu';


  return (
    <>
    <div className="navbar bg-base-100"><font></font>
  <div className="flex-1"><font></font>
    <a className="btn btn-ghost normal-case text-xl">
    <img src={dragon} style={{ width: '160px',height: '60px'}}/>
      </a><font></font>
  </div><font></font>
  <div className="flex-none gap-2"><font></font>
    
    <div className="dropdown dropdown-end"><font></font>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar"><font></font>
        <div className="w-10 rounded-full"><font></font>
        <img src={avatar} alt="dario"/><font></font>
        </div>
        <font></font>
      </label><font></font>
     
    </div><font></font>
  </div><font></font>
</div>
   <section className="px-1 lg:pt-4 mx-auto max-w-7xl">
    <div className="py-2 px-3 md:px-4 flex flex-col items-center">
      <div>
        
        <span className="pt-1 grid justify-rigth relative ">
          <div className="  bg-sky-50 lg:top-6 absolute rounded-full blur-3xl"style={{ width: '170px',height: '180px'}}></div>
          <img src={dario} alt="dario" className="relative " style={{ width: '160px',height: '200px'}}/>
        </span>
        <h2 className="pt-1 text-3xl font-black text-center text-white sm:text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-blue-100">
          HOLA, soy José Domingo Aranda calambás.
          </span>
        </h2>
        <h2 className="pt-1 text-1xl font-black text-center text-white sm:text-2xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-green-500 to-gray-100">
          Desarrollador Web y Junior en Android
          </span>
        </h2>
        <h2 className="pt-1 text-1xl font-black text-center text-white sm:text-1xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-green-100">
          📌 Colombia, Popayán
          </span>
        </h2>
      </div>
      <div className="lg:pt-8 pt-10">
        <span>
          <h6 className=" text-xl lg:text-1xl text-center text-white">
          Bienvenido a mi portafolio.
          </h6>
          <h3 className=" lg:text-1zxl text-center text-white">
            ¿Quieres saber más acerca de mí?
          </h3>
          <br></br>
        </span>
       <span className="flex flex-row gap-14">
        <a
          className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
          target="blank"
          // href="#"
        >
          <Github/>
          </a>
          <a
          className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
          target="blank"
          href="https://www.linkedin.com/in/arandom-jd-0197431bb/"
        >
          <LinkedIn/>
          </a>
          <a
          className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
          target="blank"
          href="https://www.facebook.com/aranda.josed/"
        >
          <Facebook/>
          </a>
          <a
          className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
          target="blank"
          href="https://www.instagram.com/josed_aranda/"
        >
          <Instagram/>
          </a>
          <a
          className="w-5 h-5 fill-white transition duration-300 ease-in-out hover:fill-zinc-300"
          target="blank"
          
        >
          <Twitter/>
          </a>
          </span>
      </div>
      <br></br>
      <h1 className="text-white font-openSans text-center text-4xl font-bold mt-6 leading-tight tracking-tighter animate-bounce">
      ______🔴🔵⚪⚫_______
    </h1>
    </div>
  </section>
  </>
  )
}

export default Quiensoy
