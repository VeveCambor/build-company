import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative bg-gray-700/70 rounded-xl shadow-xl p-0 sm:p-8 max-w-lg w-full z-10 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold hover:text-accent focus:outline-none cursor-pointer"
          aria-label="Zavřít"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 