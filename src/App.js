import './App.css';
import { useState } from 'react';
import Card from './components/card/card';

function App() {

  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [errors, setErrors] = useState("");

  const requesitApi = () => {
    setErrors("");
    if(input === ""){
      console.log('campo obrigatorio');
      setErrors("campo obrigatorio");
    } else {
      fetch(`https://api.github.com/repos/${input}`)
      .then((response) => response.json())
      .then((response) => {
         if (list.some(item => item.full_name === response.full_name)){
            setErrors("Repositorio ja Listado");  
          }else if (response.message === "Not Found"){
            setErrors("repo nao econtrado");
          }else{
            setList([...list, response]);
          } 
      });
    }
  }

  return (
    <div className="App-header">
      <div>
        <input onChange = {(e)=>setInput(e.target.value)}/>
        <button onClick = {() => requesitApi()} >Emviar</button>
      </div>
      <p>{errors}</p>
      {list && <Card list = {list} />}
    </div>
  );
}

export default App;
