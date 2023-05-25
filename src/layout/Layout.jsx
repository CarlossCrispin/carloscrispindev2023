
import { useEffect } from 'react'
import { useState } from 'react'
// import Toogle from '../Components/Toogle'
import Nav from '../Components/Nav'
import Inicio from '../views/Inicio'
import Yo from '../views/Yo'


function Layout() {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(preferer-color-scheme : dark )').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])
  return (
    <div className="" id='start'>
      <Nav theme={theme} setTheme={setTheme} />
      <div className="main">
        {/* <Toogle theme={theme} setTheme={setTheme} /> */}
        <Inicio/>
        <Yo/>
      </div>
    </div>
  )
}

export default Layout