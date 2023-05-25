
import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
// import { MdLightMode, MdModeNight } from 'react-icons/md'
import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";

const Toogle = ({ theme, setTheme }) => {
  const [night, setNight] = useState(false)

  const handleThemeSwitch = () => {
    setNight(!night)
    setTheme(theme === 'dark' ? 'ligth' : 'dark')
  }

  const Icon = useMemo(
    () => (night ? <BsLightbulb size={30} /> : <BsLightbulbOff size = { 30 } />),
    [night]
    /* () => (night ? <MdModeNight size={25} /> : <MdLightMode size={25} />),
    [night] */
  )
  return (
    <div className="">
      {/* <button
        type="button"
        aria-label="Color Mode"
        onClick={handleThemeSwitch}
        className="flex justify-center p-2 transition duration-150 ease-in-out border border-transparent rounded-md text-brown-600 bg-brown-100 lg:bg-white lg:dark:bg-brown-500 dark:text-brown-200 dark:bg-brown-500 hover:bg-brown-50 dark:hover:bg-brown-700 hover:text-brown-300 focus:outline-none focus:bg-brown-50 dark:focus:bg-brown-500 active:bg-brown-50"
      > */}
      <button
        type="button"
        aria-label="Color Mode"
        onClick={handleThemeSwitch}
        className="flex justify-center p-2 transition duration-150 ease-in-out border border-transparent rounded-md text-brown-600 hover:text-brown-400 focus:outline-none "
      >
        <span>{Icon}</span>
      </button>
    </div>
  );
};


Toogle.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func
}


export default Toogle;
