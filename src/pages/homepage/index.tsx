import Navbar from "@/section/Navbar";
import Section1 from "@/section/Section1";
import Section2 from "@/section/Section2";
import Section3 from "@/section/Section3";
import Section4 from "@/section/Section4";
import Image from "next/image";
import React, { useState } from "react";

const Homepage = () => {
    return (
        <main
            className={`flex min-h-screen max-h-screen flex-col items-center justify-between bg-black`}
        >
            <Navbar />

            <Image
                className="object-cover"
                src="/assets/hero.png"
                alt="Hero Section"
                width={1920}
                height={934}
            />

            <Section1 />

            <Section2 />

            <Section3 />

            <Section4 />
        </main>
    );
};

export default Homepage;
