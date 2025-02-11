export function HardSkills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 'Git', 'AWS', 'Docker', 'Laravel', 'PHP']

  return (
    <section id="HardSkills" className="mb-8 bg-white p-6 rounded-2xl shadow-md scroll-mt-20">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Hard Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

