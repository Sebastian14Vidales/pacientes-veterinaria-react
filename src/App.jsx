import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const pacientesLocalStorage = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(pacientesLocalStorage);
  const [paciente, setPaciente] = useState({});

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; //Si no hay nada en el localStorage, agrega un arreglo vacío
  //     setPacientes(pacientesLS);
  //   }

  //   obtenerLS();
  // }, []) //no hay nada dentro del [] debido a que solo se ejecutará 1 vez


  useEffect(() => {
      localStorage.setItem('pacientes', JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(pacientesState => pacientesState.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-16">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario 
        pacientes={pacientes} 
        setPacientes={setPacientes} 
        paciente={paciente}
        setPaciente={setPaciente}
        />
        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
