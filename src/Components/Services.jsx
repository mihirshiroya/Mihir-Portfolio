import React from 'react'
import web from '../assets/web.jpg';
import app from '../assets/app.jpg';
import landing from '../assets/landing.jpg';
import { ArrowRight, Smartphone, Globe, Layout } from 'lucide-react'

const services = [
  {
    id: 1,
    name: "Landing Page Design",
    description: "Create stunning, high-converting landing pages that capture your audience's attention and drive action.",
    image: landing,
    icon: <Layout className="w-6 h-6" />,
    features: [
      "Responsive design",
      "Conversion-optimized layouts",
      "Eye-catching visuals",
      "Clear call-to-actions"
    ]
  },
  {
    id: 2,
    name: "Web Application Development",
    description: "Build powerful, scalable web applications that solve complex problems and enhance user experiences.",
    image: web,
    icon: <Globe className="w-6 h-6" />,
    features: [
      "Full-stack development",
      "Custom functionality",
      "Database integration",
      "API development"
    ]
  },
  {
    id: 3,
    name: "Mobile Application Development",
    description: "Develop intuitive, feature-rich mobile apps for iOS and Android platforms that engage and delight users.",
    image: app,
    icon: <Smartphone className="w-6 h-6" />,
    features: [
      "Native and cross-platform apps",
      "User-friendly interfaces",
      "Offline functionality",
      "Push notifications"
    ]
  }
]

export default function Services() {
    return (
        <div className="bg-black border-t border-gray-900 min-h-screen py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-12 text-yellow-300">Check My Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                  <div className="relative h-48">
                    <img src={service.image} alt={service.name} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      {service.icon}
                      <h2 className="text-2xl font-semibold ml-2">{service.name}</h2>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <ArrowRight className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-gray-50">
                    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
}