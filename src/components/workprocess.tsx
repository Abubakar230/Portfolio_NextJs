'use client'
import { HoverBorderGradient } from "../components/ui/hover-border-gradient";
// import Image from "next/image";

function Workprocess() {
    return (
        <div className="p-16 h-auto m-5 bg-[url('../../public/bg1.jpg')]">
            <div className="p-5 m-5]">
                <div className="flex my-5 flex-col text-center">
                    <h1 className="text-gray-300 text-base md:text-lg">ABOUT ME</h1>
                    <h2 className="text-3xl md:text-5xl font-extrabold p-2">My <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 bg-clip-text text-transparent">work process</span></h2>
                    <p className="text-gray-300 text-sm md:text-lg p-2">My work process seamlessly blends design and development, ensuring intuitive user experiences <br />through thoughtful planning, iterative prototyping, and meticulous coding.</p>
                </div>
                <div className="grid grid-cols-1 m-28 my-16 items-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 ">
                    <div className="flex justify-center rotate-45 text-center">
                        <HoverBorderGradient containerClassName="rounded m-10" as="button"
                            className="dark:bg-black text-base h-36 w-36 p-10 bg-white text-black dark:text-white flex items-center text-center justify-center space-x-2">
                            <span className="-rotate-45" >Requirement<br /> Gathering</span>
                        </HoverBorderGradient>
                    </div>
                    <div className="flex justify-center rotate-45 text-center">
                        <HoverBorderGradient containerClassName="rounded m-10" as="button"
                            className="dark:bg-black text-base h-36 w-36 p-10 bg-white text-black dark:text-white flex items-center text-center justify-center space-x-2">
                            <span className="-rotate-45" >Environment<br /> Setup</span>
                        </HoverBorderGradient>
                    </div>
                    <div className="flex justify-center rotate-45 text-center">
                        <HoverBorderGradient containerClassName="rounded m-10" as="button"
                            className="dark:bg-black text-base h-36 w-36 p-10 bg-white text-black dark:text-white flex items-center text-center justify-center space-x-2">
                            <span className="-rotate-45" >Roadmap <br />Creation</span>
                        </HoverBorderGradient>
                    </div>
                    <div className="flex justify-center rotate-45 text-center">
                        <HoverBorderGradient containerClassName="rounded m-10" as="button"
                            className="dark:bg-black text-base h-36 w-36 p-10 bg-white text-black dark:text-white flex items-center text-center justify-center space-x-2">
                            <span className="-rotate-45" >Planning and Design</span>
                        </HoverBorderGradient>
                    </div>
                    <div className="flex justify-center rotate-45 text-center">
                        <HoverBorderGradient containerClassName="rounded m-10" as="button"
                            className="dark:bg-black text-base h-36 w-36 p-10 bg-white text-black dark:text-white flex items-center text-center justify-center space-x-2">
                            <span className="-rotate-45" >Programming and<br />Developing</span>
                        </HoverBorderGradient>
                    </div>
                    <div className="flex justify-center rotate-45 text-center">
                        <HoverBorderGradient containerClassName="rounded m-10" as="button"
                            className="dark:bg-black text-base h-36 w-36 p-10 bg-white text-black dark:text-white flex items-center text-center justify-center space-x-2">
                            <span className="-rotate-45" >Testing and<br />Deployment</span>
                        </HoverBorderGradient>
                    </div>
                    <div className="flex justify-center rotate-45 text-center">
                        <HoverBorderGradient containerClassName="rounded m-10" as="button"
                            className="dark:bg-black text-base h-36 w-36 p-10 bg-white text-black dark:text-white flex items-center text-center justify-center space-x-2">
                            <span className="-rotate-45" >App Maintaince</span>
                        </HoverBorderGradient>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workprocess
