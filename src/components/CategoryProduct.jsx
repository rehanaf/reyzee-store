import { Link } from "react-router-dom"

const CategoryProduct = ({ operator }) => {
  return(
    <>
      {operator !== undefined && operator.map((item) =>
      {return item.status == 1 &&
      <Link key={item.id} to={`product/${item.id}`} onClick={() => window.scrollTo(0,0)}>
        <div className="card flex flex-col-reverse aspect-[4/6] w-full overflow-hidden shadow-xl bg-cover bg-center" style={{ backgroundImage: `url("${item.logo}")`}}>
          <div className="bg-black/20 text-white px-3 py-2 text-center backdrop-blur-sm lg:py-3">
            <div className="w-full space-y-1 xl:space-y-2">
              <p className="line-clamp-1 text-xs xl:text-base font-medium">{item.nama}</p>
            </div>
          </div>
        </div>
      </Link>}
      )}
    </>
  )
}

export default CategoryProduct