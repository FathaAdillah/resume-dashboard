'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ChevronLeft, ChevronRight, ExternalLink, X } from 'lucide-react'

export interface Project {
  id: number
  title: string
  image: string
  description: string
  tech: string[]
  previewImages: string[]
  links: { label: string; url: string }[]
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const sliderRef = useRef<Slider>(null)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [onClose])

  const settings = {
    dots: true,
    infinite: project.previewImages.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
  }

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-secondary-700 hover:text-primary-600 rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative px-4 pt-4 pb-8">
          <Slider ref={sliderRef} {...settings}>
            {project.previewImages.map((image, index) => (
              <div key={image}>
                <Image
                  src={image}
                  alt={`${project.title} preview ${index + 1}`}
                  width={1200}
                  height={546}
                  className="w-full h-auto object-contain rounded-xl"
                  priority={index === 0}
                />
              </div>
            ))}
          </Slider>
          {project.previewImages.length > 1 && (
            <>
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-secondary-700 hover:text-primary-600 shadow-lg rounded-full p-2 transition-all duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-secondary-700 hover:text-primary-600 shadow-lg rounded-full p-2 transition-all duration-200"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        <div className="p-6 border-t border-secondary-100">
          <h3 className="text-2xl font-bold text-secondary-900 mb-3">{project.title}</h3>
          <p className="text-secondary-600 leading-relaxed mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100 rounded-full px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                {link.label} <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
