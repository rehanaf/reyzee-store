import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Invoice = () => {
  const { ref } = useParams()
  return(
    <>
      <Navbar/>
      <div>
        <p>Invoice</p>
        <p>{ref !== undefined && ref}</p>
      </div>
      <Footer/>
    </>
  )
}

export default Invoice