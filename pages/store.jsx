import Link from "next/link";
import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import Button from "../components/reusable/Button";
import AppBanner from "../components/shared/AppBanner";

export default function Store() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="Home" />
      <AppBanner />
      <ProjectsGrid />
      <div className="mt-10 sm:mt-15 flex justify-center">
        <Link href="/projects" aria-label="More Projects" passHref>
          <Button title="See All" />
        </Link>
      </div>
    </div>
  );
}
