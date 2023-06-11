import React from 'react'

const Karosel = () => {
    const bingo =
    'https://blogger.googleusercontent.com/img/a/AVvXsEgdkILln-RgrdXwJARXtDTr76rOHfYdMSZBXZcxKdsjIr5q8R3tzgQd5uxu3T_cbwFebZQcc4zL0sDBBpHLNyyYpxtpaSpTW1kUaM0WlUG0FGL-W5pDtKoMUKsvWQ4wvW6sFGOdv8ritP7BQiGWDnsjXZZYU74BVhfba0J82bR9UrixQ4GW7Gj-8D6M';
  
  const misakweb =
    'https://blogger.googleusercontent.com/img/a/AVvXsEjaeG2ZCpzkYi72y_huOlgCpaqoCC5VMkg7DB4r19xamgmk-6TS3Cn5d8K3eLSTzPuu9492Pq3bQHPZwMqyWeRwh1gxJJdsww8CAw2WDYUyxwlgKcupPmtstNn8GX7Vkz1uQWXWfzag8dTrvzP5VZr_SlK-TT7qsE0s0m2tcPm2AWBTVh0I2IvAvEuA';
  
  const ezio =
    'https://us.123rf.com/450wm/elenabsl/elenabsl1806/elenabsl180600001/102349097-estudiantes-que-utilizan-una-aplicaci%C3%B3n-de-aprendizaje-en-l%C3%ADnea-concepto-innovador-de-educaci%C3%B3n-y.jpg?ver=6';    
  
  const dario =
    'https://blogger.googleusercontent.com/img/a/AVvXsEg3kvY0CGPjuomnFwy_zo4ywZA_9ZWAmEbgl1My9tOw3uOml-V154NC91bnPKlodNmwZ6837HQ9_awoko7xytCBejhnMT4WyGQXM8wgVVorIGaescENpN186M-sYQNa4rPiluaQhmEFFXquHJY5uuvSRd7dAk7d2Ob0EbJ7T8L2ZokBwWr3eS1BXnZ6';
    
  const ayuda =
    'https://digitaltech.com.co/wp-content/uploads/2017/10/sistema_pqr2.jpg';
  
    const manuela =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTExNUVovpvbdSHP4qZ653OfAv3ScqQMJzfCQ&usqp=CAU';
  
    const sitis =
    'https://blogger.googleusercontent.com/img/a/AVvXsEhJceWIqcrkARbp6GL2pq_HhFsJnlWJLr78tZQ8sKP047BStmKgaz54bbFSOE6UccXtbYi7KeyUB4twh-KB0_l1G6JzsVE7c5vGUAjzedsQZQgaGXcyCaq5fiREdUEeyoZyr2YoGE-1oc2SVmo7KkJpev_jpd9lT6nzaZlLRhT6XmNMLp4_Tf9Ky86M';
  
    const sena =
    'https://blogger.googleusercontent.com/img/a/AVvXsEiUq5Rk36xl8MxzscMQ_S803G2QUZowBD_58fa3-J9JeakcLbLAJ1EDVD75TqcgX7imz1k15coDMQV39YvkaoSRMsk0gL9fWx7tjTKrX-I8OooLVUmSSFPfNDlK5CsM8xVt6QwfKEA5qAJfliqMeuvO1V2cH1sTB4rTupLjRcSssYGAK-fmyAg-7oq5';
  
    const fup =
    'https://blogger.googleusercontent.com/img/a/AVvXsEiUXhPzGPAMRF8685DIao6C2gy6CCYm9D-X0p6KvPoqKdiThyxME_exyP4q-YRyLomAcO14y2p3sCGX1UgH1f42HZbyYHqaEaZ6ZoHjl6pttOR7eD_cCp4Iis0-XstnoRcjQsrL7LbcPJ8ROlXTfu_FPifYtZHCV_qfkO3tY5uIog4JNu9XHA98eLG6';
  return (
    <>
    <div className="carousel carousel-center rounded-box p-3">
        <div className="carousel-item">
            <img src={bingo} style={{ width: '280px',height: '120px'}} />
        </div>
        <div className="carousel-item">
            <img src={sena} style={{ width: '80px',height: '70px'}} />
        </div> 
        <div className="carousel-item">
            <img src={misakweb} style={{ width: '280px',height: '120px'}} />
        </div> 
        
        <div className="carousel-item">
            <img src={fup} style={{ width: '180px',height: '60px'}} />
        </div>
        
        <div className="carousel-item">
            <img src={dario} style={{ width: '280px',height: '120px'}} />
        </div> 
        
        <div className="carousel-item">
            <img src={manuela} style={{ width: '280px',height: '120px'}} />
        </div> 
        <div className="carousel-item">
            <img src={sitis} style={{ width: '100px',height: '60px'}} />
        </div>
        
    </div>
    </>
  )
}

export default Karosel
