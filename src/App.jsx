import Modal from "./components/Modal";
import NewProgram from "./components/NewProgram";
import NoProgramSelected from "./components/NoProgramSelected";
import ProgramSidebar from "./components/ProgramSidebar";
import SelectedProgram from "./components/SelectedProgram"
import { addCourse, addCourseToProgram, addProgram, deleteProgram, fetchPrograms } from "./http";
import { useEffect, useState, useRef } from "react";
import { ProgramContext } from "./store/program-context";

function App() {

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
      courses: [],
    }
  );

  function startAddNewProgramHandler() {
    updateProgramState((prevState) => ({
      ...prevState,
      selectedProgramId: null,
    }));
  }

  function addNewProgramHandler(newProgram) {
    try {
      addProgram(newProgram).then((result) => {
        updateProgramState((prevState) => ({
          ...prevState,
          programs: [...prevState.programs, result],
          selectedProgramId: undefined,
        }));
        updateModalMessage("Program was sucessfully added.");
        modalRef.current.open();
      });
    }
    catch (e) {
      console.log(e);
      updateModalMessage("An error occurred.");
    }



  }

  function selectProgramHandler(selectedId) {
    updateProgramState((prevState) => ({
      ...prevState,
      selectedProgramId: selectedId,
    }));

  }

  function cancelAddNewProgramHandler() {
    updateProgramState((prevState) => ({
      ...prevState,
      selectedProgramId: undefined
    }));
  }


  function onDeleteProgramHandler() {
    try {
      deleteProgram(programsState.selectedProgramId).then((result) => {
        updateProgramState((prevState) => ({
          ...prevState,
          programs: prevState.programs.filter((program) => program.id !== prevState.selectedProgramId),
          selectedProgramId: undefined,
        }));

        updateModalMessage("Program removed!")
        modalRef.current.open();
      });
    }
    catch (e) {
      updateModalMessage("An error occurred while removing program.")
      modalRef.current.open();
    }


  }

  function onAddNewCourseHandler(newCourse) {

    try {
        addCourse(newCourse).then((couseResult) => {
          addCourseToProgram({...couseResult, programId: programsState.selectedProgramId}).then((result) => updateProgramState((prevState) => ({
            ...prevState,
            courses: [result, ...prevState.courses]
          })));
        updateModalMessage("Course was sucessfully added.");
        modalRef.current.open();
      });
    }
    catch (e) {
      console.log(e);
      updateModalMessage("An error occurred.");
    }

}

const selectedProgram = programsState.programs.find((program) => program.id === programsState.selectedProgramId);

let content = <SelectedProgram program={selectedProgram} onDelete={onDeleteProgramHandler}
  onAddNewCourse={onAddNewCourseHandler} />;

if (programsState.selectedProgramId === null) {
  content = <NewProgram onAdd={addNewProgramHandler} onCancel={cancelAddNewProgramHandler} />;
}
else if (programsState.selectedProgramId === undefined) {
  content = <NoProgramSelected onAddNewProgram={startAddNewProgramHandler} />;
}

return (
  <ProgramContext.Provider value={{ ...programsState, onAddNewCourse: onAddNewCourseHandler }}>
    <Modal ref={modalRef} buttonCaption={"OK"}><h2 className="text-xl font-bold text-stone-700 my-4">{modalMessage}</h2></Modal>
    <main className="h-screen my-8 flex gap-8">
      <ProgramSidebar
        onAddNewProgram={startAddNewProgramHandler}
        onSelectProgram={selectProgramHandler}
        programs={programsState.programs}
        selectedProgramId={programsState.selectedProgramId} />
      {content}
    </main>
  </ProgramContext.Provider>

);
}

export default App;
