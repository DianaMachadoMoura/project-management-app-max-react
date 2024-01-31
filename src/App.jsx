import { useState } from 'react';

import Sidebar from './components/sidebar/Sidebar';
import ProjectView from './components/project-view/ProjectView';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  const handleAddProject = (project) => {
    setProjects((prev) => [...prev, project]);
  };

  const handleDeleteProject = (projectId) => {
    setProjects((prev) => [
      ...prev.filter((project) => project.id !== projectId),
    ]);
  };

  const handleChangeProject = (project) => {
    setProjects((prev) => {
      return prev.map((proj) => {
        if (proj.id === project.id) {
          return project;
        }
        return proj;
      });
    });
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projects}
        selectedProjectId={selectedProjectId}
        setIsAddProjectOpen={setIsAddProjectOpen}
        setSelectedProjectId={setSelectedProjectId}
      />
      <ProjectView
        selectedProject={selectedProject}
        isAddProjectOpen={isAddProjectOpen}
        setIsAddProjectOpen={setIsAddProjectOpen}
        setProjects={setProjects}
        onAddProject={handleAddProject}
        onChangeProject={handleChangeProject}
        onDeleteProject={handleDeleteProject}
      />
    </main>
  );
};

export default App;
