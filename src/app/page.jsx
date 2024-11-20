import Navbar from './components/nav';
import Footer from './components/Footer';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/fondo_a.png')` }}
      ></div>
       {/* Capa de filtro opcional */}
       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Navbar */}
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Contenido principal */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center">
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
    </>
  );
}
