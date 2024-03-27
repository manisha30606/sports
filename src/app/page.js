// page.js
"use client"
import React, { useState } from 'react';
import Sports from "./Components/Sports";
import Collection from "./Components/Collection";
import DayNightToggle from "./Components/DayNightToggle";

const Page = () => {

  //FUNCTION OF DAY AND NIGHT TOGGLE MENU
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => {
    setIsDay(!isDay);
  };

  return (
    // ==========================DAY AND NIGHT =================================
    <div className={isDay ? 'bg-white text-black' : 'bg-[#292B32] text-white'}>
      <DayNightToggle isDay={isDay} toggleDayNight={toggleDayNight} />
      <Sports isDay={isDay} />
      <Collection isDay={isDay} />
    </div>
  );
}

export default Page;
