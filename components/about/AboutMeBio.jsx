import Image from "next/image";
import { useState } from "react";
import { aboutMeData } from "../../data/aboutMeData";
import { aboutMeInfo } from "../../data/aboutMeInfo";
import { SocialLink, socialLinks } from "../shared/SocialLink";
import Carousel from "../shared/BackgroundCarousel";
import sirenuix from "../../public/images/sirenuix-surender.png";
import rakeshimg from '../../public/images/rakeshbg.png'

function AboutMeBio() {
  const [aboutMe, setAboutMe] = useState(aboutMeData);
  const [aboutInfo, setAboutMeInfo] = useState(aboutMeInfo);

  const myImageArray = [sirenuix, rakeshimg];

  return (
    <div className="block sm:gap-10 mt-10 sm:mt-20">
      <h1
        className="text-5xl font-semibold capitalize font-poppins"
        style={{
          background:
            "linear-gradient(-120deg, white 90%, rgba(0, 0, 0, 0) 100%)",
          WebkitBackgroundClip: "text", // For Safari
          color: "transparent",
        }}
      >
        About Me
      </h1>
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row sm:gap-10 mt-5 sm:mt-10">
        <div className="font-general-regular w-full md:w-2/3 text-left">
          {aboutMe.map((bio) => (
            <p
              className="mb-4 text-ternary-dark dark:text-ternary-light text-lg"
              key={bio.id}
            >
              {bio.bio}
            </p>
          ))}
          <ul className="flex gap-4 md:gap-8">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.id}
                icon={link.icon}
                url={link.url}
                className="text-xs sm:text-sm md:text-sm"
              />
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-7 sm:mb-0 space-y-4">
          <Carousel imageArray={myImageArray} />
          <div className="flex text-xs space-x-4">
            <div className="flex flex-col">
              <p className="text-ternary-dark dark:text-gray-600 text-lg">
                Email
              </p>

              <p className="mb-4 text-ternary-dark dark:text-ternary-light">
                sirenuix041622@gmail.com
              </p>
            </div>

            <div className="flex flex-col">
              <p className="text-ternary-dark dark:text-gray-600 text-lg">
                Phone
              </p>

              <p className="mb-4 text-ternary-dark dark:text-ternary-light">
                +91 6382102514
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeBio;
