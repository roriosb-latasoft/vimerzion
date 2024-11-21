"use client";

import Navbar from "@/app/components/nav";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function Eventos() {
  const [activeCatalog, setActiveCatalog] = useState("catalog1");

  const catalogs = {
    catalog1: [
      { id: 1, image: "/images/catalog1-item1.png", name: "Producto 1" },
      { id: 2, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 3, image: "/images/catalog1-item2.png", name: "Producto 3" },
      { id: 4, image: "/images/catalog1-item2.png", name: "Producto 4" },
      { id: 5, image: "/images/catalog1-item2.png", name: "Producto 5" },
      { id: 6, image: "/images/catalog1-item2.png", name: "Producto 6" },
      { id: 7, image: "/images/catalog1-item2.png", name: "Producto 7" },
      { id: 8, image: "/images/catalog1-item2.png", name: "Producto 8" },
      { id: 9, image: "/images/catalog1-item2.png", name: "Producto 9" },
      { id: 10, image: "/images/catalog1-item2.png", name: "Producto 10" },
      { id: 11, image: "/images/catalog1-item2.png", name: "Producto 11" },
      { id: 12, image: "/images/catalog1-item2.png", name: "Producto 12" },
      { id: 13, image: "/images/catalog1-item2.png", name: "Producto 13" },
      { id: 14, image: "/images/catalog1-item2.png", name: "Producto 14" },
      { id: 15, image: "/images/catalog1-item2.png", name: "Producto 15" },
    ],
    catalog2: [
      { id: 16, image: "/images/catalog2-item1.png", name: "Producto 16" },
      { id: 17, image: "/images/catalog2-item2.png", name: "Producto " },
      { id: 18, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 19, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 20, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 21, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 22, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 23, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 24, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 25, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 26, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 27, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 28, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 29, image: "/images/catalog1-item2.png", name: "Producto " },
      { id: 30, image: "/images/catalog1-item2.png", name: "Producto " },
    ],
    catalog3: [
      { id: 31, image: "/images/catalog3-item1.png", name: "Producto 31" },
      { id: 32, image: "/images/catalog3-item2.png", name: "Producto 32" },
      { id: 33, image: "/images/catalog1-item2.png", name: "Producto 33" },
      { id: 34, image: "/images/catalog1-item2.png", name: "Producto 34" },
      { id: 35, image: "/images/catalog1-item2.png", name: "Producto 35" },
      { id: 36, image: "/images/catalog1-item2.png", name: "Producto 36" },
      { id: 37, image: "/images/catalog1-item2.png", name: "Producto 37" },
      { id: 38, image: "/images/catalog1-item2.png", name: "Producto 38" },
      { id: 39, image: "/images/catalog1-item2.png", name: "Producto 39" },
    ],
    catalog4: [
      { id: 40, image: "/images/catalog4-item1.png", name: "Producto 7" },
      { id: 41, image: "/images/catalog4-item2.png", name: "Producto 8" },
      { id: 42, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 43, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 44, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 45, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 46, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 47, image: "/images/catalog1-item2.png", name: "Producto 2" },

    ],
    catalog5: [
      { id: 48, image: "/images/catalog5-item1.png", name: "Producto 9" },
      { id: 49, image: "/images/catalog5-item2.png", name: "Producto 10" },
      { id: 51, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 52, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 53, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 54, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 55, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 56, image: "/images/catalog1-item2.png", name: "Producto 2" },
      { id: 57, image: "/images/catalog1-item2.png", name: "Producto 2" },
    ],
  };

  return (
    <>
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 via-purple-800 to-pink-800 -z-10" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Contenido principal */}
      <main className="relative z-10 max-w-7xl mx-auto py-12 px-4">
        {/* Títulos */}
        <h1 className="text-center text-4xl font-bold text-white mb-8">
          Catálogo de Productos
        </h1>

        {/* Botones */}
        <div className="flex justify-center space-x-4 mb-10">
          {Object.keys(catalogs).map((catalogKey) => (
            <button
              key={catalogKey}
              onClick={() => setActiveCatalog(catalogKey)}
              className={`px-6 py-2 rounded-lg font-bold text-lg transition-all duration-300 ${
                activeCatalog === catalogKey
                  ? "bg-cyan-500 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-600"
              }`}
            >
              {catalogKey.replace("catalog", "Catálogo ")}
            </button>
          ))}
        </div>

        {/* Catálogo activo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {catalogs[activeCatalog].map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
