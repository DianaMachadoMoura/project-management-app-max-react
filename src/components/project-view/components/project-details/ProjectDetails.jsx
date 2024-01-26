import { useState } from 'react';

const DATE_OPTIONS = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const ProjectHeader = ({ project, onDelete }) => {
  const { title, id, description, date } = project;
  const formattedDate = new Date(date);

  return (
    <header className="pb-4 mb-4 border-b-2 border-stone-300">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-stone-600 mb-2">{title}</h2>
        <button
          className="text-stone-800 hover:text-stone-950"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
      <p className="text-stone-400 mb-4">
        {formattedDate.toLocaleDateString('en-us', DATE_OPTIONS)}
      </p>
      <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
    </header>
  );
};

const Tasks = ({ project, onAddTask, onClearTask }) => {
  const [taskInput, setTaskInput] = useState('');

  const handleTaskInputChange = ({ target }) => {
    setTaskInput(target.value);
  };

  const handleAddTask = () => {
    if (!taskInput) {
      return;
    }

    onAddTask(taskInput);
    setTaskInput('');
  };

  const handleClearTask = (task) => {
    onClearTask(task);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          type="text"
          onChange={(e) => handleTaskInputChange(e)}
          value={taskInput}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleAddTask}
        >
          Add task
        </button>
      </div>
      {!!project.tasks?.length && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {project.tasks?.map((task, index) => {
            return (
              <li className="flex justify-between my-4" key={index}>
                {task}
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => handleClearTask(task)}
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const ProjectDetails = ({ project, onTaskChange, onDelete }) => {
  if (!project) return;

  const onAddTask = (newTask) => {
    const updatedProject = {
      ...project,
      tasks: [...(project.tasks ? [...project.tasks, newTask] : [newTask])],
    };

    onTaskChange(updatedProject);
  };

  const onClearTask = (taskToDelete) => {
    const updatedProject = {
      ...project,
      tasks: project.tasks.filter((task) => task !== taskToDelete),
    };

    onTaskChange(updatedProject);
  };

  return (
    <>
      <ProjectHeader project={project} onDelete={onDelete} />
      <Tasks
        project={project}
        onAddTask={onAddTask}
        onClearTask={onClearTask}
      />
    </>
  );
};

export default ProjectDetails;
