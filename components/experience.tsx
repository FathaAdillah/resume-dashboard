export function Experience() {
  return (
    <section id="experience" className="mb-8 bg-white p-8 rounded-3xl shadow-xl scroll-mt-20 border border-secondary-100">
      <h2 className="text-2xl font-bold mb-8 text-secondary-900 flex items-center">
        <span className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </span>
        Experience
      </h2>
      <div className="space-y-6 md:space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-secondary-300 before:to-transparent">
        {[
          {
            title: "Web Developer",
            period: "May 2025 - Present",
            items: [
              "Develop ERP Tanos and E-Recruitment (LOAD) modules.",
              "Create and integrate REST APIs across multiple systems.",
              "Manage code versioning using Git with structured branching workflow.",
              "Migrate and synchronize data across relational databases.",
              "Perform application testing, debugging, and deployment to production environments."
            ],
            achievements: [
              "Successfully developed and deployed ERP and recruitment modules used by internal teams.",
              "Improved integration performance and reduced API response time through optimized workflows."
            ]
          },
          {
            title: "System Implementor - Pelindo Solusi Digital",
            period: "2023 - Present",
            items: [
              "Prepare enterprise master data pelindo subholding for migration to database",
              "Implementation of Enterprise Resource Planning (Centra Pelindo)",
              "Solving the case user by program and database.",
              "Perform SIT and UAT in the process of implementing the application program to the Pelindo subholding company.",
              "Receive feedback from users regarding program development",
              "Part of HCM Module (HRIS) of Centra Pelindo"
            ],
            achievements: [
              "Implementation in 6 Pelindo holding companies in 2023",
              "Carry out Managing Service with SLA predicate on time"
            ]
          },
          {
            title: "Freelance Software Developer",
            period: "2022 - Present",
            items: [
              "Developing and customizing HRIS solutions to optimize employee management and payroll processes.",
              "Building CRM systems to enhance customer relationship tracking and business operations.",
              "Creating company profile websites with modern, responsive designs to improve brand presence.",
              "Implementing web-based applications using Laravel and React for scalability and maintainability."
            ],
            achievements: [
              "Successfully delivered multiple HRIS and CRM projects for SMEs, improving workflow efficiency.",
              "Developed company profile websites that increased client engagement and online visibility."
            ]
          },
          {
            title: "IT Support - PT. Pitik Digital Indonesia",
            period: "2022 - 2023",
            items: [
              "Deployment of sensors on the farm.",
              "Configuring the connection with coop ID to the server (MQTT).",
              "Creating visualizations for temperature and humidity sensors, as well as electric sensors, using Elastic.",
              "Maintaining devices both onsite and offsite.",
              "Controlling assets and inventory.",
              "Managing production and deployment."
            ],
            achievements: [
              "Achieve the IT Support Performance target with a total of 85% on time SLA achievement",
              "More than 90% of devices are always online within a month"
            ]
          },
          {
            title: "IT Support - PT. Bringin Inti Teknologi",
            period: "2021 - 2022",
            items: [
              "Equipment maintenance, function tests, and documentation for equipment belonging to PT. Bank Rakyat Indonesia in all areas of the Regional Office of Surabaya.",
              "Antivirus installation, UPS installation, and employee operational equipment installation.",
              "Uploading the documentation database for each device in the regional unit.",
              "Coordinating urgent corrective maintenance ticketing in all areas of BRI Regional Office Surabaya."
            ],
            achievements: [
              "Achieve project targets by completing the maintenance office of one district branch area within 1 month"
            ]
          }
        ].map((job, index) => (
          <div key={index} className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-white bg-secondary-100 group-[.is-active]:bg-primary-500 text-secondary-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>

            {/* Job card */}
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 md:p-6 rounded-2xl border border-secondary-100 shadow-sm hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="flex flex-col mb-3 md:mb-4">
                <h3 className="font-bold text-base md:text-lg text-secondary-900 mb-2">{job.title}</h3>
                <span className="text-xs md:text-sm font-medium text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full self-start">{job.period}</span>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                {job.items.map((item, i) => (
                  <li key={i} className="text-secondary-600 text-xs md:text-sm flex items-start leading-relaxed">
                    <span className="mr-2 mt-1.5 w-1 h-1 md:w-1.5 md:h-1.5 bg-secondary-400 rounded-full shrink-0"></span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Achievements */}
              {job.achievements && (
                <div className="bg-green-50 p-3 md:p-4 rounded-xl border border-green-100">
                  <p className="text-green-800 font-semibold text-xs md:text-sm mb-2 flex items-center">
                    <svg className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Key Achievements
                  </p>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="text-green-700 text-xs md:text-sm pl-5 md:pl-6 relative before:absolute before:left-2 before:top-1.5 md:before:top-2 before:w-1 before:h-1 before:bg-green-400 before:rounded-full leading-relaxed">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

