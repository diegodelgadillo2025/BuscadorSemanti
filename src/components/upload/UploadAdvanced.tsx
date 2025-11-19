"use client";

import { useState } from "react";

export default function UploadAdvanced() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const api = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);

    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);

    try {
      await fetch(`${api}/upload`, { method: "POST", body: fd });
    } catch (err) {
      console.error("upload error", err);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto">

      {/* Título */}
      <label className="block text-left mb-3 text-lg font-semibold text-purple-300">
        Subir archivo OWL
      </label>

      {/* Card principal */}
      <div className="bg-slate-900/40 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-md shadow-xl">

        {/* Input visual premium */}
        <label
          htmlFor="file-input"
          className="cursor-pointer flex flex-col items-center justify-center w-full border-2 border-dashed border-purple-400/40 hover:border-purple-400/80 transition-all rounded-xl py-10 px-4 bg-slate-800/40 hover:bg-slate-800/60"
        >
          <span className="text-4xl mb-3">📁</span>

          <span className="text-base text-purple-200 font-medium">
            {fileName ? "Archivo seleccionado:" : "Seleccionar archivo OWL"}
          </span>

          <span className="mt-2 text-sm text-gray-400">
            {fileName || "Formatos permitidos: .owl, .rdf — máximo 50MB"}
          </span>
        </label>

        {/* Input oculto */}
        <input
          id="file-input"
          type="file"
          accept=".owl,.rdf"
          onChange={handleFile}
          className="hidden"
        />

        {/* Botón */}
        <div className="mt-6 flex justify-end">
          <button
            className="rounded-lg px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold shadow-md hover:shadow-purple-500/40 transition disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={uploading}
          >
            {uploading ? "Subiendo..." : "Subir"}
          </button>
        </div>

        {/* Nombre del archivo abajo */}
        {fileName && (
          <p className="mt-4 text-sm text-purple-300">
            Archivo cargado: <span className="font-semibold text-white">{fileName}</span>
          </p>
        )}
      </div>
    </div>
  );
}
