import Navbar from "@/app/components/nav";
import Footer from "@/app/components/Footer";


export default function Eventos() {
  return (
    <>
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-[url('/images/fondocontacto.png')] bg-cover bg-center -z-10" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Contenido principal */}
      <main className="relative z-10 max-w-7xl mx-auto py-10 px-4">
        {/* Imagen del título */}
        <div className="text-center mb-10">
          <img
            src="/images/tecnologia.png" // Cambia por la ruta de tu imagen del título
            alt="Título"
            className="w-full max-w-lg mx-auto"
          />
        </div>

        {/* Galería de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Imagen 1 */}
          <div>
            <img
              src="/images/holographic-display-icon-in-illustration-vector 1.png" // Cambia por la ruta de tu imagen
              alt="Imagen 1"
              className="w-full h-auto rounded-lg shadow-md"
            />
             <p className="mt-4 text-dark text-lg">
              Holograma 3D
            </p>
          </div>

          {/* Imagen 2 */}
          <div>
            <img
              src="/images/360 1.png" // Cambia por la ruta de tu imagen
              alt="Imagen 2"
              className="w-full h-auto rounded-lg shadow-md"
            />
              <p className="mt-4 text-dark text-lg">
              360
            </p>
          </div>

          {/* Imagen 3 */}
          <div>
            <img
              src="/images/image 19.png" // Cambia por la ruta de tu imagen
              alt="Imagen 3"
              className="w-full h-auto rounded-lg shadow-md"
            />
               <p className="mt-4 text-dark text-lg">
              Háptica
            </p>
          </div>

          {/* Imagen 4 */}
          <div>
            <img
              src="/images/image 20.png" // Cambia por la ruta de tu imagen
              alt="Imagen 4"
              className="w-full h-auto rounded-lg shadow-md"
            />
               <p className="mt-4 text-dark text-lg">
              Realidad Virtual
            </p>
          </div>

          {/* Imagen 5 */}
          <div>
            <img
              src="/images/image 21.png" // Cambia por la ruta de tu imagen
              alt="Imagen 5"
              className="w-full h-auto rounded-lg shadow-md"
            />
               <p className="mt-4 text-dark text-lg">
              Realidad Mixta
            </p>
          </div>

          {/* Imagen 6 */}
          <div>
            <img
              src="/images/image 22.png" // Cambia por la ruta de tu imagen
              alt="Imagen 6"
              className="w-full h-auto rounded-lg shadow-md"
            />
               <p className="mt-4 text-dark text-lg">
              Consolas
            </p>
          </div>

          {/* Imagen 7 */}
          <div>
            <img
              src="/images/image 23.png" // Cambia por la ruta de tu imagen
              alt="Imagen 7"
              className="w-full h-auto rounded-lg shadow-md"
            />
               <p className="mt-4 text-dark text-lg">
              Simuladores
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
