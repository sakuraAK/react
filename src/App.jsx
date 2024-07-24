import Modal from "./components/Modal";
import NewProgram from "./components/NewProgram";
import NoProgramSelected from "./components/NoProgramSelected";
import ProgramSidebar from "./components/ProgramSidebar";
import SelectedProgram from "./components/SelectedProgram"
import { addProgram, deleteProgram, fetchPrograms } from "./http";
import { useEffect, useState, useRef } from "react";

function App() {

  // useEffect(() => {
  //   const testProgram = {
  //     name: "Program A",
  //     description: "Software developmnet program",
  //     total_hours: 360,
  //   };
  //   addProgram(testProgram).then((result) => console.log(result));
  // }, []);

  // console.log(fetchPrograms());
  const [modalMessage, updateModalMessage] = useState("");
  
  const modalRef = useRef();

  useEffect(() => {
    fetchPrograms().then((result) => updateProgramState((prevState) => ({
      ...prevState,
      programs: result,
    })));
  }, []);

 

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

  function cancelAddNewProgramHandler() {
    updateProgramState((preveState) => ({
      ...preveState,
      selectedProgramId: undefined
    }));
  }


  function onDeleteProgramHandler() {
    deleteProgram(programsState.selectedProgramId).then((result) => {
      console.log(result);
      updateModalMessage("Program deleted!")
      modalRef.current.open();
    });
  
    
    updateProgramState((prevState) => ({
      ...prevState,
      programs: prevState.programs.filter((program) => program.id !== prevState.selectedProgramId),
      selectedProgramId: undefined,
    }));

  }

  const selectedProgram = programsState.programs.find((program) => program.id === programsState.selectedProgramId); 

  let content = <SelectedProgram program={selectedProgram} onDelete={onDeleteProgramHandler}/>;

  if (programsState.selectedProgramId === null) {
    content = <NewProgram onAdd={addNewProgramHandler} onCancel={cancelAddNewProgramHandler}/>;
  }
  else if (programsState.selectedProgramId === undefined) {
    content = <NoProgramSelected onAddNewProgram={startAddNewProgramHandler}/>;
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption={"OK"}><h2 className="text-xl font-bold text-stone-700 my-4">{modalMessage}</h2></Modal>
      <main className="h-screen my-8 flex gap-8">
      <ProgramSidebar 
        onAddNewProgram={startAddNewProgramHandler} 
        onSelectProgram={selectProgramHandler} 
        programs={programsState.programs}
        selectedProgramId={programsState.selectedProgramId}/>
      {content}
    </main>
    </>
    
  );
}

export default App;
