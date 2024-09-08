'use client'
import Image from 'next/image'

import { BackgroundGradient } from './ui/background-gradient';

function Hero2() {
    return (
        <div className="p-5">

            <div className="flex my-16 flex-col text-center">
                <h1 className="text-gray-300 text-base md:text-lg">SPECIALITY</h1>
                <h2 className="text-3xl md:text-5xl font-extrabold p-2">My <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 bg-clip-text text-transparent">specialities</span></h2>
                <p className="text-gray-300 text-sm md:text-lg p-2">I am a skilled software developer with experience in JavaScript, and specialities in React.js and Next.js.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 m-16 ">
                <BackgroundGradient className="rounded-[22px] max-w-72 w-72 sm:w-auto p-2 sm:p-10 bg-white dark:bg-zinc-900">
                    <div className="p-4 sm:p-6 flex items-center flex-col text-center text-grow">
                        <Image
                            className=" "
                            src="/pngegg (1).png"
                            alt="Picture of the author"
                            width={200}
                            height={150}
                            quality={100}
                        />
                        <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>Web developer</p>
                        <p className='text-base text-neutral-600 dark:text-neutral-400 flex-grow'>I am a skilled frontend developer with experitise in HTML, CSS and JavaScript advanced architectural patterns.</p>
                    </div>
                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] max-w-72 w-72 sm:w-auto p-2 sm:p-10 bg-white dark:bg-zinc-900">
                    <div className="p-4 sm:p-6 flex flex-col items-center text-center text-grow">
                        <Image
                            // className="max-sm:hidden "
                            src="/pngegg (2).png"
                            alt="Picture of the author"
                            width={61}
                            height={61}
                            quality={100}
                        />
                        <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>React.js developer</p>
                        <p className='text-base text-neutral-600 dark:text-neutral-400 flex-grow'>Advanced skills in React.js for building dynamic web applications. Expertise in Redux state management.</p>
                    </div>
                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] max-w-72 w-72 sm:w-auto p-2 sm:p-10 bg-white dark:bg-zinc-900">
                    <div className="p-4 sm:p-6 flex items-center flex-col text-center text-grow">
                        <Image
                            // className="max-sm:hidden "
                            src="/pngwing.com.png"
                            alt="Picture of the author"
                            width={74}
                            height={74}
                            quality={100}
                        />
                        <p className='text-lg sm:text-xl text-black mt-8 mb-2 dark:text-neutral-200'>Tailwind CSS</p>
                        <p className='text-base text-neutral-600 dark:text-neutral-400 flex-grow'>Ability to create responsive layouts for diverse screen sizes. Skillful use of Tailwind CSS to streamline and enhance UI styling.</p>
                    </div>
                </BackgroundGradient>
                <BackgroundGradient className="rounded-[22px] max-w-72 w-72 sm:w-auto p-2 sm:p-10 bg-white dark:bg-zinc-900">
                    <div className="p-4 sm:p-6 flex items-center flex-col text-center text-grow">
                        <Image
                            // className="max-sm:hidden "
                            src="/1.jpeg"
                            alt="Picture of the author"
                            width={61}
                            height={61}
                            quality={100}
                        />
                        <p className='text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>Next.js developer</p>
                        <p className='text-base text-neutral-600 dark:text-neutral-400 flex-grow'>Advanced skills in Next.js for building dynamic web applications. Expertise in Redux state management.</p>
                    </div>
                </BackgroundGradient>
            </div>
        </div>
    )
}

export default Hero2

