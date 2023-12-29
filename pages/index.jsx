import Link from "next/link";
import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import Button from "../components/reusable/Button";
import AppBanner from "../components/shared/AppBanner";
import projectService from "../services/ProjectService";

const Home = ({ projects }) => {
  return (
    <html lang="en">
      <div className="container mx-auto">
        <PagesMetaHead
          title="Design | Sirenuix | Product Designer"
          description={
            "Meet Sirenuix, Product Designer at Zoho based in India, committed to shaping engaging and human-centered experiences for a seamless digital voyage."
          }
          keywords={
            "UI/UX Design, India, Zoho,  Product Designer, Digital Experiences, Innovative Design, Interactive Design, User Journeys,User Experiences, Web and Mobile Design"
          }
        />
        <AppBanner />

        <ProjectsGrid projects={projects} />
        <div className="mt-10 sm:mt-15 flex justify-center">
          <Link href="/projects" aria-label="More Projects" passHref>
            <Button title="See All" />
          </Link>
        </div>
      </div>
    </html>
  );
};
export default Home;

export async function getStaticProps() {
  // Fetch data from your API
  const response = await projectService.getAllProjects();

  const projects = JSON.stringify(response);

  return {
    props: {
      projects,
    },
  };
}
