import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";
import HireMeModal from "../HireMeModal";
import logoLight from "../../public/images/logo-light.svg";
import logoDark from "../../public/images/darkLogo.png";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { useRouter } from "next/router";
import { FaStore } from "react-icons/fa";

function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path;
  };

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto capitalize"
    >
      {/* Header */}
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>
            <Link href="/">
              <Image
                src={logoDark}
                className="w-28 cursor-pointer"
                alt="sirenuix Logo"
                priority
              />
            </Link>
          </div>

          {/* Theme switcher small screen */}
          <div
            onClick={() => setTheme("dark")}
            aria-label="Theme Switcher"
            className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
          >
            <Link
              href="/store"
              className={`block text-left text-sm font-medium text-secondary-light dark:hover:text-secondary-light mx-4 py-2`}
            >
              store
            </Link>
          </div>

          {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
            <NavItem href="/" label="Home" isActive={isActive("/")} />
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <NavItem
              href="/store"
              label="Store"
              isActive={isActive("/store")}
            />
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <NavItem
              href="/about"
              label="About"
              isActive={isActive("/about")}
            />
          </div>
          <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <NavItem
              href="/contact"
              label="Contact"
              isActive={isActive("/contact")}
            />
          </div>
        </div>

        {/* Header links large screen */}
        <div className=" -translate-x-5 rounded-3xl border hidden border-black border-opacity-10 font-general-medium sm:flex p-5 sm:p-0 justify-center items-center shadow-lg dark:bg-secondary-dark">
          <NavItem href="/" label="Portfolio" isActive={isActive("/")} />

          <NavItem href="/about" label="About" isActive={isActive("/about")} />
          <NavItem
            href="/contact"
            label="Contact"
            isActive={isActive("/contact")}
          />
        </div>

        {/* Header right section buttons */}
        <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
          {/* <div className="hidden md:flex">
            <GoogleAuthButton />
          </div> */}

          {/* Theme switcher large screen */}
          <div
            aria-label="Theme Switcher"
            className={`text-sm dark:bg-secondary-dark border border-white border-opacity-5 font-general-medium px-5 py-2 space-x-2 items-center rounded-full flex ${
              isActive("/store")
                ? "text-secondary-dark dark:text-secondary-light"
                : `dark:text-gray-400`
            } hover:text-secondary-dark dark:hover:text-secondary-light`}
          >
            <FaStore />
            <Link href="/store">Store</Link>
          </div>
        </div>
      </div>
      <div>
        {showModal ? (
          <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
        ) : null}
        {showModal ? showHireMeModal : null}
      </div>
    </motion.nav>
  );
}

const NavItem = ({ href, label, isActive }) => {
  return (
    <Link
      href={href}
      className={`block text-left text-sm font-medium ${
        isActive
          ? "text-secondary-dark dark:text-secondary-light"
          : `${label === "Store" ? "dark:text-gray-400" : "dark:text-gray-600"}`
      } hover:text-secondary-dark dark:hover:text-secondary-light mx-4 py-2`}
    >
      {label}
    </Link>
  );
};

export default AppHeader;
