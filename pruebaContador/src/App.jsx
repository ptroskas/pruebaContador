import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const { cont, incrementar, decrementar, reiniciar } = useLimitadorContador(0, 0, 10);

  return (
    <>
      <h1>Prueba contador</h1>
      <div className="card">
        <div className="contenido">
          <p>{cont}</p>
          <button onClick={incrementar}>INCREMENTAR</button>
          <button onClick={decrementar}>DECREMENTAR</button>
          <button onClick={reiniciar}>REINICIAR</button>
        </div>
      </div>
    </>
  );
}

export default App;

function useLimitadorContador(valorInicial, min, max) {
  const [cont, setCont] = useState(valorInicial);

  const incrementar = () => {
    if (cont < max) {
      setCont(cont + 1);
    }
  };

  const decrementar = () => {
    setCont((parametro) => (parametro > min ? parametro - 1 : parametro));
  };

  const reiniciar = () => {
    setCont(valorInicial);
  };
  useEffect(() => {
    if (cont===max){
      alert("¡Has alcanzado el valor máximo!");
    }
  }, [cont,max]);

  return { cont, incrementar, decrementar, reiniciar };
}
