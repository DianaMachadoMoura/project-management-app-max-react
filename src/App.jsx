import Sidebar from './components/sidebar/Sidebar';
import ProjectDetails from './components/projects-details/ProjectDetails';

const App = () => {
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar />
      <ProjectDetails />
    </main>
  );
};

export default App;
