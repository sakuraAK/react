import { useRef } from "react";
import Input from "./Input";

export default function NewProgram({ onAdd, onCance }) {


  const nameRef = useRef();
  const descRef = useRef();
  const totalHrsRef = useRef();

  function saveClickHandler() {
    let newProgram  = {
      id: Math.random(),
      name: nameRef.current.value,
      description: descRef.current.value,
      totalHours: totalHrsRef.current.value,
    };
    console.log(newProgram);
    onAdd(newProgram);
  }
  

  return (
    <>
      {/* Modal goes here */}
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950">
              Cancel
            </button>
          </li>
          <li>
            <button onClick={saveClickHandler} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={nameRef} label="Name" textarea={false}/>
          <Input ref={descRef} label="Description" textarea={true}/>
          <Input ref={totalHrsRef} label="Total Hours" textarea={false} type="number"/>
        </div>
      </div>
    </>
  );
}
