import Link from "next/link";
import PagesMetaHead from "../components/PagesMetaHead";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import Button from "../components/reusable/Button";
import AppBanner from "../components/shared/AppBanner";
import Carousel from "../components/shared/BackgroundCarousel";

export default function Home() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead
        title="Sirenuix | UI/UX Designer - Crafting Visual Solutions for Digital Experiences"
        description={
          "Explore the design world of sirenuix, a UI/UX and Product Designer crafting visual solutions for innovative digital experiences. Dive into a portfolio where creativity meets functionality, showcasing captivating interfaces and seamless user journeys."
        }
        keywords={
          "UI/UX Design, Product Design, Digital Experiences, Innovative Design, Interactive Design, User Journeys,User Experiences, Web and Mobile Design"
        }
      />
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
