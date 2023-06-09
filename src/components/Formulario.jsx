/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { useEffect , useState } from "react"
import Error from "./Error";


const Formulario = ({pacientes,setPacientes,paciente,setPaciente}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false)

    useEffect(() =>{
        if( Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)

        }

    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36)

        return random + fecha

    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if([nombre,propietario,email,fecha,sintomas].includes('')) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
            return
        }
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if(paciente.id){
            // editando el registro
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})



        }else{
            //nuevo registro
            objetoPaciente.id = generarId()
            
            setPacientes([...pacientes,objetoPaciente])}


        //reiniciar formu
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
        
    }
       
  return (
    <div className=" md:w-1/2 lg:w-2/5">
      <h2 className=" font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className=" text-center text-lg mt-5 mb-5">

        Añade pacientes y {''}
        <span className=" text-indigo-600 font-bold">
            Administralo

        </span>
      </p>
    <form className=" bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-10"
          onSubmit={handleSubmit} >
            {error && <Error> <p>Todos los campos son obligatorios</p> </Error>}
        <div className="mb-3">
            <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold" >Nombre Mascota</label>
            <input 
            id="mascota" 
            className=" border-2 w-full mt-3 rounded-md" 
            type="text" 
            placeholder=" Nombre mascota" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold" >Nombre Propietario</label>
            <input id="propietario" className=" border-2 w-full mt-3 rounded-md" type="text" placeholder=" Nombre propietario" value={propietario}
            onChange={(e) => setPropietario(e.target.value)} />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold" >Email</label>
            <input id="email" className=" border-2 w-full mt-3 rounded-md" type="email" placeholder=" Direccion de Email del propietario"  value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
            <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold" >fecha</label>
            <input id="fecha" className=" border-2 w-full mt-3 rounded-md" type="date"  value={fecha}
            onChange={(e) => setFecha(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold" >Sintomas</label>
            <textarea name="sintomas" id="sintomas" cols="30" rows="10" placeholder="Describe los sintomas"
            className="border-2 w-full mt-3 rounded-md placeholder-gray-400"  value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}></textarea>
        </div>

        <input 
            type="submit"
            className=" bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-800 transition-colors rounded-md"
            value={Object.keys(paciente).length > 0 ? ("Editar paciente"):("Agregar Paciente")}    
        />
        
    </form>

    </div>
  )
}


export default Formulario
