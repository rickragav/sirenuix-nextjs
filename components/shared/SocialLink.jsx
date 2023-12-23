import React from "react";
import { FiGithub, FiTwitter, FiLinkedin, FiGlobe, FiYoutube } from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: "https://www.stoman.me/",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/realstoman",
  },
  {
    id: 3,
    icon: <FiTwitter />,
    url: "https://twitter.com/realstoman",
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
