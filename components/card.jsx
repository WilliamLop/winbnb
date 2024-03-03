import React from 'react';
import data from '../lib/stays.json';
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Card = ({ search }) => {

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
            y: 100,
        },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0,
            }
        }),
    }



    const filteredData = data.filter((item) => {
        const searchQueryLower = typeof search === 'string' ? search.toLowerCase() : '';
        const beds = typeof search === 'string' ? parseInt(search) : null;

        return (
            item.city.toLowerCase().includes(searchQueryLower) ||
            (beds && item.beds === beds)
        );
    });

    return (
        <motion.section className="grid gap-2 py-8 mb-4 -z-50"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0 }}
        >
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
                {filteredData.map((item, index) => (
                    <motion.li key={index} className="grid gap-2"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}>

                        <Image src={item.photo} alt={item.city} className="w-full h-[250px] rounded-2xl
                        object-cover"
                            width="300" height="300" />

                        <div className="flex justify-between items-center mt-2">
                            <div className="flex justify-between items-center gap-2">
                                <p className="uppercase border border-black text-xs rounded-full p-2
                                text-center font-semibold">
                                    Super host
                                </p>
                                <p className="">
                                    {item.type} {" . "}
                                    <span className=""> {item.beds} beds</span>
                                </p>
                            </div>
                            <p className="flex gap-2 items-center font-semibold">
                                <FaStar className="text-orange-400" />
                                {item.rating}
                            </p>
                        </div>

                        <h2 className="font-semibold">{item.title}</h2>

                    </motion.li>

                ))}
            </ul>
        </motion.section>
    )
}

export default Card