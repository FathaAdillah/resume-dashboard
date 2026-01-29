import Image from 'next/image'

export function Profile() {
  return (
    <section id="profile" className="mb-8 bg-white rounded-3xl shadow-xl overflow-hidden scroll-mt-20 border border-secondary-100">
      <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-400"></div>
      <div className="px-8 pb-8">
        <div className="relative flex justify-between items-end -mt-12 mb-6">
          <div className="relative">
            <div className="p-1 bg-white rounded-full">
              <Image
                src="/images/photo-profile.jpeg"
                alt="Profile Picture"
                width={128}
                height={128}
                className="rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
          <div className="mb-2">
            <button className="bg-primary-600 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/30">
              Download CV
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-secondary-900 mb-1">Fatharoni Adillah Rachman</h2>
          <p className="text-primary-600 font-medium text-lg mb-6">Software Developer</p>

          <p className="text-secondary-600 leading-relaxed max-w-3xl">
            I want to improve my knowledge and take most advantage of technology, especially in IT Operations (Implementation), HRIS, or Software Development. Collaboration and Team Work are the strongest points.
          </p>
        </div>
      </div>
    </section>
  )
}
