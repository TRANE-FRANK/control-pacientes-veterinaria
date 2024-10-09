import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PatientForm from "./components/PatientForm"
import PatientsLists from "./components/PatientsLists"

function App() {
  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimiento de Pacientes {""}
        </h1>

        <div className="mt-12 md:flex">
          <PatientForm />
          <PatientsLists />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App
