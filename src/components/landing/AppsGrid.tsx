// src/components/landing/AppsGrid.tsx
import AppCard from "./AppCard";

export default function AppsGrid() {
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
  );
}