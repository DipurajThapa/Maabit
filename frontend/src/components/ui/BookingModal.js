import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useModal } from '../../context/ModalContext';
import { RiCloseLine } from 'react-icons/ri';

const BookingModal = () => {
  const { isOpen, closeModal } = useModal();
  const modalRef = useRef(null);

  useEffect(() => {
    // Add event listener to detect clicks outside the modal
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    // Handle escape key press
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset'; // Restore scrolling when modal is closed
    };
  }, [isOpen, closeModal]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-950/50 backdrop-blur-sm overflow-y-auto"
        >
          <motion.div 
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white rounded-xl shadow-intense w-full max-w-md md:max-w-lg relative overflow-hidden"
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10 text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <RiCloseLine className="w-5 h-5" />
            </button>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-dark-900">Book an Appointment</h3>
              <p className="text-gray-600 mb-6">
                Schedule a free 15-minute consultation with our experts to discuss your project needs.
              </p>
              
              <div className="h-[600px] w-full">
                <iframe
                  src="https://calendly.com/dipuraj-thapa/15min"
                  frameBorder="0"
                  className="w-full h-full rounded-lg"
                  title="Calendly Scheduling"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;