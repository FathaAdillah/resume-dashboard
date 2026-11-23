'use client'

import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FolderTree, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectModal, type Project } from "./project-modal";

const projects: Project[] = [
  {
    id: 1,
    title: "Solitapp — Crowdfunding Platform",
    image: "/images/project-solitapp-admin-dashboard.png",
    description:
      "A crowdfunding and donation platform built on a microservice architecture. A Laravel REST API powers campaign, donor, reconciliation, Tabungan & Qurban, and distribution workflows; Next.js serves the public donor site and the admin dashboard. Donations are processed through a payment gateway, and an LLM-powered assistant chatbot backed by a knowledge base is currently in development.",
    tech: ["Microservices", "Laravel API", "Next.js", "Payment Gateway", "LLM Chatbot (in development)"],
    previewImages: [
      "/images/project-solitapp-admin-dashboard.png",
      "/images/project-solitapp-admin-campaigns.png",
      "/images/project-solitapp-home.png",
      "/images/project-solitapp-programs.png",
    ],
    links: [
      { label: "Frontend", url: "https://solitapp.my.id/" },
      { label: "Admin Dashboard", url: "https://admin.solitapp.my.id/" },
    ],
  },
]

export function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: projects.length > 3,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: projects.length > 2,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: projects.length > 1,
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
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-left-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm text-secondary-900 line-clamp-2 group-hover:text-primary-600 transition-colors min-h-[2.5rem]">
                    {project.title}
                  </h3>
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
