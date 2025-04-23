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
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl shadow-intense w-full max-w-2xl relative overflow-hidden mx-auto my-auto"
            style={{ width: '66.666%', maxHeight: '80vh' }}
          >
            <div className="absolute top-0 right-0 p-2 z-20">
              <button 
                onClick={closeModal}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <RiCloseLine className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-4 text-dark-900">Book an Appointment</h3>
              <p className="text-gray-600 mb-6">
                Schedule a free 15-minute consultation with our experts to discuss your project needs.
              </p>
              
              <div className="w-full" style={{ height: '500px' }}>
                <iframe
                  src="https://calendly.com/dipuraj-thapa/15min"
                  frameBorder="0"
                  className="w-full h-full rounded-lg"
                  title="Calendly Scheduling"
                  loading="lazy"
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