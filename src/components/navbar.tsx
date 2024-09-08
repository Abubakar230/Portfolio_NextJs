"use client"

import * as React from "react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "React SPA Development",
    href: "/",
    description:
      "Build dynamic & interactive single-page apps.",
  },
  {
    title: "Next.js SEO Optimization",
    href: "/",
    description:
      "Improve search engine ranking for websites.",
  },
  {
    title: "High-Performance React UI",
    href: "/",
    description:
      " Craft fast-loading & responsive user interfaces.",
  },
  {
    title: "React Data Fetching",
    href: "/",
    description: "Implement efficient strategies for data access.",
  },
  {
    title: "Scalable Web App Development",
    href: "/",
    description:
      "Improving application performance, speed, and overall efficiency.",
  },
  {
    title: "Responsive UI/UX",
    href: "/",
    description:
      "Designing user-friendly, responsive, and visually appealing interfaces.",
  },
  {
    title: "App Maintenance",
    href: "/",
    description:
      "Offering continuous support, updates, and maintenance for applications.",
  },
]

const components1: { title: string; href: string; description: string }[] = [
  {
    title: "Portfolio",
    href: "/",
    description:
      "A showcase of MERN stack projects demonstrating full-stack expertise.",
  },
  {
    title: "Music Academy Project",
    href: "/",
    description:
      "Online platform for music education, lessons, and performance showcases.",
  },
  {
    title: "Ecommerce Store",
    href: "/",
    description: "An eCommerce store offers online shopping for various products.",
  },
  {
    title: "Shopper Ecommerce Store",
    href: "/",
    description:
      "Your ultimate destination for diverse online shopping.",
  },
  {
    title: "Amazon Ecommerce Clone",
    href: "/",
    description:
      "Replicate Amazon's robust, user-friendly online marketplace.",
  },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-gray-300 py-4">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="text-2xl font-bold">
          <Link href='/'>
            <div className="flex items-center">
              <span className="text-blue-500">🌀</span>
              <span className="ml-2">Abubakar</span>
            </div>
          </Link>
        </div>

        <Button className="block lg:hidden px-2 text-gray-500 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </Button>


        <div className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
          <div className="text-start lg:flex lg:mr-28 xl:mr-48 lg:items-center lg:text-left">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col justify-start items-start lg:flex-row ">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="mt-2 lg:mt-0 bg-black px-3 py-1 lg:px-4 lg:py-2 text-lg md:text-base">Home</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild className="w-[200px]">
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-700 to-purple-600 text-white p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 w-[170px] mt-2 text-lg font-medium">ReactJS / NextJS Developer</div>
                            <p className="text-sm leading-tight text-white text-muted-foreground">
                            Welcome to my profile! an IT Graduate and a certified frontend web developer with 2+ years of working experience in building and maintaining web applications.                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/" title="Introduction">
                        Experienced MERN stack developer available.
                      </ListItem>
                      <ListItem href="/" title="Specialities">
                        Building scalable and efficient web applications.
                      </ListItem>
                      <ListItem href="/docs/primitives/typography" title="My Work Process">
                        Develop, test, and deploy web applications.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="mt-2 lg:mt-0 bg-black px-2 py-1 lg:px-4 lg:py-2 text-lg md:text-base">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                  {/* <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]"> */}
                    <ul className="grid w-[280px] gap-3 p-4 sm:w-[500px] sm:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="mt-2 lg:mt-0 bg-black px-2 py-1 lg:px-4 lg:py-2 text-lg md:text-base">Projects</NavigationMenuTrigger>
                  <NavigationMenuContent>
                  <ul className="grid w-[280px] gap-3 p-4 sm:w-[500px] sm:grid-cols-2 lg:w-[600px] ">
                      {components1.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="mt-2 lg:mt-0 bg-black px-3 py-1 lg:px-4 lg:py-2 text-lg md:text-base">About</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[280px] gap-3 p-6 md:w-[400px] lg:w-[550px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild className="w-[200px]">
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-700 to-purple-600 text-white p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <div className="mb-2 sm:170 md:w-[230px] mt-2 text-lg font-medium">ReactJS / NextJS Developer</div>
                            <p className="text-sm leading-tight text-white text-muted-foreground">
                            Welcome to my profile! an IT Graduate and a certified frontend web developer with 2+ years of working experience in building and maintaining web applications. I specialize in HTML, CSS, Bootstrap, JavaScript, React JS, Node JS, and Next JS to create custom and user-friendly web experiences. Having developed the front end for 70+ websites, I’m prepared to deliver the same exceptional results for your project. My priority is to satisfy my clients. I will ensure your website will be good-looking, user-friendly, and fully responsive.                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/" title="About Me">
                        Frontend Developer with 2+ working experience.
                      </ListItem>
                      <ListItem href="/" title="Specialities">
                        Building scalable and efficient web applications.
                      </ListItem>
                      <ListItem href="/docs/primitives/typography" title="App Maintenance">
                        Offering continuous support, updates, and maintenance for applications.
                      </ListItem>
                      <ListItem href="/docs/primitives/typography" title="Responsive UI/UX">
                        Designing user-friendly, responsive, and visually appealing interfaces.
                      </ListItem>
                      <ListItem href="/docs/primitives/typography" title="My Work Process">
                        Develop, test, and deploy web applications.
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className="lg:mt-0 flex bg-black px-2 py-1 lg:px-4 lg:py-2 text-lg md:text-base">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="mt-4 lg:mt-0">
            <Link href="/discuss">
              <div className="bg-gradient-to-r from-blue-700 to-purple-800 text-white px-4 py-2 rounded-md">
                <span className="text-sm flex justify-center lg:text-base">Discuss for Projects</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
