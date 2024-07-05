import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import ProductList from "../components/ProductList"
import Footer from "../components/Footer"
import bgHero from "../assets/bg-header.png"
import Modal from "../components/Modal"
import { useEffect, useState } from "react"
import axios from "axios"
import Loading from "../components/Loading"

const ProductTopUp = () => {
  const url = import.meta.env.VITE_API_URL
  const { id } = useParams()
  const [data, setData] = useState({})
  const [productType, setProductType] = useState()
  const [loading, setLoading] = useState(true)

  
  useEffect(() => {
    const fetchProductType = async() => {
        try {
        await axios.get(`${url}operator/${id}`).then(res => {
          setData(prevData => ({
            ...prevData,
            productType: res.data.data
          }))
          setProductType(res.data.data[0].id)
        })
      } catch(error) {
        setData(error)
      } finally {
        setLoading(false)
      }
    }
    fetchProductType()
  }, [])
  
  useEffect(() => {
    const fetchProduct = async() => {
      try {
      await axios.get(`${url}product/${productType}`).then(res => {
        setData(prevData => ({
          ...prevData,
          product: res.data.data
        }))
      })
    } catch(error) {
      setData(error)
    } finally {
      setLoading(false)
    }
  }
  productType !== undefined && fetchProduct()
  }, [productType])

  return(
    <>
      <Loading isActive={loading}/>
      <Navbar/>

      <div className="container mx-auto p-4">
        <img src={bgHero} alt="header" loading="lazy" className="w-full rounded-xl" />
      </div>

      <div className="container mx-auto p-4">
        <div>

        </div>
        <div>
          <div className="py-4 flex flex-nowrap space-x-2 xl:space-x-4 overflow-x-auto">
            {data.productType !== undefined && data.productType.map((item) =>
              <button key={item.id} onClick={() => setProductType(item.id)} className={`${productType == item.id && '!bg-secondary !text-secondary-content'} border-2 border-secondary text-secondary rounded-full px-6 py-2 whitespace-nowrap`}>{item.nama}</button>
            )}
          </div>
          <ProductList product={data.product}/>
        </div>
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