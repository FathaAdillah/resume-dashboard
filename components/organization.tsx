import Image from 'next/image'

const organizationData = [
  {
    name: 'UKMFT-ITC (Information Technology Center)',
    role: 'Chair of Executive Board',
    year: '2020 - 2021',
    logo: '/images/logo-itc.png'
  },
  {
    name: 'UKMFT-ITC (Information Technology Center)',
    role: 'Head of Public Relation Division',
    year: '2019 - 2020',
    logo: '/images/logo-itc.png'
  }
]

export function Organization() {
  return (
    <section id="organization" className="mb-8 bg-white p-6 rounded-2xl shadow-md scroll-mt-20">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Organizations</h2>
      {organizationData.map((org, index) => (
        <div key={index} className="flex justify-between items-center mb-4 last:mb-0">
          <div>
            <h3 className="text-xl font-semibold text-gray-700">{org.name}</h3>
            <p className="text-gray-600">{org.role}</p>
            <p className="text-gray-500">{org.year}</p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src={org.logo}
              alt={`${org.name} logo`}
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

