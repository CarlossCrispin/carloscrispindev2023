import bike from '../assets/bike.png'

const Yo = () => {
  return (
    <div className="h-screen p-2 md:p-8" id="yo">
      <div className='grid items-center justify-between h-full grid-cols-3 gap-2'>
        <div className="justify-center col-span-2 p-8 px-24 mt-12 tracking-wide text-justify text-md md:text-3xl">
          <p className="leading-relaxed text-slate-50">
            <span className="mr-4 italic font-bold text-brown-700">Experimento</span>con la <span className="font-bold uppercase text-slate-300 bg-br">natación</span>, las <span className="italic font-bold uppercase text-brown-700">artes marciales </span>y los paseos en <span className="font-medium text-brown-50">bici </span>de forma amateur como medio de <span className="font-bold uppercase text-slate-4400 bg-br">terapia</span> para mejorar el <span className="font-bold uppercase text-emerald-700 bg-br">yo</span>(Carlos), aprecio música de todos los géneros sin prejuicios y <span className="font-bold uppercase text-emerald-700 bg-br">lector</span>  constante de la <span className="font-bold uppercase text-brown-700 bg-br">generación beat</span> como punto de fuga en momentos de confusión para obtener <span className="font-bold uppercase text-brown-800 bg-br">inspiración</span>, consumidor visual de  <span className="font-bold text-brown-800">arte</span> popular, de masas o de galerías por igual y amante del  <span className="font-black uppercase text-slate-300">suadero</span> en todas sus presentaciones.
          </p>
        </div>
        <div className="flex items-center justify-center p-2 border-4 rounded-full md:p-6 md:border-8 bg-brown-200 w-fit border-brown-500">
          <div className="">
            <img src={bike} alt="yo" className='w-full' />
          </div>
        </div>
      </div>

      {/* <div className="flex items-center justify-between w-full md:px-24">
        <div className="flex items-center justify-center p-2 border-4 rounded-full md:p-6 md:border-8 bg-brown-200 w-fit border-brown-500">
          <div className="">
            <img src={bike} alt="yo" className='w-24 md:w-36' />
          </div>
        </div>
        <div className="flex items-center justify-center p-2 border-4 rounded-full md:p-6 md:border-8 bg-brown-200 w-fit border-brown-500">
          <div className="">
            <img src={bike} alt="yo" className='w-24 md:w-36' />
          </div>
        </div>
        <div className="flex items-center justify-center p-2 border-4 rounded-full md:p-6 md:border-8 bg-brown-200 w-fit border-brown-500">
          <div className="">
            <img src={bike} alt="yo" className='w-24 md:w-36' />
          </div>
        </div>
      </div>
      <div className="justify-center p-8 px-24 mt-12 tracking-wide text-justify text-md md:text-3xl">
        <p className="leading-relaxed text-slate-800">
          <span className="mr-4 italic font-bold text-brown-700">Experimento</span>con la <span className="font-bold uppercase text-slate-100 bg-br">natación</span>, las <span className="italic font-bold uppercase text-brown-700">artes marciales </span>y los paseos en <span className="font-medium text-brown-50">bici </span>de forma amateur como medio de <span className="font-bold uppercase text-slate-300 bg-br">terapia</span> para mejorar el <span className="font-bold uppercase text-emerald-700 bg-br">yo</span>(Carlos), aprecio música de todos los géneros sin <span className="font-bold uppercase text-emerald-700 bg-br">prejuicios</span> y lector constante de la <span className="font-bold uppercase text-brown-700 bg-br">generación beat</span> como punto de fuga en momentos de confusión para obtener <span className="font-bold uppercase text-slate-100 bg-br">inspiración</span>, consumidor visual de  <span className="font-bold text-brown-800">arte</span> popular, de masas o de galerías por igual y amante del  <span className="font-medium uppercase text-slate-600">suadero</span> en todas sus presentaciones.
        </p>
      </div> */}
    </div>
  );
};


Yo.propTypes = {

};


export default Yo;
