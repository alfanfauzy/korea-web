import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        className="object-cover"
        src="/assets/hero.png"
        alt="Hero Section"
        width={1920}
        height={934}
      />
      <div className="desktop:block absolute right-10 top-20 hidden">
        <Image
          src="/assets/icon/hero-icon.svg"
          alt="Hero Section"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Hero;
