import React from 'react'
import CallIcon from '../Icons/CallIcon'
import LockIcon from '../Icons/LockIcon'
import TrustIcon from '../Icons/TrustIcon'
import Button from '../Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <section className="pt-[5rem] pb-[5rem]" style={{ background: 'linear-gradient(45deg, rgb(255, 255, 255), rgb(234 247 232), rgb(68, 123, 2))' }} >
                <div className=" container m-auto pt-[5rem] md:grid grid-cols-2" >
                    <div className="pt-10 ">
                        <h1 className="text-3xl font-bold text-[#447B02] text-[50px] md:text-[70px] leading-[120px]">WELLU WELLU Wellness Centre </h1>
                        <p className="text-[14px] md:text-[24px] font-Mulish leading-8 text-[#2F2F2F]" >
                            …Providing easy access to trusted Natural (Non-Synthetic, Herbal, Botanical or Phytomedicines) products and scarce Drugs for maximal Health Care.
                        </p>
                        <Button text="Explore" type='button' position='left' styles='text-[white] mt-5' />
                    </div>
                    <div className="my-[5rem] md:mt-0">
                        <Image src="/images/plants.png" className='w-full' alt='plant herb' width={1000} height={1000} />
                    </div>
                </div>

                <div className="md:container m-auto md:flex mt-11 gap-11 pb-[2rem]">
                    <div className="flex gap-3 md:w-[236] mb-3 items-start">
                        <div className='w-50 h-50 bg-[#447B02] flex items-center p-2 rounded-full text-white'>
                            <CallIcon />
                        </div>
                        <div>
                            <h4 className="text-[16px] leading-5 font-medium font-Mulish" >Customer service 24/7</h4>
                            <p className="text-tab">Lorem ipsum dolor sit amet consectetur. Mi metus risus.</p>
                        </div>
                    </div>

                    <div className="flex gap-3 md:w-[236] mb-3 items-start">
                    <div className='w-50 h-50 bg-[#447B02] flex items-center p-2 rounded-full text-white'>
                            <LockIcon />
                        </div>
                        <div>
                            <h4 className="text-[16px] leading-5 font-medium font-Mulish" >Secured payment</h4>
                            <p className="text-tab">Lorem ipsum dolor sit amet consectetur. Mi metus risus.</p>
                        </div>
                    </div>

                    <div className="flex gap-3 md:w-[236] mb-3 items-start">
                    <div className='w-50 h-50 bg-[#447B02] flex items-center p-2 rounded-full text-white'>
                            <TrustIcon />
                        </div>
                        <div className="w-[202] h-[47]">
                            <h6 className="text-[16px] leading-5 font-medium font-Mulish" >Trusted Services</h6>
                            <p className="text-tab">Lorem ipsum dolor sit amet consectetur. Mi metus risus.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero
