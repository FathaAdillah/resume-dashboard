import Image from 'next/image'

export function Profile() {
  return (
    <section id="profile" className="mb-8 bg-white p-6 rounded-2xl shadow-md scroll-mt-20">
      <div className="flex items-center mb-10">
        <div className="mr-4">
          <Image
            src="/images/photo-profile.jpeg" // gunakan jalur absolut dari folder public
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Fatharoni Adillah Rachman</h2>
          <p className="text-gray-600">Software Developer</p>
        </div>
      </div>
      <p className="text-gray-600">
      I want to improve my knowledge and take most advantage of technology, especially in IT Operations (Implementation), HRIS, or Software Development. Collaboration and Team Work are the strongest points.
      </p>
    </section>
  )
}
