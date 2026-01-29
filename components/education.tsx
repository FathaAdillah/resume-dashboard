import Image from 'next/image'

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Trunojoyo Madura University',
    year: '2017 - 2022',
    logo: '/images/logo-utm.png'
  },
  {
    degree: 'Teknik Komputer dan Jaringan',
    institution: 'SMK Teknik PAL Surabaya',
    year: '2014 - 2017',
    logo: '/images/logo-smk1.png'
  }
]

export function Education() {
  return (
    <section id="education" className="mb-8 bg-white p-8 rounded-3xl shadow-xl scroll-mt-20 border border-secondary-100">
      <h2 className="text-2xl font-bold mb-8 text-secondary-900 flex items-center">
        <span className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
        </span>
        Education
      </h2>
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-between items-center md:items-start p-6 bg-secondary-50 rounded-2xl border border-secondary-100 hover:shadow-md transition-shadow">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-secondary-900 mb-1">{edu.degree}</h3>
              <p className="text-primary-600 font-medium mb-2">{edu.institution}</p>
              <span className="inline-block bg-white px-3 py-1 rounded-full text-sm text-secondary-500 border border-secondary-200 shadow-sm">
                {edu.year}
              </span>
            </div>
            <div className="flex-shrink-0 ml-0 md:ml-6">
              <div className="p-2 bg-white rounded-xl shadow-sm border border-secondary-100">
                <Image
                  src={edu.logo}
                  alt={`${edu.institution} logo`}
                  width={80}
                  height={80}
                  className="rounded-lg object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

