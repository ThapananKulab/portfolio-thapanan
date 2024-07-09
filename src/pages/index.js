// pages/index.js

import React, { useState } from "react"
import Navbar from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/seo"
import Profile from "../images/Profile.jpeg"
import Modal from "../components/modal-resume"

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

              <p className="py-6">
                "CR7" redirects here. For other uses, see Cristiano Ronaldo
                (disambiguation) and CR7 (disambiguation). In this Portuguese
                name, the first or maternal family name is dos Santos and the
                second or paternal family name is Aveiro.
              </p>
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
