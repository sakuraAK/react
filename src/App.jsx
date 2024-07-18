import NewProgram from "./components/NewProgram";
import NoProgramSelected from "./components/NoProgramSelected";
import ProgramSidebar from "./components/ProgramSidebar";
import { fetchPrograms } from "./http";
import { useState } from "react";

function App() {
  
  const [programsState, updateProgramState] = useState(
    {
      selectedProgramId: undefined,
      programs: [],
    }
  );

  function startAddNewProgramHandler() {
      updateProgramState((prevState) => ({
          ...prevState,
          selectedProgramId: null,
      }));
  }

  function addNewProgramHandler(newProgram) {
      updateProgramState((prevState) => ({
        ...prevState,
        programs: [...prevState.programs, newProgram],
        selectedProgramId: undefined,
      }));
  }

  function selectProgramHandler(selectedId) {
    updateProgramState((prevState) => ({
      ...prevState,
      selectedProgramId: selectedId,
    }));

  }

  let content = <NoProgramSelected onAddNewProgram={startAddNewProgramHandler}/>;

  if (programsState.selectedProgramId === null) {
    content = <NewProgram onAdd={addNewProgramHandler}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProgramSidebar 
        onAddNewProgram={startAddNewProgramHandler} 
        onSelectProgram={selectProgramHandler} 
        programs={programsState.programs}
        selectedProgramId={programsState.selectedProgramId}/>
      {content}
    </main>
  );
}

export default App;
