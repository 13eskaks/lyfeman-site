// src/components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1: Sobre Lyfeman */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Lyfeman</h3>
            <p className="text-sm text-gray-400">
              Aplicaciones web útiles para tu vida. Herramientas gratuitas para gestión financiera, análisis con IA y más.
            </p>
          </div>

          {/* Columna 2: Aplicaciones */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Aplicaciones</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://acman.lyfeman.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  💰 ACMAN - Finanzas
                </a>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400 transition-colors">
                  ⭐ AI Review Scorer
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-blue-400 transition-colors">
                  Ver todos los proyectos
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/privacy" 
                  className="hover:text-blue-400 transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="hover:text-blue-400 transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link 
                  href="/cookies" 
                  className="hover:text-blue-400 transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a 
                  href="mailto:team@lyfeman.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  team@lyfeman.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Valencia, España</span>
              </li>
            </ul>
            
            {/* Redes sociales */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.linkedin.com/in/raúl-adsuara-nebot-08a18221a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-xs font-bold">in</span>
              </a>
              <a
                href="https://github.com/13eskaks"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <span className="text-xs font-bold">gh</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© {currentYear} Lyfeman. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}