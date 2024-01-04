import NoProjectSelected from './components/no-project-selected/NoProjectSelected';

const ProjectDetails = ({ selectedProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      {!selectedProject && <NoProjectSelected />}
    </div>
  );
};

export default ProjectDetails;
