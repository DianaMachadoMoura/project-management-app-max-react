import { useState } from 'react';

import Sidebar from './components/sidebar/Sidebar';
import ProjectView from './components/project-view/ProjectView';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState();
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projects}
        setIsAddProjectOpen={setIsAddProjectOpen}
        setSelectedProjectId={setSelectedProjectId}
      />
      <ProjectView
        selectedProject={selectedProject}
        isAddProjectOpen={isAddProjectOpen}
        setIsAddProjectOpen={setIsAddProjectOpen}
        setProjects={setProjects}
      />
    </main>
  );
};

export default App;
