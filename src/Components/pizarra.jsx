<header className="p-5 bg-brown-100 shadow-md">
  <div className="container mx-auto flex justify-between items-center">
    <a className="block box-border h-16 w-16 md:h-20 md:w-20 overflow-hidden rounded-full transform hover:scale-110" href="">
      <img className="h-full w-full object-cover" src="https://media.istockphoto.com/vectors/anatomical-heart-isolated-heart-diagnostic-center-sign-human-heart-vector-id1177145926?k=20&m=1177145926&s=612x612&w=0&h=30PszSkc9jmobfif-KVcCaauGUDAWlGspthpmtMsI54=" alt="Logo of my example, this is a heart image" />
    </a>
    <div>
      <button id="toggle-menu-button" className="z-50 md:hidden relative" onClick={handleOpen} >
        <span className="sr-only">Toggle Menu</span>
        <div id="open" className="h-7 flex flex-col items-end justify-between">
          <span className="block h-0.5 w-8 bg-brown-900 rounded-full"></span>
          <span className="block h-0.5 w-6 bg-brown-900 rounded-full"></span>
          <span className="block h-0.5 w-8 bg-brown-900 rounded-full"></span>
        </div>
        <div id="close" className="open h-7 flex flex-col items-end justify-between" >
          <span className="block h-0.5 w-8 bg-brown-100 rounded-full origin-left transform rotate-45 translate-y-0.5"></span>
          <span className="block h-0.5 w-8 bg-brown-100 rounded-full origin-left transform -rotate-45 -translate-y-0.5"></span>
        </div>
      </button>
      <div id="toggle-menu" className="hidden md:block font-bold text-brown-100 text-right text-3xl bg-gray-800 fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center md:text-lg md:relative md:text-brown-900 md:bg-transparent md:w-auto md:h-auto md:text-left">
        <ul className="flex flex-col gap-y-7 md:flex-row md:gap-2">
          <li className="md:border-r md:px-4 md:border-brown-200">
            <a href="" className="transition ease-in-out duration-150 hover:line-through">Home</a></li>
          <li className="md:border-r md:px-4 md:border-brown-200">
            <a href="" className="transition ease-in-out duration-150 hover:line-through">Products</a>
          </li>
          <li className="md:border-r md:px-4 md:border-brown-200">
            <a href="" className="transition ease-in-out duration-150 hover:line-through">Articles</a>
          </li>
          <li className="md:border-r md:px-4 md:border-brown-200">
            <a href="" className="transition ease-in-out duration-150 hover:line-through">Random</a>
          </li>
          <li className="md:border-r md:px-4 md:border-brown-200">
            <a href="" className="transition ease-in-out duration-150 hover:line-through">Abous us</a>
          </li>
          <li className="md:px-4">
            <a href="" className="transition ease-in-out duration-150 hover:line-through">Contact us</a>
          </li>
        </ul >
      </div >
    </div >
  </div >
</header >