const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handlerEliminar = () => {
    const respuesta = confirm('¿Deseas Eliminar este Paciente?');
    if(respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className="bg-white mx-5 mb-3 px-5 py-10 rounded-lg shadow-md">
      <p className="text-gray-700 uppercase font-bold mb-3">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="text-gray-700 uppercase font-bold mb-3">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="text-gray-700 uppercase font-bold mb-3">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="text-gray-700 uppercase font-bold mb-3">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="text-gray-700 uppercase font-bold mb-3">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex flex-col sm:flex-row mt-8">
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white uppercase py-2 px-10 font-bold rounded-md mb-2 sm:mb-0 sm:mr-2"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white uppercase py-2 px-10 font-bold rounded-md"
          onClick={handlerEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
