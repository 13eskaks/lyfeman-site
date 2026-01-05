// src/components/landing/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-6xl md:text-7xl mb-6">🚀</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Aplicaciones útiles para tu vida
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Herramientas web gratuitas que te ayudan en tu día a día. Desde gestión financiera hasta análisis con IA.
        </p>
        <a
          href="#apps"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
        >
          Explorar Apps
        </a>
      </div>
    </section>
  );
}