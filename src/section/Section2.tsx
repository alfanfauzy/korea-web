import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="-mt-[1px] py-10 bg-black text-center w-full">
      <div className="relative w-fit mx-auto my-16">
        <div className="-top-1 -left-4 absolute bg-gradient-border rounded-full h-3 w-3" />
        <h1 className="text-white uppercase desktop:text-4xl text-3xl font-bold">
          Previous Works
        </h1>
      </div>
      <div className="flex flex-col desktop:flex-row w-full ">
        <div className="relative  grid grid-cols-2">
          <Image
            className="object-contain"
            src="/assets/image-left-1.jpeg"
            alt="image-left-1"
            priority
            width={400}
            height={300}
          />
          <Image
            src="/assets/image-left-2.jpeg"
            alt="image-left-2"
            priority
            width={400}
            height={300}
          />
          <Image
            src="/assets/image-left-3.jpeg"
            alt="image-left-3"
            priority
            width={400}
            height={300}
          />
          <Image
            src="/assets/image-left-4.jpeg"
            alt="image-left-4"
            priority
            width={400}
            height={300}
          />
          <Image
            src="/assets/image-left-5.jpeg"
            alt="image-left-5"
            priority
            width={400}
            height={300}
          />
          <Image
            src="/assets/image-left-6.jpeg"
            alt="image-left-6"
            priority
            width={400}
            height={300}
          />
        </div>
        <div className="grid grid-cols-2">
          <Image
            src="/assets/image-right-1.jpeg"
            alt="image-right-1"
            priority
            sizes="(max-width: 400px) 100vw, (max-height:300px) 100vh"
            width={400}
            height={300}
          />
          <Image
            src="/assets/image-right-2.jpeg"
            alt="image-right-2"
            priority
            width={400}
            height={300}
          />
          <Image
            src="/assets/image-right-3.jpeg"
            alt="image-right-3"
            priority
            width={400}
            height={300}
          />
          <Image
            src="/assets/image-right-4.jpeg"
            alt="image-right-4"
            priority
            width={400}
            height={300}
          />
          <Image
            src="/assets/image-right-5.jpeg"
            alt="image-right-5"
            priority
            width={400}
            height={300}
          />
          <Image
            src="/assets/image-right-6.jpeg"
            alt="image-right-6"
            priority
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
