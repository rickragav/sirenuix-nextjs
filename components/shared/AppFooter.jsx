import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";
import AppFooterCopyright from "./AppFooterCopyright";
import { SocialLink, socialLinks } from "./SocialLink";

function AppFooter() {
  return (
    <div className="container mx-auto">
      <div className="pt-10 sm:pt-10 pb-8 mt-10 border-t-2 border-primary-light dark:border-secondary-dark">
      
        {/* <div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
          <p className="text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5">
            Follow me
          </p>
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className=" border text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:border-secondary-dark dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>

          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <SocialLink key={link.id} icon={link.icon} url={link.url} className="text-xl sm:text-2xl md:text-3xl" />
            ))}
          </ul>
        </div> */}

        <AppFooterCopyright />
      </div>
    </div>
  );
}

export default AppFooter;
