import Header from "./components/header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState , useEffect} from "react"


function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})

  const eliminarPaciente = (id) => {
      const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
      setPacientes(pacientesActualizados)
  }

  useEffect( () => {
    const obtenerLocal = () => {
      const local = JSON.parse(localStorage.getItem('pacientes')) ;
      setPacientes(local)
    }

    obtenerLocal()

  }, []);

 
  useEffect( () =>{
        localStorage.setItem('pacientes', JSON.stringify( pacientes))

  }, [pacientes])

  return (
    <div className=" mx-auto my-3">
      <Header

      />
      <div className=" md:flex mt-10">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente ={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente ={setPaciente}
          eliminarPaciente ={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
