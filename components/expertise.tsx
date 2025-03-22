import { Briefcase, Database, BarChart, Code, Server } from 'lucide-react'

const expertiseData = [
  {
    title: 'IT Project Management',
    icon: Briefcase,
    description: 'Experienced in managing complex IT projects from inception to delivery.'
  },
  {
    title: 'Software Developer',
    icon: Code,
    description: 'Skilled in web development using Laravel and React.'
  },  
  {
    title: 'System Implementor',
    icon: Server,
    description: 'Skilled in implementing and integrating various IT systems and solutions.'
  },
  {
    title: 'Data Analytics',
    icon: BarChart,
    description: 'Proficient in analyzing and interpreting complex data sets to drive business decisions.'
  }
]

export function Expertise() {
  return (
    <section id="expertise" className="mb-8 bg-white p-6 rounded-2xl shadow-md scroll-mt-20">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">My Expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {expertiseData.map((item, index) => (
          <div key={index} className="flex flex-col items-center p-4 border rounded-lg">
            <item.icon className="w-12 h-12 text-blue-500 mb-2" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>

  )
}

