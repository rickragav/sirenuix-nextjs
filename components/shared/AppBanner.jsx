import { motion } from "framer-motion";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import sirenuix from "../../public/images/sirenuix-surender.png";
import Link from "next/link";
import Button from "../reusable/Button";
import BackgroundCarousel from "./BackgroundCarousel";
import Carousel from "./BackgroundCarousel";
import BounceBall from "./BounceBall";

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
        className="w-full space-y-5 flex flex-col my-10 relative z-10"
      >
        <div className="w-36 h-36 rounded-full overflow-hidden mx-auto">
          <Image
            src={sirenuix}
            className="w-full h-full object-cover cursor-pointer"
            alt="Sirenuix Surrender - Product Designer Logo"
            width={150}
            height={120}
          />
        </div>
        <div
          className="text-center text-5xl font-semibold capitalize font-poppins"
          style={{
            background:
              "linear-gradient(-120deg, white 30%, rgba(0, 0, 0, 0) 100%)",
            WebkitBackgroundClip: "text", // For Safari
            color: "transparent",
          }}
        >
          <h1>Product Designer</h1>
          <p>crafting visual solutions</p>
        </div>
        <p className="text-neutral-500 text-base text-center font-normal font-neue">
          Dedicated to unlocking the potential of design with a passion
        </p>
        <Link
          className="mx-auto"
          href="/projects"
          aria-label="More Projects"
          passHref
        >
          <Button title="Behance" />
        </Link>
        <div className="mx-auto hover:cursor-pointer">
          <FaAngleDown className="text-gray-400 w-5 h-5"></FaAngleDown>
          <FaAngleDown className="text-white w-5 h-5"></FaAngleDown>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;
