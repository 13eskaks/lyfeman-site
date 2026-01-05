// src/app/terms/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Términos y Condiciones</h1>
        <p className="text-gray-600 mb-8">Última actualización: 5 de enero de 2026</p>

        <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Datos Identificativos</h2>
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Titular del sitio web:</strong> Lyfeman</li>
              <li><strong>Domicilio:</strong> Valencia, España</li>
              <li><strong>Email de contacto:</strong> <a href="mailto:team@lyfeman.com" className="text-blue-600 hover:underline">team@lyfeman.com</a></li>
              <li><strong>Nombre del dominio:</strong> lyfeman.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Objeto</h2>
            <p>
              El presente Aviso Legal regula el uso del sitio web <strong>lyfeman.com</strong>, que actúa como hub de aplicaciones y proyectos web útiles.
            </p>
            <p>
              La navegación por este sitio web atribuye la condición de <strong>usuario</strong> e implica la aceptación plena de todas las condiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Descripción del Servicio</h2>
            <p>Lyfeman es un sitio web que proporciona:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Información sobre aplicaciones web útiles (ACMAN, AI Review Scorer, etc.)</li>
              <li>Acceso a proyectos de IA y herramientas online</li>
              <li>Enlaces a aplicaciones externas desarrolladas por el mismo equipo</li>
            </ul>
            <p className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-4">
              <strong>Nota:</strong> Lyfeman es un sitio web informativo. Las aplicaciones enlazadas (como ACMAN) tienen sus propios términos y condiciones que debes consultar al usarlas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Condiciones de Uso</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.1. Uso permitido</h3>
            <p>
              El usuario se compromete a utilizar el sitio web de forma lícita, sin contravenir la legislación vigente, la buena fe y el orden público.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4.2. Uso prohibido</h3>
            <p>Queda expresamente prohibido:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Usar el sitio web para fines ilegales</li>
              <li>Intentar acceder a áreas restringidas del sistema</li>
              <li>Introducir virus o código malicioso</li>
              <li>Realizar scraping o extracción automática de contenido</li>
              <li>Copiar, modificar o distribuir el contenido sin autorización</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Responsabilidad</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.1. Contenidos</h3>
            <p>
              El titular se esfuerza por garantizar la disponibilidad del sitio web, pero <strong>NO garantiza</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>La ausencia de errores o interrupciones</li>
              <li>La disponibilidad ininterrumpida del servicio</li>
              <li>La ausencia de virus o componentes dañinos</li>
              <li>La exactitud o actualidad de toda la información</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.2. Enlaces a aplicaciones externas</h3>
            <p>
              Lyfeman contiene enlaces a aplicaciones y sitios externos. El titular <strong>NO se responsabiliza de</strong>:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>El contenido de las aplicaciones enlazadas</li>
              <li>Los términos y políticas de dichas aplicaciones</li>
              <li>La disponibilidad o funcionamiento de las mismas</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5.3. Publicidad</h3>
            <p>
              El sitio web muestra publicidad a través de Google AdSense. El titular no se responsabiliza del contenido de los anuncios mostrados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Propiedad Intelectual e Industrial</h2>
            <p>
              Todos los contenidos del sitio web (diseño, textos, gráficos, logotipos, código) son propiedad del titular o de terceros que han autorizado su uso.
            </p>
            <p>
              Queda prohibida la reproducción, distribución o comunicación pública sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Protección de Datos</h2>
            <p>
              El tratamiento de datos se rige por nuestra{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline font-semibold">
                Política de Privacidad
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Cookies</h2>
            <p>
              Este sitio web utiliza cookies propias y de terceros. Para más información, consulta nuestra{" "}
              <Link href="/cookies" className="text-blue-600 hover:underline font-semibold">
                Política de Cookies
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Legislación Aplicable y Jurisdicción</h2>
            <p>
              Las presentes Condiciones Generales se rigen por la legislación española.
            </p>
            <p>
              Para la resolución de cualquier controversia, las partes se someten a los Juzgados y Tribunales de Valencia, España.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Modificaciones</h2>
            <p>
              El titular se reserva el derecho a modificar estos Términos sin previo aviso. Los cambios entrarán en vigor desde su publicación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Contacto</h2>
            <p>Para cualquier duda o sugerencia:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Email:</strong> <a href="mailto:team@lyfeman.com" className="text-blue-600 hover:underline">team@lyfeman.com</a></li>
              <li><strong>Ubicación:</strong> Valencia, España</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          Fecha de última actualización: 5 de enero de 2026
        </div>
      </div>
    </div>
  );
}