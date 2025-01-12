export function Skills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 'Git', 'AWS', 'Docker', 'Laravel', 'PHP']

  return (
    <section id="skills" className="mb-8 bg-white p-6 rounded-2xl shadow-md scroll-mt-20">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

