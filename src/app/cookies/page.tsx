// src/app/(public)/cookies/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Cookies</h1>
        <p className="text-gray-600 mb-8">Última actualización: 3 de enero de 2026</p>

        <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
          {/* ¿Qué son las cookies? */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">¿Qué son las Cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet, móvil) cuando visitas una página web. Las cookies permiten que el sitio web recuerde tus acciones y preferencias durante un período de tiempo.
            </p>
          </section>

          {/* Cookies que utiliza LYFEMAN */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies que Utiliza LYFEMAN</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Cookies Estrictamente Necesarias (NO requieren consentimiento)</h3>
            <p>Estas cookies son esenciales para el funcionamiento de la aplicación:</p>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duración</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Finalidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><code>next-auth.session-token</code></td>
                    <td className="border border-gray-300 px-4 py-2">Sesión</td>
                    <td className="border border-gray-300 px-4 py-2">Mantener la sesión del usuario</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><code>next-auth.csrf-token</code></td>
                    <td className="border border-gray-300 px-4 py-2">Sesión</td>
                    <td className="border border-gray-300 px-4 py-2">Seguridad CSRF</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Cookies Publicitarias (REQUIEREN consentimiento)</h3>
            <p>Estas cookies permiten mostrar anuncios relevantes y medir su efectividad:</p>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cookie</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Proveedor</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Duración</th>
                    <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Finalidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><code>_gcl_au</code></td>
                    <td className="border border-gray-300 px-4 py-2">Google AdSense</td>
                    <td className="border border-gray-300 px-4 py-2">3 meses</td>
                    <td className="border border-gray-300 px-4 py-2">Rastrear conversiones</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><code>IDE</code></td>
                    <td className="border border-gray-300 px-4 py-2">Google DoubleClick</td>
                    <td className="border border-gray-300 px-4 py-2">1 año</td>
                    <td className="border border-gray-300 px-4 py-2">Publicidad personalizada</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2"><code>NID</code></td>
                    <td className="border border-gray-300 px-4 py-2">Google</td>
                    <td className="border border-gray-300 px-4 py-2">6 meses</td>
                    <td className="border border-gray-300 px-4 py-2">Personalización de anuncios</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <strong>Más información:</strong>{" "}
              <a 
                href="https://policies.google.com/technologies/ads" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Políticas de Google sobre publicidad
              </a>
            </p>
          </section>

          {/* Finalidad */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Finalidad de las Cookies</h2>
            <p>Utilizamos cookies para:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Funcionalidad básica:</strong> Iniciar sesión, recordar preferencias</li>
              <li><strong>Publicidad:</strong> Mostrar anuncios relevantes que ayudan a mantener el servicio gratuito</li>
              <li><strong>Seguridad:</strong> Proteger contra accesos no autorizados</li>
            </ol>
          </section>

          {/* Gestión de cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Gestión de Cookies</h2>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Eliminación de cookies desde tu navegador</h3>
            <p>Puedes eliminar las cookies ya instaladas en tu dispositivo:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Borrar datos de navegación</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web</li>
              <li><strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Borrar datos de exploración</li>
            </ul>
            <p className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <strong>Nota:</strong> Eliminar cookies puede afectar a la funcionalidad de la aplicación.
            </p>
          </section>

          {/* Cookies de terceros */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies de Terceros</h2>
            <p>LYFEMAN utiliza servicios de terceros que pueden instalar sus propias cookies:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Google AdSense:</strong> Para mostrar publicidad</li>
            </ul>
            <p className="mt-4">
              Estos terceros tienen sus propias políticas de privacidad sobre las que LYFEMAN no tiene control. Te recomendamos revisarlas.
            </p>
          </section>

          {/* Configuración de anuncios */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Configurar Preferencias de Publicidad</h2>
            <p>
              Para gestionar tus preferencias de publicidad de Google:{" "}
              <a 
                href="https://adssettings.google.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                Configuración de anuncios de Google
              </a>
            </p>
          </section>

          {/* Más información */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Más Información</h2>
            <p>
              Para más información sobre protección de datos, consulta nuestra{" "}
              <Link href="/privacy" className="text-blue-600 hover:underline font-semibold">
                Política de Privacidad
              </Link>.
            </p>
          </section>

          {/* Contacto */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contacto</h2>
            <p>Para cualquier duda sobre el uso de cookies:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Email:</strong> <a href="mailto:team@lyfeman.com" className="text-blue-600 hover:underline">team@lyfeman.com</a></li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          Fecha de última actualización: 3 de enero de 2026
        </div>
      </div>
    </div>
  );
}