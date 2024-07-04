import { useEffect, useState } from "react"
import image from "../assets/image"
import bgHero from "../assets/bg-header.png"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import CategoryProduct from "../components/CategoryProduct"
import axios from "axios"

const Home = () => {
  const url = import.meta.env.VITE_API_URL
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [categoryActive, setCategoryActive] = useState(1)

  
  useEffect(() => {
    const fetchData = async() => {
      try {
      await axios.get(`${url}category/${categoryActive}`).then(res => {
        setData(prevData => ({
          ...prevData,
          operator: res.data.data
        }))
      })
    } catch(error) {
      setData(error)
    }
  }
  fetchData()
  }, [categoryActive])

  useEffect(() => {
    const fetchCategory = async() => {
        try {
        await axios.get(`${url}category`).then(res => {
          setData(prevData => ({
            ...prevData,
            category: res.data.data
          }))
        })
      } catch(error) {
        setData(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCategory()
  }, [])
  const category = ['Game', 'Pulsa', 'Paket Data', 'Voucher Game', 'Token PLN', 'E-Wallet', 'Aplikasi Premium', 'Followers', 'Bot WhatsApp', 'E-Book', 'Transfer Bank']
  const categoryProductList = {
    Game: [
      {
        name: 'Mobile Legends',
        desc: 'Moonton',
        img: image(40, 60)
      },
      {
        name: 'Free Fire',
        desc: 'Garena',
        img: image(40, 60)
      },
      {
        name: 'Honor Of King',
        desc: 'Timi Studio',
        img: image(40, 60)
      },
      {
        name: 'PUBG Mobile',
        desc: 'Level Infinite',
        img: image(40, 60)
      },
      {
        name: 'Minecraft',
        desc: 'Mojang',
        img: image(40, 60)
      },
      {
        name: 'Genshin Impact',
        desc: 'Hoyoverse',
        img: image(40, 60)
      },
      {
        name: 'Honkai Impact',
        desc: 'Hoyoverse',
        img: image(40, 60)
      },
      {
        name: 'Arena Of Valor',
        desc: 'Timi Studio',
        img: image(40, 60)
      },
      {
        name: 'Call Of Duty Mobile',
        desc: 'Level',
        img: image(40, 60)
      },
    ]
  }
  return(
    <>
      <Navbar/>
      <div className="container mx-auto p-4">
        <img src={bgHero} className="w-full rounded-xl" />
      </div>

      {/* <div className="container mx-auto">
        <div className="mx-4 py-4 flex flex-nowrap space-x-2 xl:space-x-4 overflow-x-auto">
          {category.map((item, id) =>
            <button key={id} onClick={() => setCategoryActive(id)} className={`${categoryActive == id && 'bg-secondary text-secondary-content'} border-2 border-secondary text-secondary rounded-full px-6 py-2 whitespace-nowrap`}>{item}</button>
          )}
        </div>
      </div> */}

      <div className="container mx-auto">
        <div className="mx-4 py-4 flex flex-nowrap space-x-2 xl:space-x-4 overflow-x-auto">
          {data.category !== undefined && data.category.sort((a, b) => a.id - b.id).map((item) =>
            <button key={item.id} onClick={() => setCategoryActive(item.id)} className={`${categoryActive == item.id && 'bg-secondary text-secondary-content'} border-2 border-secondary text-secondary rounded-full px-6 py-2 whitespace-nowrap`}>{item.nama}</button>
          )}
        </div>
      </div>

      <div className="container mx-auto p-4 grid grid-cols-3 gap-x-2 gap-y-3 md:gap-x-4 md:gap-y-5 md:grid-cols-4 xl:grid-cols-5">
        <CategoryProduct operator={data.operator}/>
      </div>
      
      <Footer/>
    </>
  )
}

export default Home