import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from "@/variants";

const images = [
  '/backgrounds/7-Lagos.jpg', 
  '/backgrounds/Glaciares-1.png',
  '/backgrounds/Glaciares-2.jpg',
  '/backgrounds/Peninsula-Valdes-1.png', 
  '/backgrounds/Peninsula-Valdes-2.jpg', 
  '/backgrounds/Valle-de-Gondwana.png', 
  '/backgrounds/Villa-La-Angostura.png', 
  '/backgrounds/Volcan-Lanin.jpg', 
];

const Cuidado = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoaded(false); // Reinicia el estado de carga
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=' pt-[35px] lg:pt-[220px] pb-[50px] lg:pb-[220px]'>
      
    </div>
  );
};

export default Cuidado;
