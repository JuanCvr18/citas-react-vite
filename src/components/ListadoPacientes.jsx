/* eslint-disable react/prop-types */
import { useEffect } from "react"
import Pacientes from "./Pacientes"


const ListadoPacientes = ({ pacientes, setPaciente,eliminarPaciente }) => {

  
  useEffect(() =>{
    if(pacientes.length > 0){
      console.log('Nuevo Paciente agregado')
    }
  }, [pacientes])

  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className=" font-black text-3xl text-center">Listado de pacientes</h2>
          <p className=" text-center text-lg mt-5 mb-5">

            Administra pacientes y {''}
            <span className=" text-indigo-600 font-bold">
              Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Pacientes
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}

            />
          ))}

        </>

      ) : (
        <>
          <h2 className=" font-black text-3xl text-center">No hay pacientes</h2>
          <p className=" text-center text-lg mt-5 mb-5">

            Comienza agregando y {''}
            <span className=" text-indigo-600 font-bold">
              apareceran en este lugar
            </span>
          </p>

        </>
      )}
    </div>
  )
}

export default ListadoPacientes
