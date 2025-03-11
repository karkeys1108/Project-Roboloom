import React from 'react';
import {Link} from "react-scroll";
import Robot from '../../assets/roboloom/robot3.png';

const Footer = () => {
  const navigationList = ["Home", "About" ,"Why Us", "Programs"];

  return (
    <div className="flex flex-col">
      <div className="flex-grow">{/* Main content here */}</div>
      <footer className="w-full bg-gradient-to-b from-[#646d8c] via-[#1f2966] to-[#0c144a] py-10 text-[#EDE8F5]">
        <div className="px-8 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between gap-16 md:gap-0">
            <div className="flex flex-col gap-10 md:w-3/12">
              <div className="flex items-center gap-2 w-fit cursor-pointer">
                <img src={Robot} alt="logo" className="w-10 h-10" />
                <span className="text-xl font-semibold font-robotoFlex text-indigo-950">RoboLoom</span>
              </div>
              <div className="sm:max-w-xs">
                <span className="text-base  font-robotoFlex font-medium text-white sm:max-w-xs w-fit">
                    For partnerships, inquiries, or to bring Roboloom to your school ,  contact us
                </span>
              </div>
              <div className="flex gap-3">
                  <a href="#facebook">
                  <svg
                      className="cursor-pointer hover:fill-[#5a70ff] fill-[#637381]"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="white"
                      />
                      <path d="M19.439 14.6H18.1992H17.7564V14.1484V12.7484V12.2968H18.1992H19.1291C19.3726 12.2968 19.5719 12.1161 19.5719 11.8452V9.45161C19.5719 9.20323 19.3947 9 19.1291 9H17.5128C15.7638 9 14.5461 10.2645 14.5461 12.1387V14.1032V14.5548H14.1033H12.5978C12.2878 14.5548 12 14.8032 12 15.1645V16.7903C12 17.1065 12.2435 17.4 12.5978 17.4H14.059H14.5018V17.8516V22.3903C14.5018 22.7065 14.7454 23 15.0996 23H17.1807C17.3136 23 17.4243 22.9323 17.5128 22.8419C17.6014 22.7516 17.6678 22.5935 17.6678 22.4581V17.8742V17.4226H18.1328H19.1291C19.4169 17.4226 19.6383 17.2419 19.6826 16.971V16.9484V16.9258L19.9925 15.3677C20.0147 15.2097 19.9925 15.029 19.8597 14.8484C19.8154 14.7355 19.6161 14.6226 19.439 14.6Z" />
                    </svg>
                    </a>

                    <a href="#x">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                     className="cursor-pointer hover:fill-[#5a70ff] fill-[#637381]"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 17C1 8.16344 8.16344 1 17 1C25.8366 1 33 8.16344 33 17C33 25.8366 25.8366 33 17 33C8.16344 33 1 25.8366 1 17Z"
                        fill="white"
                        stroke="#E7E7E7"
                        strokeWidth="0.5"
                      />
                      <path d="M22.4419 13.7221L23.3 12.7828C23.5484 12.5284 23.6161 12.3327 23.6387 12.2348C22.9613 12.5871 22.329 12.7045 21.9226 12.7045H21.7645L21.6742 12.6262C21.1323 12.2153 20.4548 12 19.7323 12C18.1516 12 16.9097 13.135 16.9097 14.4462C16.9097 14.5245 16.9097 14.6419 16.9323 14.7202L17 15.1115L16.5258 15.092C13.6355 15.0137 11.2645 12.8611 10.8806 12.4892C10.2484 13.4677 10.6097 14.407 10.9935 14.9941L11.7613 16.09L10.5419 15.5029C10.5645 16.3249 10.9258 16.9706 11.6258 17.4403L12.2355 17.8317L11.6258 18.047C12.0097 19.045 12.8677 19.456 13.5 19.6125L14.3355 19.8082L13.5452 20.2779C12.2806 21.0607 10.7 21.002 10 20.9432C11.4226 21.8043 13.1161 22 14.2903 22C15.171 22 15.8258 21.9217 15.9839 21.863C22.3065 20.5714 22.6 15.6791 22.6 14.7006V14.5636L22.7355 14.4853C23.5032 13.8591 23.8194 13.5264 24 13.3307C23.9323 13.3503 23.8419 13.3894 23.7516 13.409L22.4419 13.7221Z" />
                    </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/roboloom/ ">
                      <svg
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer hover:fill-[#5a70ff] fill-[#637381] transition-all duration-300"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1 17C1 8.16344 8.16344 1 17 1C25.8366 1 33 8.16344 33 17C33 25.8366 25.8366 33 17 33C8.16344 33 1 25.8366 1 17Z"
                          fill="white"
                          stroke="#E7E7E7"
                          strokeWidth="0.5"
                        />
                        <path
                          d="M11.8 22.4H8.4V12.4H11.8V22.4ZM10.1 10.9C9.1 10.9 8.4 10.2 8.4 9.3C8.4 8.4 9.1 7.7 10.1 7.7C11.1 7.7 11.8 8.4 11.8 9.3C11.8 10.2 11.1 10.9 10.1 10.9ZM23.6 22.4H20.2V17.2C20.2 16.1 19.7 15.6 18.9 15.6C17.9 15.6 17.4 16.3 17.4 17.5V22.4H14V12.4H17.4V13.6C17.8 12.9 18.6 12.2 19.9 12.2C22 12.2 23.6 13.7 23.6 16.5V22.4Z"
                        />
                      </svg>
                    </a>



                    
                    <a href=" https://www.instagram.com/roboloom?igsh=MThlam5wdm5rb2R5ag==">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      className="cursor-pointer hover:fill-[#5a70ff] fill-[#637381]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.8862 32.7723C25.6598 32.7723 32.7723 25.6598 32.7723 16.8862C32.7723 8.11248 25.6598 1 16.8862 1C8.11248 1 1 8.11248 1 16.8862C1 25.6598 8.11248 32.7723 16.8862 32.7723Z"
                        fill="white"
                        stroke="#E7E7E7"
                        strokeWidth="0.5"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.5 9C12.3065 9 11.1619 9.47411 10.318 10.318C9.47411 11.1619 9 12.3065 9 13.5V19.5C9 20.6935 9.47411 21.8381 10.318 22.682C11.1619 23.5259 12.3065 24 13.5 24H19.5C20.6935 24 21.8381 23.5259 22.682 22.682C23.5259 21.8381 24 20.6935 24 19.5V13.5C24 12.3065 23.5259 11.1619 22.682 10.318C21.8381 9.47411 20.6935 9 19.5 9H13.5ZM13 16.5C13 15.5717 13.3687 14.6815 14.0251 14.0251C14.6815 13.3687 15.5717 13 16.5 13C17.4283 13 18.3185 13.3687 18.9749 14.0251C19.6313 14.6815 20 15.5717 20 16.5C20 17.4283 19.6313 18.3185 18.9749 18.9749C18.3185 19.6313 17.4283 20 16.5 20C15.5717 20 14.6815 19.6313 14.0251 18.9749C13.3687 18.3185 13 17.4283 13 16.5ZM20 13H21V12H20V13Z"
                      />
                    </svg>
                    </a>
            </div>
            </div>
            <div className="flex flex-col gap-5 md:w-3/12 ">
              <h3 className="text-lg font-semibold font-quicksand  text-[#0b102c]">Contact Us</h3>
              <p className="text-sm font-light font-robotoFlex">
              <span className="font-quicksand font-semibold">Email :</span> roboloomofficial@gmail.com
              </p>
              <p className="text-sm font-robotoFlex font-light">
              <span className="font-quicksand font-semibold">Phone :</span> +91 75500 56266
              </p>
              <p className="text-sm font-robotoFlex font-light">
              <span className="font-quicksand font-semibold">Address :</span> Coimbatore , Tamil Nadu
              </p>
            </div>

            <div className="flex flex-col gap-5 md:w-3/12">
  <h3 className="text-lg font-semibold font-quicksand text-[#0b102c]">Explore</h3>
  <ul className="flex flex-col gap-2">
    {navigationList.map((item, index) => (
      <li key={index}>
        <Link
          to={item
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/gi, '') // Remove special characters
            .replace(/\s+/g, "-") // Replace spaces with hyphens
          }
          smooth={true}
          duration={500}
          className="cursor-pointer hover:bg-gradient-to-r hover:from-[#8ca3f7] hover:to-[#5a70ff] hover:bg-clip-text hover:text-transparent font-robotoFlex"
        >
          {item}
        </Link>
      </li>
    ))}
  </ul>
</div>


           
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;