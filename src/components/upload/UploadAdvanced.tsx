"use client";

import { useState } from "react";
import { uploadService } from "@/services/uploadService";

export default function UploadAdvanced() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | null>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setFileName(file.name);
    setError(null);
    setUploadSuccess(false);
    setUploadedFileUrl(null);
  }

  async function handleUpload() {
    if (!fileName) return;

    const input = document.getElementById("file-input") as HTMLInputElement;
    const file = input?.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const result = await uploadService.uploadOwlFile(file);
      setUploadSuccess(true);
      setUploadedFileUrl(result.url);
      console.log("Archivo subido exitosamente:", result);
    } catch (err: any) {
      console.error("Error al subir archivo:", err);
      setError(err.response?.data?.message || "Error al subir el archivo. Intenta de nuevo.");
      setUploadSuccess(false);
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
            {fileName || "Formatos permitidos: .owl, .rdf, .ttl, .n3 — máximo 50MB"}
          </span>
        </label>

        {/* Input oculto */}
        <input
          id="file-input"
          type="file"
          accept=".owl,.rdf,.ttl,.n3"
          onChange={handleFile}
          className="hidden"
        />

        {/* Mensajes de estado */}
        {error && (
          <div className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm">
            ❌ {error}
          </div>
        )}

        {uploadSuccess && uploadedFileUrl && (
          <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-300 text-sm">
            Archivo subido exitosamente a Cloudinary
            <a 
              href={uploadedFileUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mt-2 text-purple-400 hover:text-purple-300 underline"
            >
              Ver archivo →
            </a>
          </div>
        )}

        {/* Botón */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleUpload}
            className="rounded-lg px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold shadow-md hover:shadow-purple-500/40 transition disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={uploading || !fileName}
          >
            {uploading ? "Subiendo..." : "Subir"}
          </button>
        </div>

        {/* Nombre del archivo abajo */}
        {fileName && !uploadSuccess && (
          <p className="mt-4 text-sm text-purple-300">
            Archivo seleccionado: <span className="font-semibold text-white">{fileName}</span>
          </p>
        )}
      </div>
    </div>
  );
}
