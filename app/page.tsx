'use client';

import { useEffect, useState } from 'react';
import { Project } from './projects/Project';
import { Project1 } from './projects/impl/project1/Project1';
import { Project2 } from './projects/impl/project2/Project2';
import { getProjectDescriptionHtml } from './utils/HTMLUtils';

const projects = [new Project1(), new Project2()];
const baseDescriptionPath = '/data/description/';

export default function Home() {
  const [active, setActive] = useState<Project | null>(null);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [descriptionHtml, setDescriptionHtml] = useState('');

  useEffect(() => {
    async function fetchDescription() {
      if (!active?.descriptionPath) return;
      try {
        const html = await getProjectDescriptionHtml(`${baseDescriptionPath}${active.descriptionPath}`);
        setDescriptionHtml(html);
      } catch (err) {
        setDescriptionHtml('<p>Error al cargar la descripción.</p>');
      }
    }

    fetchDescription();
  }, [active]);

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
              setResult('');
              setInput('');
              setDescriptionHtml('');
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

          <div
            className="prose prose-invert max-w-none mb-4"
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />

          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white mb-4"
            placeholder="Introduce un valor..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={async () => {
              const output = await active.action(input);
              setResult(output);
            }}
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500"
          >
            Ejecutar acción
          </button>

          {result && <div className="mt-4 p-4 bg-gray-700 rounded">{result}</div>}
        </div>
      )}
    </main>
  );
}
