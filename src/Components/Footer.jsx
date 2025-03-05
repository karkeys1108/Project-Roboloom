import React from 'react';
import Button from './Button'; // Assuming Button is a separate component

const Footer = () => {
  // Hardcoded data for social icons
  const FooterSocialData = [
    { icon_path: '/assets/edtech/footer/facebook.svg', name: 'Facebook' },
    { icon_path: '/assets/edtech/footer/twitter.svg', name: 'Twitter' },
    { icon_path: '/assets/edtech/footer/instagram.svg', name: 'Instagram' },
    { icon_path: '/assets/edtech/footer/linkedin.svg', name: 'LinkedIn' },
  ];

  // Hardcoded data for navigation links
  const NavLinks = ['Home', 'About Us', 'Courses', 'Blog', 'Contact'];

  // Hardcoded data for categories
  const FooterCategoryData = [
    'Robotics',
    'Programming',
    'AI & ML',
    'Electronics',
    'STEM',
  ];

  return (
    <div>
      <div className="max-w-[1320px] mx-4 xl:mx-auto my-[50px] md:my-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-14">
          {/* Contact Us Section */}
          <div className="flex gap-4 flex-col">
            <div>
              <img
                src={'/assets/edtech/footer/eDex.svg'}
                alt="eDex logo"
                width={106}
                height={40}
              />
            </div>
            <p className="text-2xl font-semibold text-black">Contact us</p>
            <div className="text-primaryGray">
              <p>Call : +123 400 123</p>
              <p>
                Praesent nulla massa, hendrerit <br /> vestibulum gravida in,
                feugiat auctor felis.
              </p>
            </div>
            <p className="cursor-pointer">Email: example@mail.com</p>
            <div className="flex gap-4 flex-wrap md:flex-nowrap">
              {FooterSocialData.map((item, index) => (
                <img
                  key={index}
                  src={item.icon_path}
                  alt={`${item.name} icon`}
                  width={48}
                  height={48}
                  className="cursor-pointer rounded-md hover:shadow-card"
                />
              ))}
            </div>
          </div>

          {/* Explore Section */}
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-semibold">Explore</p>
            </div>
            <div className="space-y-4 text-primaryGray flex flex-col">
              {NavLinks.map((item, index) => (
                <div key={index}>
                  <p className="hover:text-primary hover:underline cursor-pointer inline-block">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Category Section */}
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-semibold">Category</p>
            </div>
            <div className="space-y-4 text-primaryGray">
              {FooterCategoryData.map((item, index) => (
                <div key={index}>
                  <p className="hover:text-primary hover:underline cursor-pointer inline-block">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-semibold">Subscribe</p>
            </div>
            <div className="text-primaryGray">
              <p>
                Lorem Ipsum has been them an
                <br /> printer took a galley make book.
              </p>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email here"
                className="bg-[#E7E9EB80] p-4 xl:w-full rounded-lg focus:ring-2 focus:ring-primary outline-none"
                required
              />
            </div>
            <div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;