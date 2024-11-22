import Image from 'next/image';
import Link from 'next/link'; // Importa Link de next/link
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
          <Link href="/" className="hover:text-cyan-300 transition-all">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/nosotros" className="hover:text-cyan-300 transition-all">
            Nosotros
          </Link>
        </li>
        <li>
          <Link href="/servicios" className="hover:text-cyan-300 transition-all">
            Servicios
          </Link>
        </li>
        <li>
          <Link href="/catalogo" className="hover:text-cyan-300 transition-all">
            Catálogo
          </Link>
        </li>
        <li>
          <Link href="/contacto" className="hover:text-cyan-300 transition-all">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
