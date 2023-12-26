import PagesMetaHead from '../../components/PagesMetaHead';
import ProjectsGrid from '../../components/projects/ProjectsGrid';

function index() {
	return (
		<html lang="en">
		<div className="container mx-auto">
			<PagesMetaHead title="Projects" />

			<ProjectsGrid />
		</div>
		</html>
	);
}

export default index;
