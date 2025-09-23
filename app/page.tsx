'use client';

import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';
import { Project } from './projects/Project';
import { Project1 } from './projects/impl/project1/Project1';
// import { Project2 } from './projects/impl/project2/Project2';

const projects = [
  new Project1(),
  // , new Project2()
];
const baseDescriptionPath = '/data/description/';

export default function Home1() {
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
    if (!active) return;

    setResult(null);
    setLoading(true);
    setServerStarting(false);

    // Si pasan 5s sin respuesta, mostramos mensaje de "levantando servidor"
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

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Proyectos de Lyfeman</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 cursor-pointer"
            onClick={() => {
              setActive(project);
              setResult(null);
              setInput('');
              setDescriptionMarkdown('');
            }}
          >
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-sm italic">Haz clic para más info</p>
          </div>
        ))}
      </div>

      {active && (
        <div className="mt-10 bg-gray-800 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">{active.name}</h2>

          <div style={{ marginBottom: '1rem' }}>
            <div className="markdown-body prose prose-invert max-w-none bg-gray-800 p-6 rounded-lg">
              <ReactMarkdown>{descriptionMarkdown}</ReactMarkdown>
            </div>
          </div>

          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white mt-4 mb-4"
            placeholder="Introduce un valor..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={async (e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                await handleAction();
              }
            }}
          />

          <button
            onClick={handleAction}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
          >
            Pruebalo!
          </button>

          {loading && (
            <div className="mt-4 p-4 bg-yellow-600 text-black rounded">
              {serverStarting
                ? 'El servidor se está iniciando, puede tardar unos minutos...'
                : 'Procesando...'}
            </div>
          )}

          {!loading && result && (
            <div className="mt-4 p-4 bg-gray-700 rounded">{active.renderResult(result)}</div>
          )}
        </div>
      )}
    </main>
  );
}
