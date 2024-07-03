import { useState } from "react"
import image from "../assets/image"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import CategoryProduct from "../components/CategoryProduct"

const Home = () => {
  const [categoryActive, setCategoryActive] = useState(0)
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
        <img src={image(20, 10)} className="w-full rounded-xl" />
      </div>

      <div className="container mx-auto">
        <div className="mx-4 py-4 flex flex-nowrap space-x-4 overflow-x-auto">
          {category.map((item, id) =>
            <button key={id} onClick={() => setCategoryActive(id)} className={`${categoryActive == id && 'bg-secondary text-secondary-content'} border-2 border-secondary text-secondary rounded-full px-6 py-2 whitespace-nowrap`}>{item}</button>
          )}
        </div>
      </div>

      <div className="container mx-auto p-4 grid grid-cols-3 gap-x-2 gap-y-3 md:gap-x-4 md:gap-y-5 md:grid-cols-4 xl:grid-cols-5">
        <CategoryProduct list={categoryProductList[category[categoryActive]]}/>
      </div>
      
      <Footer/>
    </>
  )
}

export default Home