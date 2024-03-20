import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Button from "./components/Button/Button.jsx";
import { useState, useRef } from "react";





export default function App() {
  const [exampleText, setExampleText] = useState();

  const exampleHtml = !exampleText ?
    (<p>Click on a button</p>) :
    (<div id="tab-content">
      <h3>{EXAMPLES[exampleText].title}</h3>
      <p>{EXAMPLES[exampleText].description}</p>
      <pre>
        <code>
          {EXAMPLES[exampleText].code}
        </code>
      </pre>
    </div>);

  function handleClick(selectedButton) {
    setExampleText(selectedButton);
    console.log(exampleText);
  }

  function getBtnClass(btnName) {
    return exampleText === btnName ? "active" : ""
  }

  return (
    <div>
      <Header></Header>
      <main>
        <h2>Core concepts</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => (<CoreConcept key={coreConcept.title} {...coreConcept}/>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {Object.keys(EXAMPLES).map((coreConceptTitle) => (
              <Button key={coreConceptTitle}
                clickHandler={() => handleClick(coreConceptTitle)}
                buttonClass={getBtnClass(coreConceptTitle)}>
                {coreConceptTitle.toUpperCase()}
              </Button>
              ))
            }
            {/* <Button 
            clickHandler={() => handleClick("components")}
            buttonClass={getBtnClass("components")}
            >Components</Button>
            <Button 
            clickHandler={() => handleClick("jsx")}
            buttonClass={getBtnClass("jsx")}
            >Jsx</Button>
            <Button 
            clickHandler={() => handleClick("props")}
            buttonClass={getBtnClass("props")}
            >Props</Button>
            <Button 
            clickHandler={() => handleClick("state")}
            buttonClass={getBtnClass("state")}
            >State</Button> */}
          </menu>
          {/* {!exampleText && (<p>Click on a button</p>)}
        {exampleText && (<div id="tab-content">
          <h3>{EXAMPLES[exampleText].title}</h3>
          <p>{EXAMPLES[exampleText].description}</p>
          <pre>
            <code>
              {EXAMPLES[exampleText].code}
            </code>
          </pre>
        </div>)} */}
          {/* {!exampleText ?
          (<p>Click on a button</p>) :
          (<div id="tab-content">
            <h3>{EXAMPLES[exampleText].title}</h3>
            <p>{EXAMPLES[exampleText].description}</p>
            <pre>
              <code>
                {EXAMPLES[exampleText].code}
              </code>
            </pre>
          </div>)
        } */}

          {exampleHtml}

        </section>
      </main>
    </div>
  );
}





