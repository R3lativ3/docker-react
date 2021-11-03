import Text from 'react'
import './App.css';


const Saludar = (props) => <p> que tal mucha {props.nom} </p>


function App() {
  return (
    <div className="App">
      <Saludar nom="jajaddddj" />
    </div>
  );
}

export default App;
