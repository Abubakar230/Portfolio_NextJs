'use client'

import Link from "next/link"



function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 mb-8 md:grid-cols-4 lg:grid-cols-7 gap-12 px-4 sm:px-6 lg:px-8">
            <div>
                <h2 className="font-semibold text-xl my-3 flex text-center justify-start">
                <Link href='/'>
            <div className="flex items-center">
              <span className="text-blue-500">🌀</span>
              <span className="ml-2">Abubakar</span>
            </div>
          </Link>
                </h2>
                <p className="m-2 flex text-start justify-start">I will be your frontend web developer in HTML, CSS, Bootstrap, JavaScript, ReactJS, NodeJS, and NextJS</p>
                {/* <p className="m-2 flex text-start justify-start">ReactJS Developer</p>
                <p className="m-2 flex text-start justify-start">NextJS Developer</p> */}
            </div>
            <div>
                <h2 className="font-semibold text-xl my-3 flex text-center justify-start">Quick Links</h2>
                <div>
                    <p className="m-2 flex text-start justify-start">Home</p>
                    <p className="m-2 flex text-start justify-start">Services</p>
                    <p className="m-2 flex text-start justify-start">Project</p>
                    <p className="m-2 flex text-start justify-start">About</p>
                    <p className="m-2 flex text-start justify-start">Contact</p>
                </div>
            </div>
            <div>
                <h2 className="font-semibold text-xl my-3 flex text-center justify-start">Servides</h2>
                <div>
                    <p className="m-2 flex text-start justify-start">Frontend</p>
                    <p className="m-2 flex text-start justify-start">React JS</p>
                    <p className="m-2 flex text-start justify-start">Next JS</p>
                    <p className="m-2 flex text-start justify-start">Responsive UI/UX</p>
                    <p className="m-2 flex text-start justify-start">App Maintaince</p>
                </div>
            </div>
            <div>
                <h2 className="font-semibold text-xl my-3 flex text-center justify-start">Pricing</h2>
                <div>
                    <p className="m-2 flex text-start justify-start">Pricing Overview</p>
                    <p className="m-2 flex text-start justify-start">Flexible Data</p>
                    <p className="m-2 flex text-start justify-start">High Volume Data</p>
                    <p className="m-2 flex text-start justify-start">Enterprise</p>
                </div>
            </div>
            <div>
                <h2 className="font-semibold text-xl my-3 flex text-center justify-start">Information</h2>
                <div>
                    <p className="m-2 flex text-start justify-start">Career</p>
                    <p className="m-2 flex text-start justify-start">Terms & Conditions</p>
                    <p className="m-2 flex text-start justify-start">Privacy Policy</p>
                    <p className="m-2 flex text-start justify-start">Cookies Policy</p>
                    <p className="m-2 flex text-start justify-start">Social Work</p>
                </div>
            </div>
            <div>
                <h2 className="font-semibold text-xl my-3 flex text-center justify-start">Social</h2>
                <div>
                    <p className="m-2 flex text-start justify-start">LinkedIn</p>
                    <p className="m-2 flex text-start justify-start">Github</p>
                    <p className="m-2 flex text-start justify-start">Fiverr</p>
                    <p className="m-2 flex text-start justify-start">Instagram</p>
                </div>
            </div>
            <div>
                <h2 className="font-semibold text-xl my-3 flex text-center justify-start">Contact Us</h2>
                <div>
                    <p className="m-2 flex text-start justify-start">+92 300-0000000</p>
                    <p className="m-2 flex text-start justify-start">info@gmail.com</p>
                    <p className="m-2 flex text-start justify-start">Lahore, Punjab, Pakistan</p>
                </div>
            </div>
        </div>
        <hr />
        <p className="text-center mt-5 -mb-5 text-sm">&#169; 2024 Frontend Developer. All rights reserved</p>
    </footer>
  )
}

export default Footer
