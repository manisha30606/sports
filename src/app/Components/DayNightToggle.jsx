
"use client"
import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const DayNightToggle = ({ isDay, toggleDayNight }) => {
  return (
    <>
    <div className='flex flex-row '>
    <button
      onClick={toggleDayNight}
      className="flex items-center flex-row justify-center w-12 h-12 mx-6 my-2 rounded-full bg-gray-400 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-600 focus:outline-none"
    >
      {isDay ? <FiSun className="text-yellow-500 dark:text-yellow-400" /> : <FiMoon className="text-gray-900 dark:text-gray-200" />}

    </button>
    <p className='my-4 mx-2'>⬅️Dark and Light Toggle Button</p>
    </div>
    </>
  );
};

export default DayNightToggle;
