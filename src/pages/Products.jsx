import React, { useContext, useState, useEffect } from "react";
import { Ctx } from "../data/Context";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Products = () => {
    const { data } = useContext(Ctx);
    const categoryFilters = [" ", "Clothes", "Footwear", "Accessories"];
    const [categoryFilter, setCategoryFilter] = useState("")
    const [products, setProducts] = useState(data);
    const { id } = useParams();






    useEffect(() => {
        if (categoryFilter !== "") {
            setProducts(data.filter(obj => obj.category === categoryFilter))

        }
    }, [categoryFilter])

    return (

        <div id="products-filter">
            <div id="filter-section" className="w-[1200px] h-80 border rounded-3xl border-slate-900 m-auto mb-9 p-10">
                <div className="filter-by-cat flex flex-col gap-2 w-fit">
                    <label htmlFor="categoryFilter">Select a Category</label>
                    <select aria-placeholder="Select" className="p-2 border rounded-sm" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} id="categoryFilter">

                        {
                            categoryFilters.map(filter => <option value={filter}>{filter}</option>)
                        }
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-3 justify-around gap-5 w-[1200px] m-auto">
                {
                    products.map(obj => (
                        <div key={obj.id} className="flex flex-col w-fit p-3 gap-5 m-auto bg-black rounded-lg items-center cursor-pointer">
                            <img className="h-60 w-64 object-fit rounded-md" src={obj.image} alt={obj.id} />
                            <h4 className="text-white">{obj.category}</h4>
                            <h2 className="text-white align-center w-[140px]">{obj.name}</h2>
                            <h1 className="text-[#ABE100] font-bold text-xl">{obj.price} MDL</h1>
                            <div className="flex gap-6">
                                <button id="primary" className="text-white">Add to Cart</button>
                                <button id="secondary" className="text-white">Buy Now</button>
                            </div>
                        </div>
                    ))
                }
            </div >
        </div >
    )
}

export default Products