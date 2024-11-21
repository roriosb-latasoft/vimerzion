import Navbar from './components/nav';
import Footer from './components/Footer';
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 via-purple-800 to-pink-800 -z-10" />
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Contenido principal */}
      <main className="flex-grow flex flex-col items-center justify-center text-white text-center">
        {/* Logo */}
        <img
          className="w-32 h-auto mb-5"
          src="/images/logo.png"
          alt="Logo"
        />
        <h1 className="text-5xl font-bold uppercase tracking-wide">
          Eventos
        </h1>

        {/* Botones */}
        <div className="mt-12 flex space-x-6">
          <Link
            href="/empresaspersonas"
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-lg uppercase rounded-lg shadow-lg transition-all duration-300"
          >
            Empresas
          </Link>
          <a
            href="/empresasproductos"
            className="px-8 py-4 bg-pink-500 hover:bg-pink-400 text-white font-bold text-lg uppercase rounded-lg shadow-lg transition-all duration-300"
          >
            Personas
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
