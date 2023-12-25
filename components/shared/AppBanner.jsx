import { motion } from "framer-motion";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import sirenuix from "../../public/images/sirenuix-surender.png";
import boxrightsvg from "../../public/images/banner/boxrightcolor.svg";
import boxleftsvg from "../../public/images/banner/boxleftcolor.svg";
import sirenuixdesigner from "../../public/images/banner/sirenuixdesigner.svg";
import bannersearch from "../../public/images/banner/baannersearch.svg";
import roundarrowdown from "../../public/images/banner/roundarrowdown.svg";
import Link from "next/link";
import Button from "../reusable/Button";
import BackgroundCarousel from "./BackgroundCarousel";
import Carousel from "./BackgroundCarousel";
import BounceBall from "./BounceBall";
import { Input } from "postcss";
import FormInput from "../reusable/FormInput";

function AppBanner() {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2 relative"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.1 }}
        className="mx-auto relative w-full md:w-[90vw] lg:w-[70vw] xl:w-[60vw] my-20"
      >
        <div className="hidden absolute top-5 right-5 md:block">
          <Image alt="Decorative box" src={boxrightsvg} />
        </div>

        <div className="mx-auto text-center md:-translate-y-16 space-y-5">
          <Image
            className="mx-auto w-142 h-142"
            alt="Product Designer - Sirenuix"
            src={sirenuixdesigner}
          />
          <div
            style={{
              background:
                "linear-gradient(-120deg, white 30%, rgba(0, 0, 0, 0) 100%)",
              WebkitBackgroundClip: "text", // For Safari
              color: "transparent",
            }}
            className="font-semibold font-poppins  text-transparent text-center capitalize text-4xl sm:text-5xl"
          >
            <h1>Product Designer</h1>
            <h2>Crafting Visual Solutions</h2>
          </div>
          <p className="font-neue text-base font-normal text-neutral-500">
            Passionate about making design reach its full potential
          </p>
          <div className="mx-auto relative w-1/2 md:w-1/3 h-14">
            <input
              className=" text-sm w-full border-2 h-14 rounded-3xl px-5 py-2 dark:border-secondary-dark  text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-primary-dark shadow-sm focus:outline-none focus:ring-0"
              type="text"
              id="search"
              placeholder="Search your favorite..."
              aria-label="search-portfolio"
              required
            />
            <Image
              className="absolute h-14 right-0 top-1"
              alt="Search Icon"
              src={bannersearch}
            />
          </div>
          <div className="mx-auto flex justify-center w-1/2 h-14 translate-y-6">
            <Image
              className="h-14"
              alt="show projects"
              src={roundarrowdown}
            />
          </div>
        </div>

        <div className="absolute hidden bottom-5 left-5 md:block">
          <Image alt="Decorative box" src={boxleftsvg} />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
