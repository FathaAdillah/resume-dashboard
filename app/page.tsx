'use client'

import { useState } from 'react'
import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar'
import { Profile } from '../components/profile'
import { Experience } from '../components/experience'
import { Education } from '../components/education'
import { Organization } from '../components/organization'
import { Skills } from '../components/skills'
import { Certificates } from '../components/certificates'
import { Expertise } from '../components/expertise'
import { Projects } from '../components/projects'
import { Contact } from '../components/contact'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 ease-in-out overflow-hidden`}>
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 pt-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Profile />
            <Expertise />
            <Experience />
            <Education />
            <Organization />
            <Skills />
            <Certificates />
            <Projects />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  )
}

