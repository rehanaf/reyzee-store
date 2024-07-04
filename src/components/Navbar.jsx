import { Link } from "react-router-dom"
import image from "../assets/image"

const Navbar = () => {
  return (
    <>
    <nav className="navbar sticky top-0 bg-primary text-primary-content z-50">
      <div className="container mx-auto">
        <div className="flex-1 ml-2 lg:ml-4">
          {/* <Link to='/'><img src={image(20, 10)} alt="Brand" className="h-12" /></Link> */}
          <Link to='/'><h1 className="font-bold text-xl">Reyzee</h1></Link>
        </div>
        <div className="flex-none">
          <label htmlFor="sidenav" className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              className="inline-block h-6 w-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </label>
        </div>
      </div>
    </nav>
    <SideNav/>
    </>
  )
}

const SideNav = () => {
  return (
    <div className="drawer drawer-end z-50 bg-primary text-primary-content">
      <input id="sidenav" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="sidenav" aria-label="close sidebar" className="drawer-overlay"></label>
        <nav className="menu bg-base-200 text-base-content min-h-full w-80 p-4 flex flex-col justify-between">
          <div>
            <img src={image(20, 10)} alt="Brand" className="w-full mb-4" />
            <ul>
              <li><a>Beranda</a></li>
              <li><Link to={'/invoice/1'}>Cek Pesanan</Link></li>
              <li><a>Gabung Reseller</a></li>
              <li><a>Daftar Harga</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><a>Tema</a></li>
              <li><a>Buat Website</a></li>
              <li><a>Syarat dan Ketentuan</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar