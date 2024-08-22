import { useContext, useState } from 'react';
import NewCourse from './NewCourse.jsx';
import { ProgramContext } from '../store/program-context.jsx';



export default function Courses() {
  const [newCourseAdded, updateNewCourseAdded]  = useState(false);

  const programCtx = useContext(ProgramContext);

  
  
  
  function onAddNewCourseClicked() {
    updateNewCourseAdded((prevState) => !prevState);
  }

  function onSave(newCourse) {

    programCtx.onAddNewCourse(newCourse);
    onAddNewCourseClicked();
  }

  const programCourses =  programCtx.courses ? programCtx.courses.filter(course => course.programId == programCtx.selectedProgramId) : [];
  let content = (  <p className="text-stone-800 my-4">
    This program does not have any courses yet.
 </p>);
  if (programCourses.length > 0) {
    content = (
      <ul>
      {
        programCourses.map((course) => 
          (
            <li key={course.id} className="flex justify-between my-4">
              <span>{course.name}</span>
              <button   className="text-stone-700 hover:text-red-500">
              Delete
            </button>
          </li>
        )
      )
      }
     </ul>
    );
  }

  return (
   <section>
    <header className='pb-4 mb-4 border-b-2 border-stone-300'>
    <button onClick={onAddNewCourseClicked} className="text-stone-700 hover:text-red-500">+Add New Course</button>

    { newCourseAdded && <NewCourse onAdd={onSave}/> } 
   
    </header>
    
     <h2 className="text-2xl font-bold text-stone-700 mb-4">Courses</h2>

    {content}

   </section>
  );
}
