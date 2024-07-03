import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import ProductList from "../components/ProductList"
import Footer from "../components/Footer"
import image from "../assets/image"
const ProductTopUp = () => {
  const { game } = useParams()
  return(
    <>
      <Navbar/>

      <div className="container mx-auto p-4">
        <img src={image(20, 10)} alt="header" loading="lazy" className="w-full rounded-xl" />
      </div>

      <div className="container mx-auto p-4">
        <div>

        </div>
        <ProductList name={game}/>
      </div>
      <Footer/>
    </>
  )
}

export default ProductTopUp