// Modal.js

import React from "react"

const Modal = ({ isOpen, imageUrl, onClose }) => {
  const handleCloseModal = () => {
    onClose()
  }
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="modal-content">
          <img src={imageUrl} alt="Modal" className="w-full h-auto" />
          <button
            className="absolute top-0 right-0 m-4 text-3xl text-gray-500"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
