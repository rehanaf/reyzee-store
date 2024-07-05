import { useState } from "react"
import vite from "/vite.svg"

const IDR = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0
})

const ProductList = ({ product }) => {
  
  return(
        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
          {product !== undefined && product.map((item) =>
          <div key={item.id} className="relative flex h-full w-full cursor-pointer items-center justify-between gap-x-3 rounded-xl bg-base-100 p-3 transition-all ease-in-out md:p-4">
            <div className="flex h-full flex-1 flex-col justify-between text-sm md:gap-y-3 text-base-content">
              <h6 className="text-xs font-semibold leading-normal md:text-sm md:leading-tight">{item.nama_produk}</h6>
              <div className="mt-2 md:mt-0">
                <p className="text-xs font-light line-through">{IDR.format(Number(item.price)+5000)}</p>
                <p className="md:text-md text-xs font-light">{IDR.format(item.price)}</p>
              </div>
            </div>
            <div className="relative mr-1 h-6 w-6 md:mr-0 md:h-8 md:w-8">
              <img src={vite} alt="icon" loading="lazy" className="absolute w-full h-full" />
            </div>
          </div>
          )}
        </div>
  )
}


export default ProductList