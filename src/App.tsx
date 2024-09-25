import "./App.css";
import { TotalAmountBar } from "./components/TotalAmountBar/TotalAmountBar";
import { Texts } from "./components/TextTypes/Texts";

function App() {
  return (
    // <div className="text-3xl font-bold">
    //   <h1>Hello World!</h1>
    // </div>
    // <TotalAmountBar totalAmount={1000}/>
    <Texts
      text="Hello World!"
      type="title"
      color="black"
    />
  );
}

export default App;
