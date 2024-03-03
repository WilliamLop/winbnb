"use client";

import React, { useState, useEffect } from 'react';
import logo from '../public/logo.svg';
import Image from 'next/image';
import { ImSearch } from "react-icons/im";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';




const Header = ({ handleSearchChange }) => {
    
    const handleInputChange = (e) => {
        const value = e.target.value;
        handleSearchChange(value);
    }
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleToggleNav = () => {
        setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
    };

    const handleCloseNav = () => {
        setIsNavOpen(false);
    };

    useEffect(() => {
        // Función para deshabilitar el scroll
        const disableScroll = () => {
            document.body.style.overflow = 'hidden';
        };

        // Función para habilitar el scroll
        const enableScroll = () => {
            document.body.style.overflow = 'auto';
        };

        // Deshabilitar el scroll cuando el nav está abierto
        if (isNavOpen) {
            disableScroll();
        } else {
            enableScroll();
        }

        // Habilitar el scroll al desmontar el componente
        return () => {
            enableScroll();
        };
    }, [isNavOpen]);


   
    return (
        <motion.header className="w-full relative z-50"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0", opacity: 1 }}
        transition={{ delay: 0.145 }}>
            <div className="w-[90%] mx-auto py-4  sm:py-8 grid sm:grid-cols-[150px,400px] items-center justify-between
        max-w-[1250px]">
                <Image src={logo} alt="windbnb" className="w-[120px] md:w-[150px]" />

                {/* Buscadores */}
                <div className="grid grid-cols-[1fr,1fr,50px] items-center bg-white drop-shadow-lg w-[90%] mx-auto mt-8 sm:mt-0
                rounded-xl text-sm sm:mx-none sm:self-end sm:w-full 
                ">
                    <input type="text"
                        placeholder="Location"
                        className="border border-black/5 w-full p-4 rounded-ss-xl rounded-bl-xl"
                        onChange={handleInputChange}
                        />
                    <input type="text"
                        placeholder="Add guests"
                        className="border border-black/5 w-full p-4 "
                        onChange={handleInputChange}
                    />
                    <button className="hover:bg-gray-200 h-full rounded-tr-xl rounded-br-xl group transition-all
                    opacity-70"
                        onClick={handleToggleNav}>
                        <ImSearch className="text-orangeLight mx-auto text-lg " />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isNavOpen && (
                    <motion.div className="absolute inset-0 w-full h-screen bg-black/45" 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}>
                            <motion.div className={`bg-white absolute h-[28rem] pt-20 -z-[999px]
                            duration-300 w-full`}
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '-100%' }}>
                                <div className="flex items-center justify-between mb-8 w-[90%] mx-auto
                                sm:justify-end max-w-[1300px]">
                                    <p className="sm:hidden font-bold">Edit </p>
                                    <button className="text-lg group transition
                                    bg-black text-white hover:bg-red-500 rounded-full p-1
                                    hover:scale-110"
                                        onClick={isNavOpen ? handleCloseNav : handleToggleNav}>
                                        <IoClose className="group-hover:text-white" />
                                    </button>
                                </div>

                                <div className="grid h-[100px] sm:grid-cols-[1fr,1fr,1fr] items-center bg-white drop-shadow-lg w-[90%] mx-auto mt-8 sm:mt-0
                                    rounded-xl text-sm sm:mx-none sm:self-end relative  max-w-[1300px] sm:h-[60px] z-20
                                    ">
                                    
                                    <div className="h-full relative border border-black/5">
                                        <label htmlFor="" className="absolute left-4 top-2 uppercase text-[10px]
                                            font-semibold">Location</label>
                                        <input type="text"
                                            placeholder="Helsinki, Finland"
                                            className="w-full px-4 h-full rounded-ss-xl rounded-bl-xl pt-6 sm:pb-0 pb-4
                                            sm:pt-4"
                                        />
                                    </div>

                                    <div className="h-full relative border border-black/5">
                                        <label htmlFor="" className="absolute left-4 top-2 uppercase text-[10px]
                                            font-semibold">Guests</label>
                                        <input type="text"
                                            placeholder="Add guests"
                                            className="w-full px-4 pt-6 sm:pt-4 h-full sm:pb-0 pb-4" 
                                        />
                                    </div>

                                    <div className="w-full h-full flex items-center justify-center py-2 sm:pt-0 pt-16">
                                        <button className="hover:bg-gray-200 h-full rounded-xl group transition-all
                                            opacity-70 bg-red-600 flex items-center gap-2 px-6 text-white
                                            sm:py-0 py-3"
                                        >

                                            <ImSearch className="text-white mx-auto text-lg " />
                                            Search
                                        </button>
                                    </div>

                                </div>

                            </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.header>
    )
}

export default Header
