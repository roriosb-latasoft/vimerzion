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
        {/* Títulos principales */}
        <div className="text-center mb-10">
       
          <h3 className="text-6xl font-extrabold uppercase text-[#9EE2FF] tracking-wide text-shadow-md">
            Eventos Productos
          </h3>
        </div>

        {/* Contenedor listado e imagen */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
          {/* Lista de eventos */}
          <ul className="text-light text-lg space-y-2 list-disc ml-6 flex-1">
            <li>Eventos</li>
            <li>Corporatios</li>
            <li>Publicidad</li>
            <li>Team Building</li>
            
            <li>Etc.</li>
          </ul>

          {/* Imagen al lado */}
          <div className="flex-1">
            <img
              src="/images/cotiza.png"
              alt="Eventos"
              className="w-full h-auto max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Galería */}
        <div>
          <h4 className="text-center text-3xl text-[#9EE2FF] font-bold mb-6">Galería</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Espacios para imágenes */}
            <div className="bg-gray-200 w-full h-40 rounded-lg"></div>
            <div className="bg-gray-200 w-full h-40 rounded-lg"></div>
            <div className="bg-gray-200 w-full h-40 rounded-lg"></div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
