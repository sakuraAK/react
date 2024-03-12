import {CORE_CONCEPTS} from "./data";
import Header  from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Button from "./components/Button/Button.jsx";
import { useState } from "react";


export default function App() {
  // console.log("App is loading");
  const [exampleText, setExampleText] = useState("Click the button");

  function handleClick(selectedButton) {
      setExampleText(selectedButton);
      console.log(exampleText);
  }

  
  return (
    <div>
      <Header />
      <main>
        <h2>Core concepts</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept 
            title={CORE_CONCEPTS[1].title} 
            image={CORE_CONCEPTS[1].image}
            description={CORE_CONCEPTS[1].description}/>    
            <CoreConcept {...CORE_CONCEPTS[2]}/>  
            <CoreConcept {...CORE_CONCEPTS[3]}/>  
          </ul>
        </section>
      </main>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <Button clickHandler={()=> handleClick("Components")}>Components</Button>
          <Button clickHandler={()=> handleClick("Jsx")}>Jsx</Button>
          <Button clickHandler={()=> handleClick("Props")}>Props</Button>
          <Button clickHandler={()=> handleClick("State")}>State</Button>
          {/* <button>Components</button>
        <button>JSX</button>
        <button>Props</button> */}
        </menu>
        <div id="tab-content">
          <h3></h3>
          <p></p>
          <pre>
            <code>
              
            </code>
          </pre>
        </div>
        {/* <p>{exampleText}</p> */}
      </section>
      
    </div>
  );
}





