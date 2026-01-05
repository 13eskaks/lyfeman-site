// src/app/page.tsx
"use client";

import { useEffect } from "react";
import AppCard from "@/components/landing/AppCard";

export default function Home() {
  // Manejar scroll cuando llegamos desde otra página con hash
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Pequeño delay para que el DOM esté listo
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  const apps = [
    {
      icon: "💰",
      title: "ACMAN",
      description:
        "Gestiona tus finanzas personales de forma inteligente. Controla gastos, analiza tendencias y toma mejores decisiones financieras.",
      features: [
        "Registro de movimientos bancarios",
        "Categorización automática de gastos",
        "Gráficos y análisis visual interactivo",
        "Importación de extractos Excel",
        "Gestión de múltiples cuentas",
        "Dashboard con KPIs en tiempo real",
      ],
      status: "live" as const,
      link: "https://acman.lyfeman.com",
      isExternal: true,
    },
    {
      icon: "⭐",
      title: "AI Review Scorer",
      description:
        "Analiza reseñas y opiniones con inteligencia artificial. Evalúa sentimiento y calidad de textos asignando puntuaciones objetivas.",
      features: [
        "Análisis de sentimiento con IA",
        "Puntuación automática 0-10",
        "Detección de aspectos positivos/negativos",
        "Evaluación de autenticidad",
        "Resultados instantáneos",
        "Funciona con reseñas en español",
      ],
      status: "live" as const,
      link: "/projects",
      isExternal: false,
    },
    {
      icon: "🔜",
      title: "Más herramientas",
      description:
        "Estamos trabajando en nuevas aplicaciones útiles. Si tienes sugerencias o necesitas alguna herramienta específica, contáctanos.",
      features: [
        "Gestión de tareas y proyectos",
        "Conversor de unidades avanzado",
        "Calculadoras especializadas",
        "Y mucho más...",
      ],
      status: "soon" as const,
      link: "#",
      isExternal: false,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
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

      {/* Apps Grid */}
      <section id="apps" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestras Aplicaciones
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas diseñadas para hacer tu vida más fácil. Totalmente gratuitas y sin registros complicados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app, index) => (
              <AppCard key={index} {...app} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sobre Lyfeman
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              <strong className="text-gray-900">Lyfeman</strong> (de "Life" + "Management") es un conjunto de aplicaciones
              web diseñadas para hacer tu vida más fácil y organizada. Nuestro objetivo es
              proporcionar herramientas útiles, gratuitas y accesibles para todos.
            </p>
            <p>
              Cada aplicación está cuidadosamente desarrollada pensando en la experiencia del
              usuario, la privacidad y la facilidad de uso. No recopilamos más datos de los
              estrictamente necesarios y respetamos tu privacidad en todo momento.
            </p>
            <p>
              Todas nuestras aplicaciones son completamente gratuitas y se mantienen mediante
              publicidad no intrusiva. Creemos en proporcionar valor real sin barreras de acceso.
            </p>
            <p className="text-gray-600 text-base">
              <strong>Desarrollado por:</strong> Raúl Adsuara, desarrollador full stack
              especializado en crear soluciones web modernas y eficientes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Elige una aplicación y comienza a mejorar tu productividad hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://acman.lyfeman.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              Probar ACMAN
            </a>
            <a
              href="/projects"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
            >
              Ver Proyectos
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}