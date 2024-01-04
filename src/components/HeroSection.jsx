import React from 'react'

const HeroSection = () => {
    return (
        <div className='w-[1200px] m-auto flex gap-auto justify-between'>
            <div id="offer" className='mt-20 flex flex-col gap-8'>
                <div className="image-switch flex row-auto gap-4">
                    <button id="circle" className='active'>01</button>
                    <button id="circle">02</button>
                    <button id="circle">03</button>
                </div>
                <div id="offer-text">
                    <h1 className='text-7xl'>Protecting the future of sport</h1>
                </div>
                <button id="primary-2">More Products</button>
            </div>
            <div id="product-hero">
                <img className='w-[450px] rounded-3xl' src="./public/pumasolutions-hero.jpg" alt="" />
                <div id="product-description" className='w-[450px] flex flex-row justify-between mt-10'>
                    <div id="shoe">
                        <h1 className='font-bold text-lg'>Vivid Lime Green Puma</h1>
                        <h2 className='text-gray-700'>Women running shoes</h2>
                    </div>
                    <div id="shoe-info">
                        <h1 className='text-2xl'>$250</h1>
                        <a href="/Products" className='text-[#5e7419] hover:text-[#121607]'>View Details</a>
                    </div>
                </div>
            </div>
            <div id="reveal-buttons" className='mt-40'>
                <div id="reveal-button" className='flex flex-row w-64 h-20 m-auto gap-2 border-slate-700 border p-1 justify-items-center rounded-2xl'>
                    <img className='rounded-2xl' src="./public/puma2.jpg" alt="" />
                    <div id="reveal-text" className='pt-2'>
                        <h1 className='font-bold text-[18px]'>Aurora Deep Sky</h1>
                        <h1>Women running shoes</h1>
                    </div>
                </div>
                <div id="reveal-button" className='flex flex-row w-64 h-20 m-auto mt-6 gap-2 border-slate-700 border p-1 justify-items-center rounded-2xl'>
                    <img className='rounded-2xl' src="./public/pink.jpg" alt="" />
                    <div id="reveal-text" className='pt-2'>
                        <h1 className='font-bold text-[18px]'>Pink Sneakers</h1>
                        <h1>Women running shoes</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection