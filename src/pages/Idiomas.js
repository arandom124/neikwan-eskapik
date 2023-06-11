import React from 'react'

const Idiomas = () => {
  return (
    <>
    <div className=' p-9'>
        <div className="collapse bg-base-200 place-items-center">    {/* Open the modal using ID.showModal() method */}
<button className="btn" onClick={()=>window.my_modal_2.showModal()}>Idiomas</button>
<dialog id="my_modal_2" className="modal">
  <form method="dialog" className="modal-box">
    <h3 className="font-bold text-lg text-center">
    <p>Namtrik Nativo</p>
        <div className="rating rating-sm">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked/>
        </div>
    </h3>
    <h3 className="font-bold text-lg text-center">
    <p>Español Nativo</p>
        <div className="rating rating-sm">
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-green-500" />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-green-500"  />
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-green-500" checked/>
            <input type="radio" name="rating-6" className="mask mask-star-2 bg-green-500"/>
        </div>
    </h3>
    <h3 className="font-bold text-lg text-center">
    <p>Inglés Basico</p>
        <div className="rating rating-sm">
            <input type="radio" name="rating-6" className="mask mask-star-2" />
            <input type="radio" name="rating-6" className="mask mask-star-2"  checked/>
            <input type="radio" name="rating-6" className="mask mask-star-2"  checked/>
        </div>
    </h3>
  </form>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>

    
        
        </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,256L48,256C96,256,192,256,288,218.7C384,181,480,107,576,96C672,85,768,139,864,186.7C960,235,1056,277,1152,282.7C1248,288,1344,256,1392,240L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </>
  )
}

export default Idiomas
