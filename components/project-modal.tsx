import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ExternalLink, X } from 'lucide-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [onClose])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  }

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-white rounded-lg p-6 max-w-4xl w-full mx-auto max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <Slider {...settings} className="mb-10">
          {project.previewImages.map((image, index) => (
            <div key={index}>
              <Image
                src={image}
                alt={`${project.title} preview ${index + 1}`}
                width={1024}
                height={466}
                className="rounded-lg object-cover w-full h-auto"
              />
            </div>
          ))}
        </Slider>
        <p className="text-gray-600 mb-4">{project.description}</p>
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
    </div>,
    document.body
  )
}

