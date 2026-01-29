import { Users2 } from 'lucide-react'
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
    <section id="organization" className="mb-8 bg-white p-8 rounded-3xl shadow-xl scroll-mt-20 border border-secondary-100">
      <h2 className="text-2xl font-bold mb-8 text-secondary-900 flex items-center">
        <span className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">
          <Users2 className="w-6 h-6" />
        </span>
        Organizations
      </h2>
      <div className="space-y-6">
        {organizationData.map((org, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-between items-center md:items-start p-6 bg-secondary-50 rounded-2xl border border-secondary-100 hover:shadow-md transition-shadow">
            <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-secondary-900 mb-1">{org.name}</h3>
              <p className="text-primary-600 font-medium mb-2">{org.role}</p>
              <span className="inline-block bg-white px-3 py-1 rounded-full text-sm text-secondary-500 border border-secondary-200 shadow-sm">
                {org.year}
              </span>
            </div>
            <div className="flex-shrink-0 ml-0 md:ml-6">
              <div className="p-2 bg-white rounded-xl shadow-sm border border-secondary-100">
                <Image
                  src={org.logo}
                  alt={`${org.name} logo`}
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

