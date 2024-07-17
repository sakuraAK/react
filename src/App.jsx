import NoProgramSelected from "./components/NoProgramSelected";
import ProgramSidebar from "./components/ProgramSidebar";
import { fetchPrograms } from "./http";

function App() {

  console.log(fetchPrograms());
  
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProgramSidebar/>
      <NoProgramSelected/>
    </main>
  );
}

export default App;
