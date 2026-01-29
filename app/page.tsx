'use client'

import { useState } from 'react'
import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'
import { Profile } from '../components/profile'
import { Experience } from '../components/experience'
import { Education } from '../components/education'
import { Organization } from '../components/organization'
import { HardSkills } from '../components/Hardskills'
import { SoftSkills } from '@/components/Softskils'
import { Certificates } from '../components/certificates'
import { Expertise } from '../components/expertise'
import { Projects } from '../components/projects'
import { Contact } from '../components/contact'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false) // Default closed on mobile

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Backdrop overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar - overlay on mobile, flex item on desktop */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-50 w-64 lg:flex-shrink-0
        transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <Sidebar />
      </div>

      {/* Main content - full width on mobile, flex-1 on desktop */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 pt-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Profile />
            <Expertise />
            <Experience />
            <Education />
            <Organization />
            <HardSkills />
            <SoftSkills />
            <Certificates />
            <Projects />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  )
}

