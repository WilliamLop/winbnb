"use client";
import Card from "@/components/card";
import Image from "next/image";
import { useState } from 'react';
import Header from "@/components/header";
import { motion } from 'framer-motion';


export default function Home() {

  const [search, setSearch] = useState('');

  const handleSearchChange = (value) => {
    setSearch(value); 
  };

  return (
    <>
      <Header handleSearchChange={handleSearchChange}/>

      <main className="">
        <motion.section className="w-[90%] max-w-[1250px] mx-auto mt-6"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: "0", opacity: 1 }}
          transition={{ delay: 0.145 }}>
          <article className="flex items-center justify-between">
            <h1 className="text-xl font-bold">Stays in Finland</h1>
            <p className="font-medium">12+ stays</p>
          </article>

          <Card search={search || ''}/>
        </motion.section>
      </main>
    </>
  );
}
