// src/app/privacy/page.tsx
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Política de Privacidad</h1>
        <p className="text-gray-600 mb-8">Última actualización: 5 de enero de 2026</p>

        <div className="prose prose-blue max-w-none space-y-6 text-gray-700">
          {/* Sección 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Información al Usuario</h2>
            <p>
              <strong>Lyfeman</strong>, accesible en <strong>lyfeman.com</strong>, informa al usuario sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal que puedan ser recabados durante la navegación a través del sitio web.
            </p>
            <p>El uso del sitio web implica la aceptación de esta Política de Privacidad.</p>
          </section>

          {/* Sección 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Responsable del Tratamiento</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Titular:</strong> Lyfeman</li>
              <li><strong>Domicilio:</strong> Valencia, España</li>
              <li><strong>Email de contacto:</strong> <a href="mailto:team@lyfeman.com" className="text-blue-600 hover:underline">team@lyfeman.com</a></li>
            </ul>
          </section>

          {/* Sección 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Datos Personales que Recogemos</h2>
            
            <p className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <strong>ℹ️ Información importante:</strong> Lyfeman <strong>NO requiere registro ni recopila datos personales</strong> de los usuarios para acceder al sitio web. Las únicas aplicaciones que pueden requerir registro son externas (como ACMAN).
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1. Datos técnicos (automáticos)</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Dirección IP</li>
              <li>Tipo de navegador</li>
              <li>Sistema operativo</li>
              <li>Fecha y hora de acceso</li>
              <li>Páginas visitadas</li>
              <li>Cookies y tecnologías de rastreo (ver <Link href="/cookies" className="text-blue-600 hover:underline">Política de Cookies</Link>)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2. Datos de contacto (voluntarios)</h3>
            <p>Si decides contactarnos por email, recopilaremos:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Tu dirección de correo electrónico</li>
              <li>El contenido de tu mensaje</li>
            </ul>
          </section>

          {/* Sección 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Finalidad del Tratamiento</h2>
            <p>Los datos técnicos se utilizarán para:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li><strong>Funcionamiento del sitio web:</strong> Garantizar el correcto funcionamiento y navegación</li>
              <li><strong>Publicidad:</strong> Mostrar anuncios a través de Google AdSense</li>
              <li><strong>Mejora del servicio:</strong> Analizar el uso del sitio web para mejorar su funcionamiento</li>
              <li><strong>Cumplimiento legal:</strong> Cumplir con obligaciones legales aplicables</li>
            </ol>
          </section>

          {/* Sección 5 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Base Legal del Tratamiento</h2>
            <p>El tratamiento de datos se basa en:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Interés legítimo:</strong> Para el funcionamiento técnico del sitio web</li>
              <li><strong>Consentimiento del usuario:</strong> Para el uso de cookies publicitarias y analíticas</li>
            </ul>
          </section>

          {/* Sección 6 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Conservación de Datos</h2>
            <p>Los datos se conservarán:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Datos técnicos:</strong> Durante el tiempo necesario para el funcionamiento del sitio</li>
              <li><strong>Cookies publicitarias:</strong> Según la política de Google AdSense (generalmente 90 días)</li>
              <li><strong>Correos electrónicos de contacto:</strong> Hasta que solicites su eliminación o no sean necesarios</li>
            </ul>
          </section>

          {/* Sección 7 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Destinatarios de los Datos</h2>
            <p>Los datos pueden ser compartidos con:</p>
            
            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7.1. Proveedores de servicios</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Google AdSense:</strong> Para mostrar publicidad</li>
              <li><strong>Proveedores de hosting:</strong> Para alojar el sitio web</li>
            </ul>

            <p className="mt-4 bg-gray-50 border-l-4 border-gray-400 p-4">
              <strong>Nota:</strong> Si accedes a aplicaciones enlazadas desde Lyfeman (como ACMAN), esas aplicaciones tienen sus propias políticas de privacidad que debes consultar.
            </p>
          </section>

          {/* Sección 8 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Derechos del Usuario</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Acceso:</strong> Obtener información sobre qué datos se están tratando</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento de datos</li>
              <li><strong>Limitación:</strong> Restringir el tratamiento en determinadas circunstancias</li>
              <li><strong>Revocación del consentimiento:</strong> Para cookies publicitarias</li>
            </ul>
            <p className="mt-4">
              Para ejercer estos derechos, contacta a través de: <a href="mailto:team@lyfeman.com" className="text-blue-600 hover:underline">team@lyfeman.com</a>
            </p>
            <p className="mt-2">
              También tienes derecho a presentar una reclamación ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong>: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.aepd.es</a>
            </p>
          </section>

          {/* Sección 9 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Seguridad</h2>
            <p>El sitio web ha adoptado medidas técnicas apropiadas para proteger los datos:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Conexión HTTPS segura</li>
              <li>Acceso restringido a datos técnicos</li>
              <li>No se almacenan datos personales sensibles</li>
            </ul>
          </section>

          {/* Sección 10 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Cookies</h2>
            <p>
              Este sitio web utiliza cookies propias y de terceros. Para más información, consulta nuestra{" "}
              <Link href="/cookies" className="text-blue-600 hover:underline font-semibold">
                Política de Cookies
              </Link>.
            </p>
          </section>

          {/* Sección 11 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Enlaces a Aplicaciones Externas</h2>
            <p>
              Lyfeman puede contener enlaces a aplicaciones externas (como ACMAN). Estas aplicaciones:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Tienen sus propias políticas de privacidad</li>
              <li>Pueden recopilar datos personales adicionales</li>
              <li>Son responsables de su propio tratamiento de datos</li>
            </ul>
            <p className="mt-2">Te recomendamos revisar sus políticas antes de usarlas.</p>
          </section>

          {/* Sección 12 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Modificaciones</h2>
            <p>
              Esta Política de Privacidad puede ser modificada. Cualquier cambio será notificado en esta página.
            </p>
          </section>

          {/* Sección 13 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contacto</h2>
            <p>Para cualquier duda sobre esta Política de Privacidad:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li><strong>Email:</strong> <a href="mailto:team@lyfeman.com" className="text-blue-600 hover:underline">team@lyfeman.com</a></li>
              <li><strong>Ubicación:</strong> Valencia, España</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          Fecha de última actualización: 5 de enero de 2026
        </div>
      </div>
    </div>
  );
}