import React, { useRef } from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlyerRobot from "../../assets/roboloom/flyer.webp"
import { FaSchool, FaChalkboardTeacher, FaRobot, FaClipboardCheck } from "react-icons/fa";

const Works = () => {
  const bussinessSlider = useRef(null);

  const moveLeft = () => {
    if (bussinessSlider.current) {
      bussinessSlider.current.slickPrev();
    }
  };

  const moveRight = () => {
    if (bussinessSlider.current) {
      bussinessSlider.current.slickNext();
    }
  };

  const bussinessSliderSetting = {
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          dots: true,
        },
      },
      {
        breakpoint: 444,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const cardDetail = [
    {
      title: "Schools Collaborate",
      description: "Schools collaborate with us to introduce robotics courses.",
      icon: <FaSchool size={30} className="text-blue-600" />,
      logoBg: "bg-blue-200",
    },
    {
      title: "Expert Trainers",
      description: "Our expert trainers conduct sessions twice a week.",
      icon: <FaChalkboardTeacher size={30} className="text-green-600" />,
      logoBg: "bg-green-200",
    },
    {
      title: "Hands-on Training",
      description: "Students receive hands-on training with robotics kits.",
      icon: <FaRobot size={30} className="text-yellow-600" />,
      logoBg: "bg-yellow-200",
    },
    {
      title: "Assessments & Projects",
      description: "Regular assessments and projects to enhance learning.",
      icon: <FaClipboardCheck size={30} className="text-purple-600" />,
      logoBg: "bg-purple-200",
    },
  ];

  return (
    <div className="w-full relative sm:h-[650px] h-[500px] py-28 overflow-hidden md:mt-28 mt-14">
      <div className="absolute right-16 top-56 h-96 p-2 w-96 border-dashed border-[#000000] border-[1px] rounded-full"></div>
      <div className="max-w-[1293px] mr-3 w-full sm:h-[578px] h-[500px] bg-[#b9c8e8c7] rounded-tr-[137px] sm:rounded-tr-[400px] absolute top-0 z-10">
        <img src={FlyerRobot} alt="Flyer Robot" className="w-60 h-45 translate-x-10 translate-y-6 object-cover hidden sm:block" />
      </div>
      <div className="!z-30 absolute top-0 h-full w-full flex flex-col gap-24 py-24">
        <div className="flex flex-col sm:gap-16 md:gap-24 gap-12">
        <div className="mx-auto md:text-6xl text-5xl text-[#331B3B] font-hindVadodara -tracking-[0.01] leading-[106.3%]">
          <h1 className="mb-[-2] font-quicksand text-3xl font-bold  text-grey-900 text-center">
            How<span className="text-indigo-600"> It Works</span>
          </h1>
          <svg width="300" height="40" viewBox="0 0 220 30" xmlns="http://www.w3.org/2000/svg" className="mx-auto mt-0 translate-x-8 md:translate-x-8 sm:translate-x-8">
            <path 
              d="M10 18 Q 60 -2, 110 12 T 150 8" 
              stroke="#331B3B" 
              strokeWidth="3" 
              fill="transparent" 
              strokeLinecap="round"
            />
          </svg>
        </div>
          <div className="lg:pl-32 sm:pl-8 px-5 flex gap-12">
            <div className="md:flex gap-4 items-end hidden">
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180 cursor-pointer"
                onClick={moveLeft}
              >
                <path d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z" stroke="black" strokeWidth="2" />
                <path d="M15 10L23 17.3443L15 24" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={moveRight}
              >
                <path d="M1 17C1 25.8094 8.35978 33 17.5 33C26.6402 33 34 25.8094 34 17C34 8.19057 26.6402 1 17.5 1C8.35978 1 1 8.19057 1 17Z" stroke="black" strokeWidth="2" />
                <path d="M15 10L23 17.3443L15 24" stroke="black" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="dream-agency-bussiness flex justify-center">
              <Slider {...bussinessSliderSetting} ref={bussinessSlider}>
                {cardDetail.map((card, index) => (
                  <div key={index} className="w-[308px] p-6 bg-white shadow-3xl rounded-[10px] flex flex-col items-center text-center">
                    <div className={`w-[52px] h-12 flex justify-center items-center rounded-[10px] ${card?.logoBg}`}>{card.icon}</div>
                    <h3 className="text-lg font-quicksand font-semibold text-[#698be0] mt-3">{card.title}</h3>
                    <p className="text-robotoFlex text-sm mt-2">{card.description}</p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
