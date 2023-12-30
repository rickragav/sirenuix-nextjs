import Image from "next/image";
import arrowleftcircle from "../../public/images/arrowLeftCircle.png";
import arrowRight from "../../public/images/arrowRight.png";
import greenCheck from "../../public/images/greencheck.png";
import { motion } from "framer-motion";
import projectService from "../../services/ProjectService";
import dynamic from "next/dynamic";

const PrimaryButton = dynamic(() =>
  import("../../components/reusable/PrimaryButton")
);
const DownloadButton = dynamic(() =>
  import("../../components/reusable/DownloadButton")
);
const RelatedProjects = dynamic(() =>
  import("../../components/projects/RelatedProjects")
);
const PagesMetaHead = dynamic(() => import("../../components/PagesMetaHead"));

function ProjectSingle(props) {
  const decodeBase64BreifDescription = (base64String) => {
    try {
      const decodedString = atob(base64String);

      return decodedString;
    } catch (error) {
      console.error("Error decoding base64:", error.message);
      return ""; // Or you can return an empty string or any other default value
    }
  };
  return (
    <html lang="en">
      <div className="container mx-auto">
        <PagesMetaHead
          title={JSON.parse(props.project).seo.title}
          description={JSON.parse(props.project).seo.description}
          keywords={JSON.parse(props.project).seo.keywords}
          og_description={JSON.parse(props.project).seo.og_description}
          og_image={JSON.parse(props.project).seo.og_image}
          og_title={JSON.parse(props.project).seo.og_title}
          og_type={JSON.parse(props.project).seo.og_type}
          og_url={JSON.parse(props.project).seo.og_url}
          og_site_name={JSON.parse(props.project).seo.og_site_name}
        />

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        >
          {/* Header */}
          <div className="font-general w-full text-xl sm:text-2xl text-primary-dark dark:text-primary-light space-y-2">
            <div className="flex space-x-4 items-center  mt-14 sm:mt-20">
              <Image
                src={arrowleftcircle}
                alt="Arrow Left Circle"
                width={50} // specify the desired width
                height={50} // specify the desired height
              />
              <h1 className=" ">
                {JSON.parse(props.project).briefTitle} -{" "}
                {JSON.parse(props.project).designProduct}
              </h1>
            </div>
            <h3 className=" text-xs sm:text-sm dark:text-gray-400">
              Easy To Use Figma Components
            </h3>

            <div className="flex flex-col sm:flex-row sm:space-x-2">
              {/* First div, taking up the left half */}
              <div className="flex-1 py-2">
                <div className="flex items-center space-x-2">
                  <Image
                    src={JSON.parse(props.project).designToolImage}
                    className="cursor-pointer"
                    alt="Design Tool Image"
                    width={35}
                    height={35}
                  />
                  <p className="text-xs text-ternary-dark dark:text-ternary-light">
                    {JSON.parse(props.project).category}
                  </p>

                  <Image
                    src={arrowRight}
                    alt="Arrow Right Circle"
                    width={10} // specify the desired width
                    height={10} // specify the desired height
                  />
                  <p className="text-xs text-ternary-dark dark:text-ternary-light">
                    {JSON.parse(props.project).designProduct}
                  </p>
                </div>
              </div>

              {/* Second div, taking up the right half */}
              <div className="flex-1 py-2 space-y-3 flex flex-col sm:flex-row sm:space-x-2 sm:space-y-0 justify-end">
                <PrimaryButton title="Design Preview" titleClass="text-sm" />
                <DownloadButton
                  title="Download"
                  titleClass="text-sm"
                  price={JSON.parse(props.project).price}
                />
              </div>
            </div>
          </div>

          <div className="w-full space-y-5 mt-10 flex flex-col sm:flex-row sm:gap-5 sm:space-y-0">
            <div className="w-full sm:w-4/6">
              <Image
                src={JSON.parse(props.project).baseImage}
                className="border dark:border-secondary-dark rounded-2xl cursor-pointer shadow-lg sm:shadow-none w-full h-full object-cover"
                alt={JSON.parse(props.project).seo.title + "base image"}
                width={1000}
                priority
                height={10}
              />
            </div>
            <div className="w-full sm:w-2/6 flex flex-col space-y-5">
              <div className="dark:bg-secondary-dark py-4 px-4 w-full rounded-2xl space-y-4">
                <p className="dark:text-primary-light text-lg">
                  {
                    JSON.parse(props.project).projectInfo.projectObjectives
                      .title
                  }
                </p>
                <p className="dark:text-gray-400 text-sm">
                  {
                    JSON.parse(props.project).projectInfo.projectObjectives
                      .description
                  }
                </p>
              </div>
              <div className="dark:bg-secondary-dark py-4 px-4 w-full rounded-2xl space-y-4">
                <p className="dark:text-primary-light text-lg">
                  {
                    JSON.parse(props.project).projectInfo.projectHighlights
                      .title
                  }
                </p>
                <ul className="dark:text-gray-400 text-sm space-y-1">
                  {JSON.parse(
                    props.project
                  ).projectInfo.projectHighlights.descriptions.map(
                    (highlights, index) => {
                      return (
                        <li key={index} className="flex space-x-1">
                          <Image alt={highlights} src={greenCheck} width={16} height={10}></Image>
                          <span>{highlights}</span>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Gallery */}
        <div className=" my-14 grid grid-cols-1 sm:grid-cols-2 sm:gap-5 ">
          {JSON.parse(props.project).projectInfo.projectImages.map(
            (project, index) => {
              return (
                <div key={index} className="mb-10 sm:mb-0">
                  <Image
                    src={project}
                    className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
                    alt={
                      JSON.parse(props.project).seo.title +
                      "showcase Image" +
                      index
                    }
                    layout="responsive"
                    priority
                    width={100}
                    height={90}
                  />
                </div>
              );
            }
          )}
        </div>

        <div className=" text-white">
          {/* Assuming `props.project` is a stringified JSON */}
          {props.project && (
            <div
              dangerouslySetInnerHTML={{
                __html: decodeBase64BreifDescription(
                  JSON.parse(props.project).projectInfo.projectBriefDetails
                ),
              }}
            />
          )}
        </div>

        <div className="hidden text-blue-400 my-8 mx-4  space-x-2 py-4 px-4 w-full rounded-2xl space-y-4"></div>

        <RelatedProjects />
      </div>
    </html>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await projectService.getAllProjects();

  // Get the paths we want to pre-render based on posts
  const paths = res.map((projects) => ({
    params: { id: projects.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    // Fetch data from your service or API
    const response = await projectService.getProjectBySlug(params.id);

    return {
      props: {
        project: JSON.stringify(response),
      },
    };
  } catch (error) {
    console.error("Error fetching projects:", error);

    return {
      props: {
        project: null,
      },
    };
  }
}

export default ProjectSingle;
