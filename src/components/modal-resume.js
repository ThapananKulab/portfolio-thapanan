// components/modal-resume.js

import React from "react"

const Modal = ({ isOpen, imageUrl, onClose }) => {
  const handleCloseModal = () => {
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={handleCloseModal}
    >
      <div
        className="modal-container bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="modal-content">
          <img src={imageUrl} alt="Resume" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default Modal
