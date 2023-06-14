import { useEffect } from "react";
import Paciente from "./Paciente";


function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {

  useEffect(() => {
    console.log(pacientes);
  },[pacientes])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll py-10 md:py-0">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente 
            key={paciente.id} 
            paciente={paciente} 
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-center text-3xl">No hay pacientes</h2>
          <p className="text-lg mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
