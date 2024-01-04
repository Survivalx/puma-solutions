import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";


const Header = () => {
    return (
        <div>
            <header className='flex justify-around p-6 items-center'>
                <Link to="/" id="logo">
                    <img className='h-14' src="/puma.svg" alt="" />
                </Link>
                <div className="left-heading flex gap-12">
                    <div className="menu flex align-center gap-6 ">
                        <Link className='hover:text-[#ABC100]' to="/Products">Products</Link>
                        <Link className='hover:text-[#ABC100]' to="/Contact">Contact</Link>
                        <Link to="/Cart"><AiOutlineShoppingCart className='w-6 h-6 hover:text-[#ABC100]' /></Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header