import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projectsData";
import ProjectsFilter from "./ProjectsFilter";

const ProjectsGrid = ({ projects }) => {
  const [searchProject, setSearchProject] = useState();
  const [selectProject, setSelectProject] = useState();

  // @todo - To be fixed
  // const searchProjectsByTitle = projectsData.filter((item) => {
  // 	const result = item.title
  // 		.toLowerCase()
  // 		.includes(searchProject.toLowerCase())
  // 		? item
  // 		: searchProject == ''
  // 		? item
  // 		: '';
  // 	return result;
  // });

  const selectProjectsByCategory = projectsData.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  return (
    <section>
      <div>
        <div
          className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
								border dark:border-secondary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light  w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="
                                ont-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
        {selectProject
          ? selectProjectsByCategory.map((project, index) => {
              return <ProjectSingle key={index} {...project} />;
            })
          : projectsData.map((project, index) => (
              <ProjectSingle key={index} {...project} />
            ))}
      </div> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-5">
        {/* {JSON.parse(projects).map((project, index) => (
          <ProjectSingle key={index} {...project} />
        ))} */}
        {projects ? (
          JSON.parse(projects).map((project, index) => (
            <ProjectSingle key={index} {...project} />
          ))
        ) : (
          <>
            <p>{projects}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
