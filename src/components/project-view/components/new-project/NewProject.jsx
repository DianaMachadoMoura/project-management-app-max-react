import { useRef, forwardRef } from 'react';

const Input = forwardRef(({ label, textarea, ...remainingProps }, ref) => {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea className={classes} ref={ref} {...remainingProps} />
      ) : (
        <input className={classes} ref={ref} {...remainingProps} />
      )}
    </p>
  );
});

const NewProject = ({ setIsOpen, onSave }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const onSaveClick = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const date = dateRef.current.value;

    if (title && description && date) {
      onSave({ id: Math.floor(Math.random() * 10), title, description, date });

      setIsOpen(false);
    }
  };

  return (
    <form className="mt-4 text-left">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button onClick={() => setIsOpen(false)} type="button">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            type="submit"
            onClick={(e) => onSaveClick(e)}
          >
            Save
          </button>
        </li>
      </menu>
      <Input ref={titleRef} label="Title" type="text" />
      <Input ref={descriptionRef} label="Description" textarea />
      <Input ref={dateRef} label="Due Date" type="date" />
    </form>
  );
};

export default NewProject;
