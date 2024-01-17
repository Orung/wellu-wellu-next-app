'use client'
import { useEffect, useState } from "react";
import logo from "/src/assets/Icons/logo.png";
import SearchIcon from "../Icons/SearchIcon";
import UserIcon from "../Icons/UserIcon";
import CaretDownIcon from "../Icons/CaretDownIcon";
import LoveIcon from "../Icons/LoveIcon";
import CartIcon from "../Icons/CartIcon";
import Image from "next/image";
import FormInput from "../FormInput";
import Button from "../Button";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
// import { useState } from "react"; 
const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Function to handle the scroll event
        const handleScroll = () => {
            if (window.scrollY > 15) {
                // If the user has scrolled, set the 'scrolled' state to true
                setScrolled(true);
            } else {
                // If the user is at the top, set the 'scrolled' state to false
                setScrolled(false);
            }
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener("scroll", handleScroll);

        // Clean up by removing the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navbarClass = scrolled ? "bg-[white] shadow-lg border-bottom" : "border-bottom-2";
    return (
        <div className={`py-5 hidden md:block md:fixed z-[9999] top-0 w-full ${navbarClass}`}>
            <nav className="flex gap-[3rem] items-center justify-between container  m-auto ">
                <div className="logo">
                    {/* <img src={logo} alt="Logo" /> */}
                    <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
                </div>
                <ul className="flex gap-[2rem]">
                    <li><a href="/">Home</a></li>
                    <li><a href="/services">Product</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
                <div className="w-4/12 flex bg-white justify-between rounded-lg items-center pl-5 border-2">
                    <SearchIcon />
                    <div className="w-full">
                        <FormInput type="text" style="border-0 h-[2rem] w-full" />
                    </div>
                    <Button text='' type="submit" position="center" styles="w-[50px] m-auto">
                        <div className="flex items-center justify-center text-[white] font-bold">
                            <ArrowRightIcon />
                        </div>
                    </Button>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer border gap-2 p-2">
                    <UserIcon />
                    <p>Account</p>
                    <CaretDownIcon />
                </div>
                <div>
                    <LoveIcon />
                </div>
                <div>
                    <a href="/cart"> <CartIcon /></a>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;