import { useState } from "react"
import vite from "/vite.svg"

const product = {
  'Mobile Legends': {
    product: [{
      name: '5 Diamonds',
      price: '1500'
    },{
      name: '14 Diamonds',
      price: '1500'
    },{
      name: '28 Diamonds',
      price: '1500'
    },{
      name: '36 Diamonds',
      price: '1500'
    },{
      name: '44 Diamonds',
      price: '1500'
    }],
    types: ['Mobile Legends New', 'Mobile Legend SM']
    }
  ,
  'Free Fire': {
    product: [{
      name: '5 Free Fire',
      price: '1500'
    },{
      name: '14 Free Fire',
      price: '1500'
    },{
      name: '28 Free Fire',
      price: '1500'
    },{
      name: '36 Free Fire',
      price: '1500'
    },{
      name: '44 Free Fire',
      price: '1500'
    }],
    // types: ['FF', 'FF MAX']
  }
}

const IDR = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  maximumFractionDigits: 0
})

const ProductList = ({ name }) => {
  const [productType, setProductType] = useState(0)
  
  return(
      <div>

        <div className="py-4 flex flex-nowrap space-x-2 xl:space-x-4 overflow-x-auto text-xs xl:text-base">
          {(product[name] !== undefined && product[name].types !== undefined) && product[name].types.map((type, id) =>
            <button key={id} onClick={() => setProductType(id)} className={`${productType == id && '!bg-secondary !text-secondary-content'} border-2 border-secondary text-secondary rounded-full px-4 xl:px-6 py-1.5 xl:py-2 whitespace-nowrap`}>{type}</button>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-4">
          {product[name] !== undefined && product[name].product.map((item, id) =>
          <div key={id} className="relative flex h-full w-full cursor-pointer items-center justify-between gap-x-3 rounded-xl bg-base-100 p-3 transition-all ease-in-out md:p-4">
            <div className="flex h-full flex-1 flex-col justify-between text-sm md:gap-y-3 text-base-content">
              <h6 className="text-xs font-semibold leading-normal md:text-sm md:leading-tight">{item.name}</h6>
              <div className="mt-2 md:mt-0">
                <p className="text-xs font-light text-ribbon-foreground line-through">{IDR.format(item.price)}</p>
                <p className="md:text-md text-xs font-light">{IDR.format(item.price)}</p>
              </div>
            </div>
            <div className="relative mr-1 h-6 w-6 md:mr-0 md:h-8 md:w-8">
              <img src={vite} alt="icon" loading="lazy" className="absolute w-full h-full" />
            </div>
          </div>
          )}
        </div>
      </div>
  )
}


export default ProductList