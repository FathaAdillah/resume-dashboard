import { Home, Briefcase, GraduationCap, Code, Zap, Contact2Icon, FolderTree, ShieldCheck, Users2 } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="bg-secondary-900 text-secondary-100 h-screen p-6 rounded-tr-3xl shadow-2xl transition-all duration-300 ease-in-out flex flex-col overflow-y-auto">
      <div className="mb-8 px-2">
        <h1 className="text-2xl font-bold text-white tracking-wider">RESUME<span className="text-primary-500">.</span></h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-3">
          {[
            { href: "#profile", icon: Home, label: "Profile" },
            { href: "#expertise", icon: Zap, label: "Expertise" },
            { href: "#experience", icon: Briefcase, label: "Experience" },
            { href: "#education", icon: GraduationCap, label: "Education" },
            { href: "#organization", icon: Users2, label: "Organization" },
            { href: "#skills", icon: Code, label: "Hard Skills" },
            { href: "#SoftSkills", icon: Code, label: "Soft Skills" },
            { href: "#certificates", icon: ShieldCheck, label: "Certificates" },
            { href: "#projects", icon: FolderTree, label: "Projects" },
            { href: "#contact", icon: Contact2Icon, label: "Contact Me" },
          ].map((item) => (
            <li key={item.label}>
              <a href={item.href} className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 hover:bg-secondary-800 hover:text-primary-400 group">
                <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto pt-6 border-t border-secondary-800 text-xs text-secondary-500 text-center">
        © 2025 Resume Dashboard
      </div>
    </aside>
  )
}

