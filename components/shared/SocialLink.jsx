import React from "react";
import { FiGithub, FiTwitter, FiLinkedin, FiGlobe, FiYoutube, FiInstagram } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";

const socialLinks = [
 
  {
    id: 2,
    icon: <FiInstagram />,
    url: "https://www.instagram.com/siren_uix",
  },
  {
    id: 3,
    icon: <FaBehance />,
    url: "https://www.behance.net/surendarv",
  },
  {
    id: 1,
    icon: <FiGlobe />,
    url: "https://sirenuix.com",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/realstoman",
  },
  {
    id: 5,
    icon: <FiYoutube />,
    url: "https://www.youtube.com/c/realstoman",
  },
];

const SocialLink = ({ icon, url, className }) => (
  <a
    href={url}
    target="__blank"
    className="border text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:border-secondary-dark dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
  >
    <i className={className}>{icon}</i>
  </a>
);

export { SocialLink, socialLinks };
