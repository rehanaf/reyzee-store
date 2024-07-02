const Navbar = () => {
  return (
    <>
    <nav className="navbar sticky top-0 bg-base-100 z-50">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Reyzee Store</a>
      </div>
      <div className="flex-none hidden">
        <label htmlFor="sidenav" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </label>
      </div>
    </nav>
    <SideNav/>
    </>
  )
}

const SideNav = () => {
  return (
    <div className="drawer drawer-end z-50">
      <input id="sidenav" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="sidenav" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar