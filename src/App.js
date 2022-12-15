// import logo from './logo.svg';
import Title from './components/Title';
import Mascota from './components/Mascota';
import Card from './components/Card';
import './App.css';

function App() {
            const numeros =  [45, 78, 12, 787, 341 ];
  return (
    <div className="App">

           {/* ----FORMA ORIGINAL:
                     {numeros.map(numero =>  {
                          return(
                            <p> El número es: {numero}</p>
                          );
                     })} 
                       el .map requiere un reurn, puedo usar () para que este implicito*/}

             
            {/* -----IMPLICITO------------- */}
            
            {numeros.map(numero=> (
                <p>El numero es:{numero}</p>
            ))} 

          
          {/* Llamamos al componente y le enviamos el parámetro */}
            <Title
               titulo = {'Hola, como va'} 
              subtitulo = {'Este es el subtitulo del Title'}
             />
             
      <Card />
      <Mascota />
      <header className="App-header">
        <img src="images/gato.jpg" alt="Gato" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit!!! <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

