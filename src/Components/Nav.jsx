import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Toogle from './Toogle';
import { UseScrollPosition } from '../hooks/UseScrollPosition';


const Nav = ({ theme, setTheme }) => {
  const [open, setOpen] = useState(false);
  const scrollPosition = UseScrollPosition();


  const NavStyle = classNames(
    scrollPosition > 10
      ? 'bg-terra-50 opacity-90 ease-in duration-300 drop-shadow-xl px-8 py-4' : 'bg-transparent ease-in duration-300 px-4 py-2 block w-full'
  )

  const Rotate = classNames(
    open
      ? 'transition duration-700 ease-in-out rotate-180'
      : 'transition duration-700 ease-in-out'
  )

  const showNav = classNames(
    open
      ? 'bg-slate-900 dark:bg-slate-50 md:hidden transition duration-700 ease-in-out text-3xl h-screen bg-slate-900 fixed w-full top-0'
      : 'md:hidden -translate-y-96 transition duration-700 ease-in-out text-2xl fixed w-full top-0'
  )

  const handleOpen = () => {
    setOpen(!open);
  }
  const handleNavLink = () => {
    setTimeout(() => { setOpen(!open); }, 800)

  }

  return (
    <nav className="sticky top-0">
      <div className={NavStyle}>

        <div className="mx-auto max-w-7xl border-500">
          <div className="flex justify-between">
            <div className="flex items-center justify-between w-1/2">
              <h2 className='text-4xl uppercase text-brown-700'>
                <a href="#start">

                  Carlos
                </a>
              </h2>
              {/*  <div className="container flex items-center justify-between mx-auto">
                <a className="box-border block w-16 h-16 overflow-hidden transform rounded-full md:h-20 md:w-20 hover:scale-110" href="">
                  <img className="object-cover w-full h-full bg-slate-50 dark:slate-900" src="https://media.istockphoto.com/vectors/anatomical-heart-isolated-heart-diagnostic-center-sign-human-heart-vector-id1177145926?k=20&m=1177145926&s=612x612&w=0&h=30PszSkc9jmobfif-KVcCaauGUDAWlGspthpmtMsI54=" alt="Logo of my example, this is a heart image" />
                </a>
              </div> */}

              {/* <div><Toogle theme={theme} setTheme={setTheme} /></div> */}
            </div>
            <div className='items-center hidden space-x-3 text-3xl font-bold text-right md:flex text-brown-600'>
              <ul className="flex flex-col gap-y-7 md:flex-row md:gap-2">
                <li className="md:border-r md:px-4 md:border-brown-700">
                  <a href="#inicio" className="transition duration-150 ease-in-out hover:line-through">Inicio</a></li>
                <li className="md:border-r md:px-4 md:border-brown-700">
                  <a href="#yo" className="transition duration-150 ease-in-out hover:line-through">Yo</a>
                </li>
              </ul >
            </div>
            <div className="flex items-center md:hidden">
              <button className='z-0 text-brown-600 hover:text-brown-400'>
                <AiOutlineMenu size={50} onClick={handleOpen} className={Rotate} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={showNav}>
        <div className={`flex items-center content-center justify-center text-white dark:text-slate-800
    ${open ? 'h-screen' : null}`}>
          <button className='fixed z-10 right-8 top-2'>
            <AiOutlineClose size={50} onClick={handleOpen} className={Rotate} />
          </button>

          <div className={`font-bold text-center text-7xl 
    ${!open ? 'hidden' : null}`}>
            <ul className="flex flex-col space-y-24 gap-y-7 md:flex-row md:gap-2">
              <li className="md:border-r md:px-4 md:border-brown-700" onClick={handleNavLink}>
                <a href="#inicio" className="transition duration-150 ease-in-out hover:line-through">Inicio</a></li>
              <li className="md:border-r md:px-4 md:border-brown-700" onClick={handleNavLink}>
                <a href="#yo" className="transition duration-150 ease-in-out hover:line-through">Yo</a>
              </li>

            </ul >
          </div>
        </div>
      </div >

    </nav>
  );
};


Nav.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func
};


export default Nav;
