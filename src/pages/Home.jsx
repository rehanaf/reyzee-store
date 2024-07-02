import image from "../assets/image"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
const Home = () => {
  return(
    <>
      <Navbar/>
      <div className="p-2">
        <img src={image(40, 10)} className="w-full rounded-xl" />
      </div>

      <h1 className="text-center text-3xl font-bold my-4">Produk Favorit</h1>

      <div className="p-2 grid grid-cols-3 gap-x-2 gap-y-3 md:gap-x-4 md:gap-y-5 base:grid-cols-4 xl:grid-cols-5">
        <Link to="ml">
          <div className="card flex flex-col-reverse aspect-[4/6] w-full overflow-hidden shadow-xl bg-cover" style={{ backgroundImage: `url(${image(40, 60)})`}}>
            <div className="bg-black/20 px-3 py-2 text-center backdrop-blur-sm lg:py-3">
              <div className="w-full space-y-1 xl:space-y-2">
                <p className="line-clamp-1 text-base font-medium">Mobile Legends</p>
                <p className="line-clamp-1 text-xs">Moonton</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="ff">
          <div className="card flex flex-col-reverse aspect-[4/6] w-full overflow-hidden shadow-xl bg-cover" style={{ backgroundImage: `url(${image(40, 60)})`}}>
            <div className="bg-black/20 px-3 py-2 text-center backdrop-blur-sm lg:py-3">
              <div className="w-full space-y-1 xl:space-y-2">
                <p className="line-clamp-1 text-base font-medium">Free Fire</p>
                <p className="line-clamp-1 text-xs">Garena</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="hok">
          <div className="card flex flex-col-reverse aspect-[4/6] w-full overflow-hidden shadow-xl bg-cover" style={{ backgroundImage: `url(${image(40, 60)})`}}>
            <div className="bg-black/20 px-3 py-2 text-center backdrop-blur-sm lg:py-3">
              <div className="w-full space-y-1 xl:space-y-2">
                <p className="line-clamp-1 text-base font-medium">Honor Of King</p>
                <p className="line-clamp-1 text-xs">Level Infinite</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="coc">
          <div className="card flex flex-col-reverse aspect-[4/6] w-full overflow-hidden shadow-xl bg-cover" style={{ backgroundImage: `url(${image(40, 60)})`}}>
            <div className="bg-black/20 px-3 py-2 text-center backdrop-blur-sm lg:py-3">
              <div className="w-full space-y-1 xl:space-y-2">
                <p className="line-clamp-1 text-base font-medium">Clash Of Clans</p>
                <p className="line-clamp-1 text-xs">Supercell</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="pubgm">
          <div className="card flex flex-col-reverse aspect-[4/6] w-full overflow-hidden shadow-xl bg-cover" style={{ backgroundImage: `url(${image(40, 60)})`}}>
            <div className="bg-black/20 px-3 py-2 text-center backdrop-blur-sm lg:py-3">
              <div className="w-full space-y-1 xl:space-y-2">
                <p className="line-clamp-1 text-base font-medium">PUBG Mobile</p>
                <p className="line-clamp-1 text-xs">Level Infinite</p>
              </div>
            </div>
          </div>
        </Link>
        <Link to="gi">
          <div className="card flex flex-col-reverse aspect-[4/6] w-full overflow-hidden shadow-xl bg-cover" style={{ backgroundImage: `url(${image(40, 60)})`}}>
            <div className="bg-black/20 px-3 py-2 text-center backdrop-blur-sm lg:py-3">
              <div className="w-full space-y-1 xl:space-y-2">
                <p className="line-clamp-1 text-base font-medium">Genshin Impact</p>
                <p className="line-clamp-1 text-xs">COGNOSPHERE PTE.LTD.</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home