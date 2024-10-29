"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const products = [
    { id: 1, img1: "/carrousel/Mono-1.png" },
    { id: 2, img1: "/carrousel/MONKEY-01.png" },
    // { id: 3, img1: "/carrousel/mono-1.png" },
  ];

  const [count, setCount] = useState(0);
  const [tuple, setTuple] = useState([null, count]);

  useEffect(() => {
    if (tuple[1] !== count) {
      setTuple([tuple[1], count]);
    }
  }, [count, tuple]);

  let prev = tuple[0];
  let direction = count > prev ? 1 : -1;

  const handleClickNext = () => {
    setCount(count + 1 >= products.length ? 0 : count + 1);
  };

  const handleClickPrev = () => {
    setCount(count - 1 < 0 ? products.length - 1 : count - 1);
  };

  return (
    <div className="relative">
      {products.length > 1 && (
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
          <button onClick={handleClickPrev}>
            <Image
            src="/carrousel/left-row.png"
            width={35} 
            height={35}
            alt="text"
            className="max-w-none block md:hidden"
            />
            <Image
            src="/carrousel/left-row.png"
            width={50} 
            height={50}
            alt="text"
            className="max-w-none hidden md:block"
            />
          </button>
        </div>
      )}
      {products.length > 1 && (
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
          <button onClick={handleClickNext}>
          <Image
            src="/carrousel/right-row.png"
            width={35} 
            height={35}
            alt="text"
            className="max-w-none block md:hidden"
            />
          <Image
            src="/carrousel/right-row.png"
            width={50} 
            height={50}
            alt="text"
            className="max-w-none hidden md:block"
            />
          </button>
        </div>
      )}
      <div className="flex justify-center">
        <div className="relative flex h-[345px] md:h-[575px] lg:h-[485px] xl:h-[775px] w-[390px] lg:w-[400px] xl:w-[600px] items-center justify-center bg-gray-700 overflow-hidden">
          <AnimatePresence custom={direction}>
            {products && products.length > 0 && (
              <motion.div
                key={count}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute flex items-center justify-center"
              >
                <Image
                  src={products[count].img1}
                  width={152}
                  height={302}
                  alt={`Image ${products[count].id}`}
                  className="object-contain block md:hidden"
                />
                <Image
                  src={products[count].img1}
                  width={280}
                  height={580}
                  alt={`Image ${products[count].id}`}
                  className="object-contain hidden md:block lg:hidden"
                />
                <Image
                  src={products[count].img1}
                  width={244}
                  height={485}
                  alt={`Image ${products[count].id}`}
                  className="object-contain hidden lg:block xl:hidden"
                />
                <Image
                  src={products[count].img1}
                  width={383}
                  height={762}
                  alt={`Image ${products[count].id}`}
                  className="object-contain hidden xl:block"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
