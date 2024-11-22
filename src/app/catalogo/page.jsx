"use client";

import Navbar from "@/app/components/nav";
import Footer from "@/app/components/Footer";
import { useState } from "react";

export default function Eventos() {
  const [activeCatalog, setActiveCatalog] = useState("A-2024");

  const catalogs = {
    "A-2024": [
      { id: 1, image: "/images/fotosCatalogo/A-2024/arizona.png" },
      { id: 2, image: "/images/fotosCatalogo/A-2024/beatsaber.png" },
      { id: 3, image: "/images/fotosCatalogo/A-2024/blaston.png" },
      { id: 4, image: "/images/fotosCatalogo/A-2024/climb2.png" },
      { id: 5, image: "/images/fotosCatalogo/A-2024/creed.png" },
      { id: 6, image: "/images/fotosCatalogo/A-2024/eleven.png" },
      { id: 7, image: "/images/fotosCatalogo/A-2024/epicroller.png" },
      { id: 8, image: "/images/fotosCatalogo/A-2024/fruitninja.png" },
      { id: 9, image: "/images/fotosCatalogo/A-2024/job.png" },
      { id: 10, image: "/images/fotosCatalogo/A-2024/population.png" },
      { id: 11, image: "/images/fotosCatalogo/A-2024/richie.png" },
      { id: 12, image: "/images/fotosCatalogo/A-2024/sniperelite.png" },
      { id: 13, image: "/images/fotosCatalogo/A-2024/superhot.png" },
      { id: 14, image: "/images/fotosCatalogo/A-2024/vader.png" },
      { id: 15, image: "/images/fotosCatalogo/A-2024/warplanes.png" },
    ],
    "B-2024": [
      { id: 16, image: "/images/fotosCatalogo/B-2024/beatsaber.png" },
      { id: 17, image: "/images/fotosCatalogo/B-2024/blaston.png" },
      { id: 18, image: "/images/fotosCatalogo/B-2024/climb2.png" },
      { id: 19, image: "/images/fotosCatalogo/B-2024/creed.png" },
      { id: 20, image: "/images/fotosCatalogo/B-2024/richie.png" },
      { id: 21, image: "/images/fotosCatalogo/B-2024/superhot.png" },
      { id: 22, image: "/images/fotosCatalogo/B-2024/angrybirs.png" },
      { id: 23, image: "/images/fotosCatalogo/B-2024/carve.png" },
      { id: 24, image: "/images/fotosCatalogo/B-2024/gladius.png" },
      { id: 25, image: "/images/fotosCatalogo/B-2024/gorilla.png" },
      { id: 26, image: "/images/fotosCatalogo/B-2024/gym.png" },
      { id: 27, image: "/images/fotosCatalogo/B-2024/pavlov.png" },
      { id: 28, image: "/images/fotosCatalogo/B-2024/smashdrums.png" },
      { id: 29, image: "/images/fotosCatalogo/B-2024/tennis.png" },
      { id: 30, image: "/images/fotosCatalogo/B-2024/soccer.png" },
    ],
    "2024-PS5": [
      { id: 31, image: "/images/fotosCatalogo/2024-PS5/dbz.png" },
      { id: 32, image: "/images/fotosCatalogo/2024-PS5/fc24.png" },
      { id: 33, image: "/images/fotosCatalogo/2024-PS5/gta.png" },
      { id: 34, image: "/images/fotosCatalogo/2024-PS5/gt7.png" },
      { id: 35, image: "/images/fotosCatalogo/2024-PS5/nba.png" },
      { id: 36, image: "/images/fotosCatalogo/2024-PS5/fornite.png" },
      { id: 37, image: "/images/fotosCatalogo/2024-PS5/mk11.png" },
      { id: 38, image: "/images/fotosCatalogo/2024-PS5/rocket.png" },
      { id: 39, image: "/images/fotosCatalogo/2024-PS5/ufc.png" },
    ],
    "2024-PSVR2": [
      { id: 40, image: "/images/fotosCatalogo/2024-PSVR2/btb.png" },
      { id: 41, image: "/images/fotosCatalogo/2024-PSVR2/crossfire.png" },
      { id: 42, image: "/images/fotosCatalogo/2024-PSVR2/cyube.png" },
      { id: 43, image: "/images/fotosCatalogo/2024-PSVR2/horizon.png" },
      { id: 44, image: "/images/fotosCatalogo/2024-PSVR2/rd4.png" },
      { id: 45, image: "/images/fotosCatalogo/2024-PSVR2/switchback.png" },
      { id: 46, image: "/images/fotosCatalogo/2024-PSVR2/synapse.png" },
      { id: 47, image: "/images/fotosCatalogo/2024-PSVR2/unplugged.png" },
    ],
    "2024-Switch": [
      { id: 48, image: "/images/fotosCatalogo/2024-Switch/cn.png" },
      { id: 49, image: "/images/fotosCatalogo/2024-Switch/fc24.png" },
      { id: 51, image: "/images/fotosCatalogo/2024-Switch/fornite.png" },
      { id: 52, image: "/images/fotosCatalogo/2024-Switch/gta3.png" },
      { id: 53, image: "/images/fotosCatalogo/2024-Switch/kart.png" },
      { id: 54, image: "/images/fotosCatalogo/2024-Switch/minecraft.png" },
      { id: 55, image: "/images/fotosCatalogo/2024-Switch/mk11.png" },
      { id: 56, image: "/images/fotosCatalogo/2024-Switch/nba.png" },
      { id: 57, image: "/images/fotosCatalogo/2024-Switch/rocket.png" },
      { id: 58, image: "/images/fotosCatalogo/2024-Switch/sm.png" },
      { id: 59, image: "/images/fotosCatalogo/2024-Switch/smash.png" },
      { id: 60, image: "/images/fotosCatalogo/2024-Switch/stumble.png" },
    ],
  };


  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-blue-800 via-purple-800 to-pink-800 -z-10" />
      <div className="relative z-20">
        <Navbar />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-center text-4xl font-bold text-white mb-8">Catálogo de Productos</h1>

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
              {catalogKey}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(catalogs[activeCatalog] || []).map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={item.image} alt={item.image.split("/").pop().split(".")[0]} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-bold">
                  {item.image.split("/").pop().split(".")[0]}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
