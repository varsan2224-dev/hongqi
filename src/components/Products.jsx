import { products } from "../products"

function Products(){
    return (
        <div>
            <div className="flex justify-center w-full">
                <input type="text" className="bg-gray-700 w-[300px] rounded-xl text-white my-8" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3">
               {products.map((product) => {
                return (
                    <div className="flex justify-evenly items-center">
                        <div className="w-[200px] h-[300px] md:w-[300px] h-[300px] mx-2 my-4">
                        <img src={product.img} className="w- object-cover"  alt="" />
                        </div>
                    </div>
                )
               })}
            </div>
        </div>
    )
}

export default Products