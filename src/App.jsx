import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Button from "./components/Button/Button.jsx";
import { useState } from "react";



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


  return (
    <div>
      <Header />
      <main>
        <h2>Core concepts</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              image={CORE_CONCEPTS[1].image}
              description={CORE_CONCEPTS[1].description} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <Button clickHandler={() => handleClick("components")}>Components</Button>
          <Button clickHandler={() => handleClick("jsx")}>Jsx</Button>
          <Button clickHandler={() => handleClick("props")}>Props</Button>
          <Button clickHandler={() => handleClick("state")}>State</Button>
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

    </div>
  );
}





