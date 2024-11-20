import Image from 'next/image';
import logo from '/public/images/logo.png';

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-between px-8 py-4 bg-gradient-to-r from-purple-700 to-indigo-600 text-white shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={40} height={40} />
        <span className="ml-3 font-bold text-lg uppercase tracking-widest">
          Vimerzion
        </span>
      </div>

      {/* Links */}
      <ul className="flex space-x-6">
        <li>
          <a href="#" className="hover:text-cyan-300 transition-all">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-300 transition-all">
            Nosotros
          </a>
        </li>
        <li>
          <a href="/servicios" className="hover:text-cyan-300 transition-all">
            Servicios
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-cyan-300 transition-all">
            Catálogo
          </a>
        </li>
        <li>
          <a href="/contacto" className="hover:text-cyan-300 transition-all">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
