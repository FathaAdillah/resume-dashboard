'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react'
import { CertificateModal } from './certificate-modal'

const certificates = [
  { id: 1, title: 'ACA Cloud Computing Certification (Alibaba)', image: '/images/0010.jpg' },
  { id: 2, title: 'Google Project Management Specialization', image: '/images/0011.jpg' },
  { id: 3, title: 'Belajar Dasar Pemrograman Web', image: '/images/0001.jpg' },
  { id: 4, title: 'Aplikasi Backend untuk Pemula', image: '/images/0002.jpg' },
  { id: 5, title: 'Cloud Practitioner Essentials AWS', image: '/images/0003.jpg' },
  { id: 6, title: 'Dasar Pemrograman Javascript', image: '/images/0004.jpg' },
  { id: 7, title: 'Prinsip Pemrograman SOLID', image: '/images/0005.jpg' },
  { id: 8, title: 'Python for Data Professional Beginner', image: '/images/0006.jpg' },
  { id: 9, title: 'R Fundamental for Data Science', image: '/images/0007.jpg' },
  { id: 10, title: 'Python for Data Science', image: '/images/0008.jpg' },
  { id: 11, title: 'Web Developer', image: '/images/0009.jpg' },
]

export function Certificates() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCertificate, setSelectedCertificate] = useState<typeof certificates[0] | null>(null)
  const sliderRef = useRef<Slider>(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const goToPrev = () => {
    sliderRef.current?.slickPrev()
  }

  const goToNext = () => {
    sliderRef.current?.slickNext()
  }

  return (
    <section
      id="certificates"
      className="mb-8 bg-white p-8 rounded-3xl shadow-xl scroll-mt-20 border border-secondary-100 relative"
    >
      <h2 className="text-2xl font-bold mb-8 text-secondary-900 flex items-center">
        <span className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">
          <ShieldCheck className="w-6 h-6" />
        </span>
        Certificates
      </h2>
      <div className="relative px-4">
        <Slider ref={sliderRef} {...settings}>
          {certificates.map((cert) => (
            <div key={cert.id} className="px-3 pb-6">
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-secondary-100 cursor-pointer h-full"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-secondary-900 line-clamp-2 group-hover:text-primary-600 transition-colors min-h-[2.5rem]">
                    {cert.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          onClick={goToPrev}
          className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white text-secondary-700 hover:text-primary-600 shadow-lg rounded-full p-3 focus:outline-none transition-all duration-200 z-10 border border-secondary-100 hover:scale-110"
          aria-label="Previous certificate"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-white text-secondary-700 hover:text-primary-600 shadow-lg rounded-full p-3 focus:outline-none transition-all duration-200 z-10 border border-secondary-100 hover:scale-110"
          aria-label="Next certificate"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <p className="mt-6 text-center text-secondary-500 text-sm font-medium">
        Certificate {currentSlide + 1} of {certificates.length}
      </p>
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </section>
  )
}

