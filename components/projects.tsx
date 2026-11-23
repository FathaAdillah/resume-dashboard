'use client'

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, FolderTree } from 'lucide-react';
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-secondary-100 cursor-pointer grid lg:grid-cols-2"
            onClick={() => setSelectedProject(project)}
          >
            <div className="relative h-56 lg:h-full min-h-[14rem] w-full overflow-hidden bg-secondary-50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-left-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <h3 className="font-bold text-xl text-secondary-900 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-secondary-600 text-sm leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100 rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-auto">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {link.label} <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
