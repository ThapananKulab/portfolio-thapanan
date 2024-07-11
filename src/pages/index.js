// pages/index.js

import React, { useState } from "react"
import Navbar from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import Profile from "../images/Profile.jpeg"
import Modal from "../components/modal-resume"
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaJava,
} from "react-icons/fa"

import { SiFlutter, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si"
import { RiNextjsFill } from "react-icons/ri"

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState(null) // To store the image URL

  const handleOpenModal = imageUrl => {
    setModalImage(imageUrl)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalImage(null)
    setIsModalOpen(false)
  }

  const skills = [
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500 text-4xl mx-auto" />,
    },
    {
      name: "React",
      icon: <FaReact className="text-blue-500 text-4xl mx-auto" />,
    },
    {
      name: "Next.js",
      icon: <RiNextjsFill className="text-dark-500 text-4xl mx-auto" />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 text-4xl mx-auto" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-4xl mx-auto" />,
    },

    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-600 text-4xl mx-auto" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-600 text-4xl mx-auto" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-blue-400 text-4xl mx-auto" />,
    },

    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-900 text-4xl mx-auto" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-600 text-4xl mx-auto" />,
    },

    {
      name: "PHP",
      icon: (
        <SiFlutter style={{ color: "#02569B" }} className="text-4xl mx-auto" />
      ),
    },
    {
      name: "Java",
      icon: <FaJava className="text-red-500 text-4xl mx-auto" />,
    }, // Added Java
  ]

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="hero-content flex flex-col lg:flex-row-reverse lg:space-x-10 space-y-6 lg:space-y-0 items-center">
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src={Profile}
                className="w-full max-w-sm h-96 rounded-lg shadow-2xl object-cover cursor-pointer"
                onClick={() => handleOpenModal(Profile)}
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl font-bold mt-1">
                My name is <br />
                <span className="text-7xl text-primary">Thapanan Kulab</span>
              </h1>

              <p className="py-6">I want to be Software Engineer</p>
              <div className="card-actions flex justify-center lg:justify-start space-x-2">
                <button
                  className="btn btn-outline btn-primary text-white"
                  onClick={() =>
                    handleOpenModal(
                      "https://res.cloudinary.com/dr3ehki5q/image/upload/v1720536540/users/zmal40ecdqridgrogaha.png"
                    )
                  }
                >
                  Resume
                </button>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mt-20">
            <h2 className="text-4xl font-bold text-center mb-6">Skills</h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {skills.map(skill => (
                <div
                  key={skill.name}
                  className="bg-white p-4 rounded-lg shadow-lg text-center"
                >
                  <div className="text-center mb-2">{skill.icon}</div>
                  <p className="text-xl font-medium text-gray-800">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Modal
        isOpen={isModalOpen}
        imageUrl={modalImage}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export const Head = () => <Seo title="Home | Thapanan Kulab" />

export default Index
