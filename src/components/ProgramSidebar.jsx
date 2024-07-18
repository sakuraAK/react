import Button from './Button.jsx';

export default function ProgramSidebar({onAddNewProgram, programs, onSelectProgram, selectedProgramId}) {
  console.log(selectedProgramId);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Programs
      </h2>
      <div>
        <Button onClick={onAddNewProgram}>+ Add Program</Button>
      </div>
      <ul className="mt-8">
        {programs.map((program) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (program.id === selectedProgramId) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-stone-400'
          }

          return (
            <li key={program.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProgram(program.id)}
              >
                {program.name}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
