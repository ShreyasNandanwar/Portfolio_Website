import React from 'react'
import { Moon, Sun } from 'lucide-react'

const DarkModeToggle = ({darkMode, setDarkMode}) => {

  return (
    <button 
    onClick={() => setDarkMode(!darkMode)}
    className='p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 mr-3' >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  )
}

export default DarkModeToggle
