import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import figmafw from "../../public/images/framework/figma.png";
import arrowRight from "../../public/images/arrow-right.svg";
import { FaCaretRight } from "react-icons/fa";

const imageStyle = { maxWidth: "100%", height: "auto" };

const ProjectSingle = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link
        href="/projects/[id]"
        as={"/projects/" + props.slug}
        aria-label="Single Project"
        passHref
      >
        <div className="border rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark dark:border-secondary-dark">
          <div>
            <Image
              src={props.baseImage}
              className="rounded-t-xl border-none"
              alt="Single Project"
              layout="responsive"
              width={200}
              height={200}
            />
          </div>
          <div className="text-center px-4 py-6">
            <div className="flex justify-between">
              <p className="font-general-medium text-lg text-ternary-dark dark:text-ternary-light mb-2">
                {props.title}
              </p>
            </div>
            <div className="flex justify-between capitalize">
              <div className="flex items-center justify-center space-x-2">
                <Image
                  src={props.baseImage}
                  className="cursor-pointer"
                  alt="designTool Image new "
                  width={50}
                  height={50}
                />
                <p className="text-xs text-ternary-dark dark:text-ternary-light">
                  {props.category}
                </p>
                <Image
                  src={arrowRight}
                  className="cursor-pointer"
                  alt="Dark Logo"
                  width={10}
                  height={10}
                />
                <p className="text-xs text-ternary-dark dark:text-ternary-light">
                  {props.designProduct}
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
