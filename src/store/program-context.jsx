import { createContext } from "react";

export const ProgramContext = createContext(
    {
        programs: [],
        selectedProgramId: null,
        onAddNewCourse: () => {},
        courses: [],
    }
);