import { useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const certificates = [
  { id: 1, title: 'Belajar Dasar Pemrograman Web', image: '/images/0001.jpg' },
  { id: 2, title: 'Aplikasi Backend untuk Pemula', image: '/images/0002.jpg' },
  { id: 3, title: 'Cloud Practitioner Essentials AWS', image: '/images/0003.jpg' },
  { id: 4, title: 'Dasar Pemrograman Javascript', image: '/images/0004.jpg' },
  { id: 5, title: 'Prinsip Pemrograman SOLID', image: '/images/0005.jpg' },
  { id: 6, title: 'Python for Data Professional Beginner', image: '/images/0006.jpg' },
  { id: 7, title: 'R Fundamental for Data Science', image: '/images/0007.jpg' },
  { id: 8, title: 'Python for Data Science', image: '/images/0008.jpg' },
  { id: 9, title: 'Web Developer', image: '/images/0009.jpg' },
  { id: 10, title: 'ACA Cloud Computing Certification (Alibaba)', image: '/images/0010.jpg' },
]

export function Certificates() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <section id="certificates" className="mb-8 bg-white p-6 rounded-2xl shadow-md scroll-mt-20">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Certificates</h2>
      <Slider {...settings}>
        {certificates.map((cert) => (
          <div key={cert.id} className="px-2">
            <div className="flex flex-col items-center">
              <Image
                src={cert.image}
                alt={cert.title}
                width={200}
                height={150}
                className="rounded-lg object-cover"
              />
              <p className="mt-2 text-center text-gray-600 text-sm">{cert.title}</p>
            </div>
          </div>
        ))}
      </Slider>
      <p className="mt-4 text-center text-gray-600">
      </p>
    </section>
  )
}

