import Navbar from "@/app/components/nav";
import Footer from "@/app/components/Footer";

export default function Eventos() {
  return (
    <>
     <div className="absolute inset-0 bg-gradient-to-b from-blue-800 via-purple-800 to-pink-800 -z-10" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Contenido principal */}
      <main className="relative z-10 max-w-5xl mx-auto py-10 px-4">
        {/* Título de contacto */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#9EE2FF] uppercase">
            Contacto
          </h2>
        </div>

        {/* Imágenes con texto */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {/* Primera imagen */}
          <div className="text-center">
            <img
              src="/images/wsp1.png" // Cambia el nombre por la ruta de tu imagen
              alt="Primera imagen"
              className="w-full max-w-sm rounded-lg shadow-md"
            />
            <p className="mt-4 text-white text-lg">
              +569 7473 3147
            </p>
            <p className="mt-4 text-white text-lg">
              +569 7473 3147
            </p>
          </div>

          {/* Segunda imagen */}
          <div className="text-center">
            <img
              src="/images/Vector1.png" // Cambia el nombre por la ruta de tu imagen
              alt="Segunda imagen"
              className="w-full max-w-sm rounded-lg shadow-md"
            />
            <p className="mt-4 text-white text-lg">
              ventas@vimerzion.com
              
            </p>
            <p className="mt-4 text-white text-lg">
              vimerzion@gmail.com
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
