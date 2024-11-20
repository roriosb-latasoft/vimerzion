export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white w-full absolute">
        <div className="max-w-7xl mx-auto px-8  py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Enlaces útiles */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase">Enlaces útiles</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-all">
                  Acerca de nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-all">
                  Tienda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-all">
                  Soporte técnico
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-all">
                  Política de devoluciones
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase">Contáctanos</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://instagram.com" target="_blank">
                <img
                  src="/images/instagram-logo.png"
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://facebook.com" target="_blank">
                <img
                  src="/images/facebook-logo.png"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://tiktok.com" target="_blank">
                <img
                  src="/images/tiktok-logo.png"
                  alt="TikTok"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://wa.me" target="_blank">
                <img
                  src="/images/whatsapp-logo.png"
                  alt="WhatsApp"
                  className="w-8 h-8"
                />
              </a>
            </div>
            <p className="text-sm">
              Horario: Lun-Vie, 9:00 AM - 6:00 PM
            </p>
            <p className="text-sm">Correo: contacto@vimerzion.com</p>
            <p className="text-sm">Teléfono: +123 456 7890</p>
          </div>
        </div>
  
        <div className="bg-gray-800 text-center py-4">
          <p className="text-sm">
            &copy; 2024 Vimerzion. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    );
  }
  