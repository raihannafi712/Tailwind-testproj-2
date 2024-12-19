import React from 'react'
import bg from "../assets/ban.png"
import circle from "../assets/circle.png"
import circlew from "../assets/circlew.png"


const Banner = () => {
  return (
    <section className="bg-no-repeat bg-center bg-cover relative z-[1] after:absolute after:left-0 after:top-0 after:content-[''] after:h-full after:w-full after:bg-[#00000056] after:z-[-1]" style={{ backgroundImage: `url(${bg})`}}>
        <div className='max-w-container mx-auto'>
            <div className='items-center text-center'>
                <h3 className='pt-[224px] pb-[51px] text-white font-inter font-semibold text-[75px] text-center '>
                    We Help brands with high quality services
                </h3>
                <p className='pb-[40px] text-white font-inter font-normal text-[16px] text-center ' >There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don't look.</p>
                <div className='pb-[99px]'>
                    <a className='bg-[#6A4DF4] rounded-xl px-[42px] py-4  text-white hover:bg-black hover:duration-700 hover:ease-in-out font-inter font-semibold text-[20px] ' href="#">Get Started</a>
                </div>
                <div className='z-10 flex justify-center cursor-pointer pb-14 '>
                    <img className='px-[2px] ' src={circle} alt="circle" />
                    <img className='px-[2px] ' src={circle} alt="circle" />
                    <img className='px-[2px] ' src={circlew} alt="circle" />
                    <img className='px-[2px] ' src={circle} alt="circle" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner