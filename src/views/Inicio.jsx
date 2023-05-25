import perso from '../assets/bust-1.png'

const Inicio = () => {
  return (
    <div className='h-full p-2 md:p-8' id='inicio'>
      <div className="my-12 shadow-xl dark:bg-slate-900 bg-slate-50 rounded-xl">
        <div className='grid items-center justify-between h-full grid-cols-2 gap-2'>
          <div className='flex items-center justify-center'> <img src={perso} alt="yo" className='w-full md:w-1/2' /></div>
          <div className='flex items-center justify-center'><h1 className="text-4xl leading-loose md:text-7xl text-brown-400">¡Hola! Soy <span className="text-brown-700">Carlos <span className="text-brown-800">Crispin</span></span></h1></div>
        </div>
        <div className='justify-center p-8 tracking-wide text-justify text-md md:text-3xl'>
          <p className="leading-relaxed text-slate-800">
            <span className="mr-4 italic font-bold text-brown-600">Desarrollador</span>
            de software enfocado en el <span className="font-bold uppercase text-slate-400">Frontend</span>, consumiendo datos para transformarlos y generar <span className="font-semibold uppercase text-brown-400">colores</span>, <span className="font-normal lowercase text-terra-50">formas</span>, <span className="font-medium uppercase text-brown-500">tamaños</span>, <span className="font-semibold uppercase text-brown-400">emociones</span> y <span className="font-semibold uppercase text-terra-50">experiencias</span> que dejen satisfecho al usuario, <span className="font-bold uppercase text-slate-400">autodidacta</span> por supervivencia desde <span className="font-semibold uppercase text-terra-50">1988</span>, apasionado por el adquirir y <span className="font-medium uppercase text-terra-50">compartir</span> el conocimiento que se recolecta en el entorno a diario, fiel creyente de la programación <span className="font-medium uppercase text-brown-400">comunitaria </span> y por lo tanto <span className="font-light uppercase text-brown-800">vocero </span>de la idea de que el desarrollo de software es para <span className="font-semibold uppercase text-terra-50">todas</span> y <span className="font-normal uppercase text-brown-500">todos</span>.
          </p>

          {/* <p className="justify-center text-sm tracking-wide text-justify md:text-xl text-slate-800">
          Experimento con la natación, las artes marciales y los paseos en bici de forma amateur como medio de terapia para mejorar el yo(Carlos), aprecio música de todos los géneros sin prejuicios y lector constante de la generación beat como punto de fuga en momentos de confusión para obtener inspiración, consumidor visual de arte popular, de masas o de galerías por igual  y amante del suadero en todas sus presentaciones.
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default Inicio;
