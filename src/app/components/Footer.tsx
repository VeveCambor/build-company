import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-transparent text-white py-8 px-4 mt-0">
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
      <div className="flex gap-4 justify-center mt-2">
        <a href="#" aria-label="Facebook" className="hover:text-yellow-400 transition-colors text-2xl"><FaFacebookF /></a>
        <a href="#" aria-label="Instagram" className="hover:text-yellow-400 transition-colors text-2xl"><FaInstagram /></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-yellow-400 transition-colors text-2xl"><FaLinkedinIn /></a>
      </div>
    </div>
  </footer>
);

export default Footer; 