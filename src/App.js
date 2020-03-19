import React, {useState} from 'react';
import api from './service/api';
import './App.css';

function App() {

  const [number, setNumber] = useState('');
  const[isPrime, setIsPrime] = useState('');
  const[dividers, setDividers] = useState([]);

    async function handleSubmit(event) {
      event.preventDefault();

      if(number < 1) {
        alert("Insira um número inteiro positivo")
      } else {
        const response = await api.post('/divide', {number});
        if(response.data.isPrime === true) {
          setIsPrime('É');
        } else {
          setIsPrime('NÃO É');
        }
        setDividers(response.data.dividers);
      }
    }

  return (
    <div className="container">
    <div className="content">
            <h3>DESCUBRA OS DIVISORES:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="number">Número *</label>
                <input 
                    type="number" 
                    id="number" 
                    placeholder="Insira um número inteiro"
                    value= {number}
                    required
                    onChange={event => setNumber(event.target.value)}
                />
                <button className= "btn" type= "submit">Go</button>
            </form>
        </div>
        {isPrime ? 
            <div className="result">
              <h3>Número {number}:</h3>
              <p> O número {number} <strong>{isPrime}</strong> primo e seus divisores são:</p>
              <ul>
              {dividers.map(numero => <li>{numero}</li>)}
              </ul>
            </div>
             : 
             ''}
        </div>
  );
}

export default App;
