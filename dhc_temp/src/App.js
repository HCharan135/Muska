import "./App.css";
import Count from "./components/counter";
import Functionclick from "./components/functionclick";
import Greet from "./components/greet";
import Message from "./components/message";
import ParentComponent from "./components/ParentComponent";
import Welcome from "./components/welcome";
import Hello from "./hello";
function App() {
  return (
    <div className="App">
      <Greet name="dhc" heto="buto">
        <p>this is bussiching</p>
      </Greet>
      <Welcome name="hemacharan" aka="dhc" />
      <Message mr="dhc"></Message>
      <Hello />
      <Count />
      <Functionclick />
      <ParentComponent />
      <h1>jsdnbasfasrgrf</h1>
    </div>
  );
}

export default App;
