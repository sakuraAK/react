import ReactDOM from "react-dom/client";

//import App from "./App.jsx";
import InvestCalcApp from "./InvestCalcApp.jsx";
//import "./index.css";
//import "./test-style.css";
import "./investment-calc.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<InvestCalcApp />);
