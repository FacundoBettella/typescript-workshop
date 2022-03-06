import './App.css';
import React from "react";
import { TextField } from './components/TextField';


const App: React.FC = () => {
  return (
    <div className="App">
      <TextField 
        text='Typescript' 
        person={{firstName: "Facundo", lastName:"Iunnissi"}}
      />
    </div>
  );
}

export default App;
