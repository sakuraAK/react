import reactCoreConceptImage from "./assets/react-core-concepts.png";
import componentsImage from "./assets/components.png";
import jsxImage from "./assets/jsx-ui.png"
import {CORE_CONCEPTS} from "./data";

const synonyms = ["Fundamental", "Elemental", "Foundational"];

function randInt(maxValue) {
  return Math.floor(Math.random() * maxValue);
}


function CoreConcept({image, title, description}) {
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function Header() {
  let newValue = synonyms[randInt(synonyms.length)];
  return (
    <header>
      <img src={reactCoreConceptImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {newValue} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}





function App() {
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
    </div>
  );
}

export default App;

// function MainGoal() {
//   return (
//     <p>
//       My main goal: Learn React in-depth and from the ground up.
//     </p>

//   );
// }

// function App() {
//   return (
//     <div id="core-concepts">
//       <h1>Time to Practice!</h1>
//       <p>
//         Build a <code>&lt;MainGoal&gt;</code> component and insert it below this
//         text.
//       </p>
//       <p>
//         Your <code>&lt;MainGoal&gt;</code> component should simply output some
//         text that describes your main course goal (e.g., &quot;My main goal:
//         Learn React in great detail&quot;).
//       </p>
//       <p>
//         <strong>Important:</strong> You custom component must contain the text
//         &quot;My main goal:&quot;
//       </p>
//       <p>
//         <strong>Also important:</strong> For the automatic checks to succeed,
//         you <strong>must export</strong> your custom component function! Not as
//         a default but simply by adding the <code>export</code> keyword in front
//         of your function (e.g., <code>export function YOUR_COMPONENT_NAME</code>
//         ).
//       </p>
//       {/* DON'T CHANGE THE TEXT / CONTENT ABOVE */}
//       {/* OUTPUT YOUR COMPONENT HERE */}
//       <MainGoal/>
//     </div>
//   );
// }

// export default App;

// export const userData = {
//   firstName: "Andrey", // feel free to replace the name value
//   lastName: "Krutauz", // feel free to replace the name value
//   title: "Instructor", // feel free to replace the title value
// };

// // Edit the User component code to output the userData data
// export function User() {
//   return (
//     <div id="user" data-testid="user">
//       <h2>
//         {userData.firstName} {userData.lastName}
//       </h2>
//       <p>{userData.title}</p>
//     </div>
//   );
// }

// // DON'T edit the App component code
// function App() {
//   return (
//     <div id="core-concepts">
//       <h1>Time to Practice</h1>
//       <p>Welcome on board of this course! You got this </p>
//       <User />
//     </div>
//   );
// }

// export default App;


