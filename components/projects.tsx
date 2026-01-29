'use client'

import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import link from 'next/link';
import { X, ExternalLink, FolderTree } from 'lucide-react';
import { ProjectModal } from "./project-modal";
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Human Capital Management System",
    image: "/project-hcm.jpg",
    description:
      "A web-based Human Capital Management System built with Laravel, featuring employee data management, geofencing attendance, and HR operational workflows to support enterprise HR activities.",
    previewImages: [
      "/project-hcm-preview1.jpg",
      "/project-hcm-preview2.jpg",
      "/project-hcm-preview3.jpg",
    ],
    link: "https://hcm.razecode.my.id",
  },
  {
    id: 2,
    title: "Invoicing & Payment System",
    image: "/project-invo.jpg",
    description:
      "A Laravel-based invoicing platform integrated with IPaymu payment gateway, enabling invoice creation, secure online payments, and automated status tracking for financial operations.",
    previewImages: [
      "/project-invo-preview1.jpg",
      "/project-invo-preview2.jpg",
      "/project-invo-preview3.jpg",
    ],
    link: "https://invo.razecode.my.id",
  },
  {
    id: 3,
    title: "Customer Relationship Management (CRM)",
    image: "/project-crm.jpg",
    description:
      "A CRM web application built with Laravel, equipped with WhatsApp API integration for message broadcasting, lead follow-up workflows, and centralized customer communication tracking.",
    previewImages: [
      "/project-crm-preview1.jpg",
      "/project-crm-preview2.jpg",
      "/project-crm-preview3.jpg",
    ],
    link: "https://crm.razecode.my.id",
  },
  {
    id: 4,
    title: "Fundraising & Donation Platform",
    image: "/project-fund.jpg",
    description:
      "A fundraising platform built with Laravel and Midtrans payment integration, supporting donation campaigns, transaction monitoring, auto-verification, and donor engagement features.",
    previewImages: [
      "/project-fund-preview1.jpg",
      "/project-fund-preview2.jpg",
      "/project-fund-preview3.jpg",
    ],
    link: "https://fund.razecode.my.id",
  },
  {
    id: 5,
    title: "Travel Booking System",
    image: "/project-travel.jpg",
    description:
      "A Laravel-based travel booking system integrated with Midtrans, providing package booking, passenger management, real-time availability, and secure online payment processing.",
    previewImages: [
      "/project-travel-preview1.jpg",
      "/project-travel-preview2.jpg",
      "/project-travel-preview3.jpg",
    ],
    link: "https://travel.razecode.my.id",
  },
  {
    id: 6,
    title: "Campus Profile Website",
    image: "/images/project-stidki-preview1.jpg",
    description:
      "A modern campus profile website built with Laravel and Filament, delivering dynamic content management, academic information pages, and structured navigation for prospective students and visitors.",
    previewImages: [
      "/images/project-stidki-preview1.jpg",
      "/images/project-stidki-preview2.jpg",
      "/images/project-stidki-preview3.jpg",
    ],
    link: "https://stidkiarrahmah.ac.id",
  },
]


export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const sliderRef = useRef<Slider>(null);

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
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section
      id="projects"
      className="mb-8 bg-white p-8 rounded-3xl shadow-xl scroll-mt-20 border border-secondary-100 relative"
    >
      <h2 className="text-2xl font-bold mb-8 text-secondary-900 flex items-center">
        <span className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">
          <FolderTree className="w-6 h-6" />
        </span>
        Projects
      </h2>
      <div className="relative px-4">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-3 pb-6">
              <div
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-secondary-100 cursor-pointer h-full"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-secondary-900 mb-2 truncate group-hover:text-primary-600 transition-colors">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Visit Project <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button
          onClick={goToPrev}
          className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-white text-secondary-700 hover:text-primary-600 shadow-lg rounded-full p-3 focus:outline-none transition-all duration-200 z-10 border border-secondary-100 hover:scale-110"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-white text-secondary-700 hover:text-primary-600 shadow-lg rounded-full p-3 focus:outline-none transition-all duration-200 z-10 border border-secondary-100 hover:scale-110"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <p className="mt-6 text-center text-secondary-500 text-sm font-medium">
        Project {currentSlide + 1} of {projects.length}
      </p>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
