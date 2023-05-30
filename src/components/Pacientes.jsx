/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const Pacientes = ({paciente, setPaciente,eliminarPaciente}) => {
const{nombre,propietario,email,fecha,sintomas,id} = paciente

const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar este paciente?');
    if(respuesta){
        eliminarPaciente(id)
    }
}
  return (


    <div className="m-3 bg-white shadow-md px-5 py-10 rounded">
        <p className=" font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
            <span className=" font-normal normal-case">{nombre}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
            <span className=" font-normal normal-case">{propietario}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">Email: {""}
            <span className=" font-normal normal-case">{email}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">Fecha alta: {""}
            <span className=" font-normal normal-case">{fecha}</span>
        </p>
        <p className=" font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}
            <span className=" font-normal normal-case">{sintomas}</span>
        </p>

        <div >
            <button className="py-2 px-10 bg-indigo-500 hover:bg-indigo-700 text-white font-bold rounded-md mr-5" 
            type="button"
            onClick={() => setPaciente(paciente)}
            >Editar</button>
            <button className="py-2 px-10 bg-red-500 hover:bg-red-700 text-white font-bold rounded-md" type="button
            " onClick={handleEliminar}>Eliminar</button>
        </div>
      </div>
      
  )
}

export default Pacientes
