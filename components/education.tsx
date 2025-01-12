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
    <section id="education" className="mb-8 bg-white p-6 rounded-2xl shadow-md scroll-mt-20">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Education</h2>
      {educationData.map((edu, index) => (
        <div key={index} className="flex justify-between items-center mb-4 last:mb-0">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500">{edu.year}</p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={edu.logo}
              alt={`${edu.institution} logo`}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
        </div>
      ))}
    </section>
  )
}

