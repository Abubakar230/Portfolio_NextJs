import { Hero } from '@/components/hero'
import Hero2 from '@/components/hero2'
import Skills from '@/components/skills'
import Workprocess from '@/components/workprocess'
import React from 'react'

function page() {
  return (
    <div>
      <Hero/>
      <Hero2/>
      <Workprocess/>
      <Skills/>
    </div>
  )
}

export default page
