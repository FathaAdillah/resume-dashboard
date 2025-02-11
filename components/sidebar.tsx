import { Home, Briefcase, GraduationCap, Code, Zap, Contact2Icon, FolderTree, ShieldCheck, Users2 } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="bg-blue-500 text-white h-full min-h-screen p-4 rounded-tr-2xl transition-all duration-300 ease-in-out">
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#profile" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
              <Home className="h-5 w-5" />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="#expertise" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
              <Zap className="h-5 w-5" />
              <span>Expertise</span>
            </a>
          </li>
          <li>
            <a href="#experience" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
              <Briefcase className="h-5 w-5" />
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a href="#education" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
              <GraduationCap className="h-5 w-5" />
              <span>Education</span>
            </a>
          </li>
          <li>
            <a href="#organization" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
              <Users2 className="h-5 w-5" />
              <span>Organization</span>
            </a>
          </li>
          <li>
            <a href="#skills" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
              <Code className="h-5 w-5" />
              <span>Hard Skills</span>
            </a>
          </li>
          <li>
            <a href="#HardSkills" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
              <Code className="h-5 w-5" />
              <span>Soft Skills</span>
            </a>
          </li>
          <li>
            <a href="#certificates" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
              <ShieldCheck className="h-5 w-5" />
              <span>Certificates</span>
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
              <FolderTree className="h-5 w-5" />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="flex items-center space-x-2 p-2 rounded hover:bg-blue-600">
              <Contact2Icon className="h-5 w-5" />
              <span>Contact Me</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

