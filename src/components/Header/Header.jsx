import reactCoreConceptImage from "../../assets/react-core-concepts.png";
import "./Header.css";


const synonyms = ["Fundamental", "Elemental", "Foundational"];

function randInt(maxValue) {
  return Math.floor(Math.random() * maxValue);
}


export default function Header() {
    // console.log("Header is loading");
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
