
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex justify-between items-center border-b border-gray-800">
      <div className="text-white font-bold text-lg font-mono">
        Bob Macker
      </div>
      <ul className="flex space-x-4 text-white font-mono">
        <li><Link to="/about" className="hover:text-green-400">About</Link></li>
        <li><Link to="/projects" className="hover:text-green-400">Projects</Link></li>
        <li><Link to="/education" className="hover:text-green-400">Education</Link></li>
        <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
