import React, {useState} from 'react';
import api from './service/api';
import './App.css';

function App() {

  const [number, setNumber] = useState('');
  const[isPrime, setIsPrime] = useState('');
  const[dividers, setDividers] = useState([]);

    async function handleSubmit(event) {
      event.preventDefault();
      const response = await api.post('/divide', {number});
      if(response.data.isPrime == true) {
        setIsPrime('Sim');
      } else {
        setIsPrime('Não');
      }
      setDividers(response.data.dividers);
    }

  return (
    <div className="container">
    <div className="content">
            <p>
            Insert a number
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="number">Number *</label>
                <input 
                    type="number" 
                    id="number" 
                    placeholder="Insert a number"
                    value= {number}
                    onChange={event => setNumber(event.target.value)}
                />
                <button className= "btn" type= "submit">Go</button>
            </form>
            {isPrime ? 
            <div className="result">
              <p> O número é primo? {isPrime}</p>
              <p>Seus divisores são: {dividers.map(numero => <p>{numero}</p>)}</p>
            </div>
             : 
             ''}
        </div>
        </div>
  );
}

export default App;
