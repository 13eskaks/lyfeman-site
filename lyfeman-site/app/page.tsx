'use client';
import { useState } from 'react';

const projects = [
  { id: 'proj1', name: 'Proyecto 1', description: 'Este es el proyecto 1.' },
  { id: 'proj2', name: 'Proyecto 2', description: 'Este es el proyecto 2.' },
  { id: 'proj3', name: 'Proyecto 3', description: 'Este es el proyecto 3.' },
];

export default function Home() {
  const [active, setActive] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Proyectos de Lyfeman</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 cursor-pointer"
            onClick={() => {
              setActive(project.id);
              setResult('');
            }}
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>

      {active && (
        <div className="mt-10 bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">
            {projects.find(p => p.id === active)?.name}
          </h2>
          <p className="mb-4">{projects.find(p => p.id === active)?.description}</p>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
            placeholder="Introduce un valor..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            onClick={() => setResult(`Resultado simulado para: "${input}"`)}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
          >
            Ejecutar acción
          </button>
          {result && (
            <div className="mt-4 p-4 bg-gray-700 rounded">{result}</div>
          )}
        </div>
      )}
    </main>
  );
}