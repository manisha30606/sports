"use client"
import React, { useRef ,useEffect} from 'react';
import Image from 'next/image';
import Img1 from "../Image/p1.jpeg";//IMPORT IMAGE
import Img2 from "../Image/p2.jpeg";//IMPORT IMAGE
//IMPORT SWIPER 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

//IMPORT ARROWS
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

//COLLECTION SECTION
const Collection = ({isDay}) => {
    //STORE THE VALUE OF COLLECTION DATA
    const CollectionData = [
        { id: 1, imgSrc: Img2, Name: 'Las Vegas Aviators', data: "Las Vegas Ballpark, Las vegas Nevada", btnName: 'Take Flight Collection' },
        { id: 2, imgSrc: Img1, Name: 'Sacramento River Cats', data: "Sutter health parks ,Sacramanto,california", btnName: 'Orange Collection' },
        { id: 3, imgSrc: Img2, Name: 'Sacramento River Cats', data: "Las Vegas Ballpark, Las vegas Nevada", btnName: 'Take Flight Collection' },
        { id: 4, imgSrc: Img1, Name: 'Sacramento River Cats', data: "Sutter health parks ,Sacramanto,california", btnName: 'Orange Collection' },
      ];
    

      //FUNCTIONING OF ARROW 
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

    {/* ================================COLLECTION SECTION========================= */}
    <div className='items-center mx-[2%] sm:mx-[4%] mt-[2%]  px-2 sm:px-4 py-4 '>
    <div className={`collection-section h-full py-10 px-8 ${isDay ? 'bg-white text-black' : 'bg-gradient-to-b from-gray-900 to-purple-900 text-white'}`}>
        <div className="head my-8 text-center lg:mx-[20%] mx-[10%]">
            <h1 className='py-2 text-2xl md:text-4xl font-bold'>Collection Spotlight</h1>
            <p className={`lg:text-lg text-sm mt-4 ${isDay ? 'text-slate-800' : 'text-slate-400'}`}>Discover extraordinary moments with our spotlight collection metatickets-exclusive access to premium events events for an unforgettable experience . Grab yours today!</p>
        </div>
        <div className="collection-data flex flex-row max-w-[100%] items-center justify-center py-4">
            {/* ==========================LEFT ARROW================================ */}
    <div className="max-w-[10%] swiper_button_prev my-auto border-2 border-[#2C9CF0] px-1 py-4 text-lg text-[#2C9CF0]" onClick={handlePrev}>
        <IoIosArrowBack />
    </div>
    <div className="collection-swiper flex flex-row max-w-[80%] sm:px-14 px-4">
        {/* ====================SWIPER============================== */}
        <Swiper
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                660: {
                    slidesPerView: 2,
                },
                937: {
                    slidesPerView: 2,
                },
                1271: {
                    slidesPerView: 3,
                },
            }}
            ref={swiperRef}
            spaceBetween={20}
            slidesPerView={1}
            navigation={false}
            pagination={{ type: 'fraction' }}
            className=""
        >
            {/* ============================SWIPER SLIDE============================ */}
            {CollectionData.map(Collection => (
                <SwiperSlide key={Collection.id}>
                    <div className={`collection-box shadow-md w-20% max-h-[100%] pb-4 ${isDay ? 'bg-white text-black border-2 border-slate-200' : 'bg-gray-700 text-white'}`}>
                        <div className="collection-img w-[100%] h-[100%] ">
                            <Image src={Collection.imgSrc} className="w-[100%] h-[95%] p-2" alt=''/>
                        </div>
                       
                        <div className="collection-data text-center border-dashed border-t-2 border-slate-400 mx-4 my-2">
                            <h1 className=' text-sm lg:text-lg font-semibold'>{Collection.Name}</h1>
                            <p className=' text-xs md:text-sm pt-4'>OCT 15 | SUN | 4:30</p>
                            <p className={`text-xs py-2 ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>{Collection.data}</p>
                            <button className='text-xs px-2 sm:px-6 py-2 bg-[#000] text-[#fff]'>{Collection.btnName}</button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
         {/* =================================RIGHT ARROW=================================== */}
            <div className="max-w-[10%] swiper_button_next my-auto border-2 border-[#2C9CF0] px-1 py-4 text-lg text-[#2C9CF0]" onClick={handleNext}>
              <IoIosArrowForward />
            </div>
         </div>



     </div>
     </div>
    </>
  )
}

export default Collection;