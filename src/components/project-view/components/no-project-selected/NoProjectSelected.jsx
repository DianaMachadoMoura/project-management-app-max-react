import noProjectsImage from '../../../../assets/no-projects.png';
import Button from '../../../button/Button';

const NoProjectSelected = ({ setIsAddProjectOpen }) => {
  
  return (
    <>
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectsImage} />
      <h2 className="text-xl font-bold text-stone-700 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <Button onClick={() => setIsAddProjectOpen(true)}>
        Create new project
      </Button>
    </>
  );
};

export default NoProjectSelected;
