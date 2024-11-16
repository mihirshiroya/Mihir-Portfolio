import React from 'react'
import travel from '../assets/travel.jpg'
import image from '../assets/image.png'

const projects = [
  {
    id: 1,
    name: "Travel Buddy",
    description: "A full-stack Travel solution with Jetpack Compose, Kotlin and Backend with Firebase",
    image: travel,
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
    link: "https://github.com/mihirshiroya/AndroidProject"
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "Personal portfolio website showcasing projects and skills",
    image: image,
    tags: ["React", "Tailwind CSS"],
    link: "https://github.com/mihirshiroya/Mihir-Portfolio"
  },
]

const handleRedirect = (link) => {
  window.location.href = link; // Replace with your desired URL
};

export default function Projects() {
    return (
        <div className="w-full mx-auto  py-8 bg-gray-800">
          <h1 className="text-3xl font-bold mb-8 text-center text-white">My Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-40">
            {projects.map((project) => (
              <div key={project.id} onClick={() => handleRedirect(project.link)} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-200 text-gray-700 text-sm rounded-full">
                       <a href="https://drive.google.com/uc?export=download&id=1-84U2ViBGCYbEnX2QA5LcLzLvgkgVAGi">{tag}</a> 
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
}