'use client'
import Image from "next/image";
import { Vortex } from "./ui/vortex";
import Link from "next/link";

export function Hero() {
  return (
    <div className="w-100% mx-3 lg:mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex z-auto flex-col mt-auto py-20 sm:py-12 lg:py-0 px-2 md:px-10 w-full h-full"
        // className="flex  flex-col  px-2 md:px-10 -my-5 w-full h-full"
      >
        <div className="flex flex-row items-center justify-center">
            <div className=" mx-auto lg:mx-32">
            <h2 className="text-white text-5xl md:text-7xl font-bold">
           Hi, I&apos;m <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 bg-clip-text text-transparent">Abubakar</span>
        </h2>
        <p className="text-white text-xl md:text-3xl max-w-2xl mt-6 text-start">
          I develop Frontend Web Applictions, using <span className="text-lime-300">
            ReactJS / Next JS</span>
        </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Link href="/discuss">
              <div className="bg-gradient-to-r my-2 from-blue-700 to-purple-800 text-white px-4 py-2 rounded-md">
                <span className="text-xs flex justify-center sm:text-sm lg:text-base">Discuss for Projects</span>
              </div>
              <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white px-4 py-2 rounded-md">
                <span className="text-xs flex justify-center sm:text-sm lg:text-base">View Portfolio ✔</span>
              </div>
            </Link>
          </div>
        </div>

            
            <div>
            <Image
              className="max-sm:hidden"
              src="/22.png"
              alt="Picture of the author"
              width={500}
              height={500}
              quality={100}
            />

            </div>
        </div>
      </Vortex>
    </div>
  );
}
