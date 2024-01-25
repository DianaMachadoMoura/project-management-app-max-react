import { useState } from 'react';

const NewProject = ({ setIsOpen, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleTitleChange = ({ target }) => {
    setTitle(target.value);
  };

  const handleDescriptionChange = ({ target }) => {
    setDescription(target.value);
  };

  const handleDateChange = ({ target }) => {
    setDate(target.value);
  };

  const onSaveClick = (e) => {
    e.preventDefault();

    if (title && description && date) {
      onSave({ id: Math.floor(Math.random() * 10), title, description, date });

      setIsOpen(false);
    }
  };

  return (
    <form className="mt-4 text-left">
      <div className="flex items-center justify-end gap-4 my-4">
        <button onClick={() => setIsOpen(false)} type="button">
          Cancel
        </button>
        <button
          className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          type="submit"
          onClick={(e) => onSaveClick(e)}
        >
          Save
        </button>
      </div>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Title
        </label>
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="text"
          onChange={(e) => handleTitleChange(e)}
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Description
        </label>
        <textarea
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          onChange={(e) => handleDescriptionChange(e)}
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Due Date
        </label>
        <input
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
          type="date"
          onChange={(e) => handleDateChange(e)}
        />
      </p>
    </form>
  );
};

export default NewProject;
