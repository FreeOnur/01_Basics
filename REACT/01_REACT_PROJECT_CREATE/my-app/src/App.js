import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Person from './components/Person';

function App() {
  return (
    <div className="App" style={{border:"solid"}}>
        <Button name="Hans" age="17"/>
        <Button name="Freehit" age="16"/>
        <Button name="Maurice" age="16"/>
        <Button name="Magnus" age="17"/>

        <Person name="Finn" description="Super Coder"/>
    </div>
  );
}

export default App;
