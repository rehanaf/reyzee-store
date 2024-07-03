import { Link } from "react-router-dom"
import image from "../assets/image"

const CategoryProduct = ({ list }) => {
  return(
    <>
      {list !== undefined ? list.map((item, id) =>
      <Link key={id} to={item.name}>
        <div className="card flex flex-col-reverse aspect-[4/6] w-full overflow-hidden shadow-xl bg-cover" style={{ backgroundImage: `url(${item.img})`}}>
          <div className="bg-black/20 px-3 py-2 text-center backdrop-blur-sm lg:py-3">
            <div className="w-full space-y-1 xl:space-y-2">
              <p className="line-clamp-1 text-base font-medium">{item.name}</p>
              <p className="line-clamp-1 text-xs">{item.desc}</p>
            </div>
          </div>
        </div>
      </Link>
      ) : <div>Data tidak ditemukan</div>}
    </>
  )
}

export default CategoryProduct