import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import ProductList from "../components/ProductList"
import Footer from "../components/Footer"
import bgHero from "../assets/bg-header.png"
import Modal from "../components/Modal"

const ProductTopUp = () => {
  const { game } = useParams()
  const capitalize = (str) => {
    let res = ''
    for(let i = 0; i < str.length; i++) {

      res += i == 0 || str.charAt(i - 1) == ' ' ? str.charAt(i).toUpperCase() : str.charAt(i)
    }
    return res
  }

  return(
    <>
      <Navbar/>

      <div className="container mx-auto p-4">
        <img src={bgHero} alt="header" loading="lazy" className="w-full rounded-xl" />
      </div>

      <div className="container mx-auto p-4">
        <div>

        </div>
        <ProductList name={capitalize(game.replace(/-/g, ' '))}/>
      </div>
      <div className="container mx-auto p-4">
        <button className="btn" onClick={()=>document.getElementById('konfirmasi').showModal()}>Konfirmasi Pesanan</button>
      </div>
      <Modal id="konfirmasi"/>
      <Footer/>
    </>
  )
}

export default ProductTopUp