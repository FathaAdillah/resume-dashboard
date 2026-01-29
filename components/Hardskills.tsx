export function HardSkills() {
  const skills = ['JavaScript', 'React', 'Node.js', 'TypeScript', 'HTML/CSS', 'Git', 'AWS', 'Docker', 'Laravel', 'PHP']

  return (
    <section id="skills" className="mb-8 bg-white p-8 rounded-3xl shadow-xl scroll-mt-20 border border-secondary-100">
      <h2 className="text-2xl font-bold mb-6 text-secondary-900 flex items-center">
        <span className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        </span>
        Hard Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span key={skill} className="bg-secondary-50 text-secondary-700 border border-secondary-200 px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 transition-all cursor-default">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

