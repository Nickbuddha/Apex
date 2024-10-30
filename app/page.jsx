"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Become from "@/components/Become";
import YourApex from "@/components/YourApex";
import Missions from "@/components/Missions";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import Cuidado from "@/components/Cuidado";
import Spinner from "@/components/Spinner"; 
import Listings from "@/components/Listings";
import Socials from "@/components/Socials";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500); // Simula 2 segundos de carga

        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Spinner />;
    }

    return (
        <main className="w-full bg-black overflow-hidden">
            <Header />
            <Hero />
            <Become />
            <YourApex />
            <Missions />
            <Roadmap />
            <Tokenomics />
            <Listings />
            <Socials />
            <Cuidado />
            
        </main>
    );
}
