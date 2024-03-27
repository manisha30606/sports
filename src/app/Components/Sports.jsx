"use client"
import React, { useRef , useEffect} from 'react';
import Image from 'next/image';

//IMPORT IMAGES
import Img1 from "../Image/Img1.png";
import Img2 from "../Image/Img2.jpeg";
import Img3 from "../Image/Img3.png";
import poster from "../Image/poster.png";

//IMPORT SWIPER
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import { Navigation, Pagination } from 'swiper/modules';

//IMPORT ICONS
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Sports = ({isDay}) => {
  //STORE THE VALUE OF SPORTSDATA
  const sportsData = [
    { id: 1, imgSrc: Img2, teamName: 'Sacramento River Cats', totalEvents: 48, sportType: 'Baseball' },
    { id: 2, imgSrc: Img1, teamName: 'Las Vegas Aviators', totalEvents: 28, sportType: 'Baseball' },
    { id: 3, imgSrc: Img3, teamName: 'New Jersey Devils', totalEvents: 15, sportType: 'Ice Hockey' },
    { id: 4, imgSrc: Img1, teamName: 'Las Vegas Aviators', totalEvents: 28, sportType: 'Baseball' }
  ];

  //FUNCTIONING OF LEFT AND RIGHT ARROW ICONS
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <>
    {/* ====================================SPORT SECTION===================================== */}
    <div className='items-center mx-[4%] my-2'>
    <div className={`sport-section ${isDay ? 'bg-white text-black' : 'bg-[#292B32] text-white'}`}>
      <div className="sport-info flex flex-col m-2">
        <div className=" ml-8 my-2 sport-head text-2xl font-bold">
          <h1 className="border-b-2 border-blue-500 pb-2 max-w-[6%]">Sports</h1>
        </div>
        <div className='sport-boxes my-4 mx-2 lg:mx-6 flex sm:flex-row flex-col'>
          <div className='flex flex-row lg:max-w-[80%] md:max-w-[75%] sm:max-w-[70%] max-w-[100%] max-h-[100%] sm:mr-4 mr-0'>
         
         {/* =============================LEFT ARROW====================================== */}
          <div className= "swiper_button_prev mx-1 my-auto border-2 border-[#2C9CF0] p-1 text-sm text-[#2C9CF0] xl:hidden block" onClick={handlePrev}>
                    <IoIosArrowBack />
                </div>

                {/* ===============================SWIPER START=================================== */}
          <Swiper
            breakpoints={{
                0:{
                  slidesPerView: 1,
                },
              660: {
                slidesPerView: 2,
              },
              937: {
                slidesPerView: 3,
              },
              1271: {
                slidesPerView: 4,
              },
            }}
            ref={swiperRef}
            spaceBetween={15}
            slidesPerView={1}
            navigation={false}
            pagination={{ type: 'fraction' }}
            className="w-80%"
          >
            {/* ==============================SWIPER SLIDE====================================== */}
            {sportsData.map((sport, index) => (
  <SwiperSlide key={`${sport.id}_${index}`}>
    <div className={`sport-box shadow-md pb-2 max-h-full w-full ${isDay ? 'bg-white text-black border-2 border-slate-200' : 'bg-[#3B3E47] text-white'}`}>
      <div className="sport-img w-[100%] h-60%]">
        <Image src={sport.imgSrc} className="px-2 py-2 object-contain h-[100%] w-[100%]" alt=''/>
      </div>
      <h1 className="text-sm sm:text-xs lg:text-base pl:2 sm:pl-4 font-semibold pt-2">{sport.teamName}</h1>
      <div className={`mx-2 my-2 px-1 md:px-2 py-1 rounded-md ${isDay ? 'bg-[#DFDFDF] text-black' : 'bg-[#292B32] text-white'}`}>
        <h5 className={`text-xs ${isDay ? 'text-slate-600' : 'text-slate-200'}`}>Total Events <span className="xl:pl-14 pl-4">Sport</span></h5>
        <p className="lg:text-sm text-xs">{sport.totalEvents} events <span className="xl:pl-14 pl-4">{sport.sportType}</span></p>
      </div>
    </div>
  </SwiperSlide>
            ))}
          </Swiper>

          {/* ==================================SWIPER ENDS ================================= */}

          {/* =========================================RIGHT ARROW========================== */}
          <div className="swiper_button_next mx-1 my-auto border-2 border-[#2C9CF0] p-1 text-sm text-[#2C9CF0] xl:hidden block" onClick={handleNext}>
                    <IoIosArrowForward />
                </div>
          </div>

          {/* =============================ADVERTISEMENT BOX =================================== */}
          <div className='lg:max-w-[20%] md:max-w-[25%] sm:max-w-[30%] max-h-[100%] max-w-[100%] sm:m-0 m-4 '>
          <div className={`sport-box h-full shadow-md py-2 ${isDay ? 'bg-white text-black border-2 border-slate-200' : 'bg-[#3B3E47] text-white'}`}>
            <div className='border border-2 border-green-800 mx-2 h-full'>
            <div className="sport-img">
              {/* <h1 className="bg-[#000] text-[#fff] absolute py-1 px-4 right-[6.8%]">Ad</h1> */}
             
              <Image src={poster} className="h-60% w-[100%]" alt='' />
            </div>
            <h1 className="text-sm md:text-lg px-4 font-semibold pt-2 ">Advertisement Title</h1>
            <p className={`text-xs md:text-sm py-2 px-4 ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum ullam officia nisi dignissimos qui suscipit atque, veniam velit voluptatem culpa. Lorem.</p>
          </div>
          </div>
          </div>
        </div>


    {/* =====================================BUTTON ====================================== */}
        <div className="button text-center mt-2">
          <button className='bg-[#2C9CF0] text-[#fff] px-6 py-2 text-lg rounded'>See More</button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Sports;
