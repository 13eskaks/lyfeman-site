// src/app/projects/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Project } from '@/projects/Project';
import { Project1 } from '@/projects/impl/project1/Project1';
import ProjectCard from '@/projects/ProjectCard';
import ProjectDetail from '@/projects/ProjectDetail';

const projects = [new Project1()];
const baseDescriptionPath = '/data/description/';

export default function ProjectsPage() {
  const [active, setActive] = useState<Project | null>(null);
  const [input, setInput] = useState('');
  const [result, setResult] = useState<any>(null);
  const [descriptionMarkdown, setDescriptionMarkdown] = useState('');
  const [loading, setLoading] = useState(false);
  const [serverStarting, setServerStarting] = useState(false);

  useEffect(() => {
    async function fetchDescription() {
      if (!active?.descriptionPath) return;
      try {
        const res = await fetch(`${baseDescriptionPath}${active.descriptionPath}`);
        if (!res.ok) throw new Error('Error al cargar el archivo markdown');
        const text = await res.text();
        setDescriptionMarkdown(text);
      } catch (err) {
        setDescriptionMarkdown('Error al cargar la descripción.');
      }
    }

    fetchDescription();
  }, [active]);

  const handleAction = async () => {
    if (!active || !input.trim()) return;

    setResult(null);
    setLoading(true);
    setServerStarting(false);

    const timer = setTimeout(() => {
      setServerStarting(true);
    }, 5000);

    try {
      const output = await active.action(input);
      setResult(output);
    } finally {
      clearTimeout(timer);
      setLoading(false);
      setServerStarting(false);
    }
  };

  const handleBack = () => {
    setActive(null);
    setResult(null);
    setInput('');
    setDescriptionMarkdown('');
  };

  // Vista de lista de proyectos
  if (!active) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proyectos de IA
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas impulsadas por inteligencia artificial para análisis de texto y más
            </p>
          </div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                description="Analiza reseñas de restaurantes con IA y obtén puntuación de sentimiento"
                onClick={() => {
                  setActive(project);
                  setResult(null);
                  setInput('');
                  setDescriptionMarkdown('');
                }}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }

  // Vista de detalle del proyecto
  return (
    <ProjectDetail
      name={active.name}
      descriptionMarkdown={descriptionMarkdown}
      input={input}
      onInputChange={setInput}
      onSubmit={handleAction}
      loading={loading}
      serverStarting={serverStarting}
      result={result}
      renderResult={(result) => active.renderResult(result)}
      onBack={handleBack}
    />
  );
}