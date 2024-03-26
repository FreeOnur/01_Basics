import Button from "./components/Button";
import Liste from "./components/Liste";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Liste text={"Coffee"} text1={"Tea"} text2={"Beer"}/>
      <Button name={"Sendar"}/>
      <Card name="John Doe" job="Architect & Engineer"/>
      <Card name="Onur Arslan" job="Coder"/>
    </div>
    
  );
}

export default App;
