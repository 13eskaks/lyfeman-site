// src/projects/ProjectDetail.tsx
"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

interface ProjectDetailProps {
  name: string;
  descriptionMarkdown: string;
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
  serverStarting: boolean;
  result: any;
  renderResult: (result: any) => React.ReactNode;
  onBack: () => void;
}

export default function ProjectDetail({
  name,
  descriptionMarkdown,
  input,
  onInputChange,
  onSubmit,
  loading,
  serverStarting,
  result,
  renderResult,
  onBack,
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-blue-600 font-semibold transition-colors"
        >
          <span>←</span>
          <span>Volver a proyectos</span>
        </button>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {name}
          </h1>

          {/* Description con estilos mejorados para Markdown */}
          <div className="markdown-content prose prose-lg prose-slate max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h1:text-3xl prose-h1:mb-4
            prose-h2:text-2xl prose-h2:mb-3 prose-h2:mt-8
            prose-h3:text-xl prose-h3:mb-2 prose-h3:mt-6
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-ul:list-disc prose-ul:ml-6 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:ml-6 prose-ol:mb-4
            prose-li:text-gray-700 prose-li:mb-2
            prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-gray-800
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto
            prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
            prose-img:rounded-lg prose-img:shadow-md"
          >
            <ReactMarkdown>{descriptionMarkdown}</ReactMarkdown>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <label className="block text-sm font-bold text-gray-700 mb-3">
            Introduce tu texto para analizar:
          </label>
          
          <textarea
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.ctrlKey) {
                e.preventDefault();
                onSubmit();
              }
            }}
            placeholder="Escribe una reseña de restaurante aquí... (Ctrl+Enter para enviar)"
            className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
            rows={4}
            disabled={loading}
          />

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-gray-500">
              💡 Tip: Presiona <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">Ctrl</kbd> + <kbd className="px-2 py-1 bg-gray-100 border border-gray-300 rounded">Enter</kbd> para enviar
            </p>
            
            <button
              onClick={onSubmit}
              disabled={loading || !input.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Analizando...</span>
                </>
              ) : (
                <>
                  <span>🚀</span>
                  <span>Analizar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-400 rounded-2xl p-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600"></div>
              <div>
                <p className="font-bold text-yellow-900">
                  {serverStarting
                    ? '⏰ El servidor se está iniciando...'
                    : '🔄 Procesando tu reseña...'}
                </p>
                {serverStarting && (
                  <p className="text-sm text-yellow-700 mt-1">
                    Esto puede tardar 1-2 minutos la primera vez
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {!loading && result && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span>📊</span>
              <span>Resultados del Análisis</span>
            </h2>
            {renderResult(result)}
          </div>
        )}
      </div>
    </div>
  );
}