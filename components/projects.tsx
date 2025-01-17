import { useState, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProjectModal } from "./project-modal";
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "Dompet Kebaikan",
    image: "/project1.jpg",
    description:
      "Developed a full-stack e-commerce platform using React, Node.js, and MongoDB. Implemented features such as user authentication, product catalog, shopping cart, and payment integration.",
    previewImages: [
      "/project1-preview1.jpg",
      "/project1-preview2.jpg",
      "/project1-preview3.jpg",
    ],
  },
  {
    id: 2,
    title: "HCM Apps",
    image: "/project2.jpg",
    description:
      "Created a task management application with React Native and Firebase. Features include real-time updates, task assignment, due date reminders, and progress tracking.",
    previewImages: [
      "/project2-preview1.jpg",
      "/project2-preview2.jpg",
      "/project2-preview3.jpg",
    ],
  },
  {
    id: 3,
    title: "CRM Ar-Rahmah",
    image: "/project3.jpg",
    description:
      "Built a data visualization dashboard using D3.js and Vue.js. The dashboard displays complex datasets in an intuitive and interactive manner, allowing users to gain insights quickly.",
    previewImages: [
      "/project3-preview1.jpg",
      "/project3-preview2.jpg",
      "/project3-preview3.jpg",
    ],
  },
  {
    id: 4,
    title: "Aplikasi Presensi",
    image: "/project4.jpg",
    description:
      "Developed an AI-powered chatbot using Python and natural language processing libraries. The chatbot can understand and respond to customer queries, improving customer service efficiency.",
    previewImages: [
      "/project4-preview1.jpg",
      "/project4-preview2.jpg",
      "/project4-preview3.jpg",
    ],
  },
  {
    id: 5,
    title: "Network Vizualitation",
    image: "/project4.jpg",
    description:
      "Developed an AI-powered chatbot using Python and natural language processing libraries. The chatbot can understand and respond to customer queries, improving customer service efficiency.",
    previewImages: [
      "/project4-preview1.jpg",
      "/project4-preview2.jpg",
      "/project4-preview3.jpg",
    ],
  },
];

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
      className="mb-8 bg-white p-6 rounded-2xl shadow-md scroll-mt-20 relative"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Projects</h2>
      <div className="relative">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="px-2">
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <p className="mt-2 text-center text-gray-600 text-sm">
                  {project.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 z-10"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 z-10"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
      <p className="mt-4 text-center text-gray-600">
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
