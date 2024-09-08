'use client'
import Image from 'next/image'

function Skills() {
    return (
        <div className='-mt-9 p-5'>
            <div className="flex my-16 flex-col text-center">
                <h1 className="text-gray-300 text-base md:text-lg">SKILLS</h1>
                <h2 className="text-3xl md:text-5xl font-extrabold p-2">My <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-purple-600 bg-clip-text text-transparent">Frontend Skills</span></h2>
                <p className="text-gray-300 text-sm md:text-lg p-2">As a frontend developer, I specialize in creating efficient, accessible, and visually <br />appealing user interfaces, using modern frameworks and responsive design for high-performance web applications.</p>
            </div>
        </div>
    )
}

export default Skills
