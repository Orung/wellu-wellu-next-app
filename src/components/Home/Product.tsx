import React from 'react'
import StarIcon from '../Icons/StarIcon';
import Image from 'next/image';

const Product = () => {
    return (
        <div>
            <section className="product-tab">
                <div className="bg-[#447B02] py-3 flex md:items-center">
                    <div className="md:container m-auto md:px-0 px-4">
                        <h3 className="text-tab-text  text-[24px] md:text-[32px] text-[#ffff] md:px-0 px-4 ">Top selling products</h3>
                    </div>
                </div>
                <div className="md:container m-auto mt-[5rem] md:px-0 px-5">
                    <h2 className="text-[24px] mb-5">Energy Booster</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 items-center justify-center gap-3">
                        <div className="border bg-[#FAFAFA] md:w-[302px] flex flex-col justify-center py-5 px-5 ">
                            <div className=" mt-5 mb-5 w-[200px] h-[200px] flex justify-center items-center m-auto">
                                <Image src="/images/oral.png" alt='oral' className='w-full h-full object-fill' width={200} height={200} />
                            </div>
                            <div className="flex gap-4 items-center justify-between">
                                <p className="text-[14px]">Diabetes Regulator Powder</p>
                                <p className="text-[#447B02] flex gap-1 items-center"><svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.166992 4H1.50033V0H2.83366L5.11366 4H8.16699V0H9.50033V4H10.8337V5.33333H9.50033V6.66667H10.8337V8H9.50033V12H8.16699L5.88033 8H2.83366V12H1.50033V8H0.166992V6.66667H1.50033V5.33333H0.166992V4ZM2.83366 4H3.58699L2.83366 2.68667V4ZM2.83366 5.33333V6.66667H5.11366L4.35366 5.33333H2.83366ZM8.16699 9.33333V8H7.40033L8.16699 9.33333ZM5.87366 5.33333L6.64033 6.66667H8.16699V5.33333H5.87366Z" fill="#447B02" />
                                </svg>
                                    3000
                                </p>
                            </div>
                            <div className="flex gap-11 justify-between items-center mt-5">
                                <div className='flex text-[#ffda1c]'>
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                                <p>10 Reviews</p>
                            </div> 
                            <div className="mt-[3rem]">
                                <button className="bg-[#447B02] text-[#FFFF] text-[11px] rounded-md md:w-4/12 p-3">Add to Cart</button>
                            </div>
                        </div> 
                    </div>

                </div>


            </section>

        </div>
    )
}

export default Product
