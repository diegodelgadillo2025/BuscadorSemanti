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

    // Subida solo cuando el usuario confirme -> aquí subimos automáticamente para demo
    setUploading(true);
    const fd = new FormData();
    fd.append("file", file);

    try {
      await fetch(`${api}/upload`, { method: "POST", body: fd });
      // podrías mostrar respuesta del backend
    } catch (err) {
      console.error("upload error", err);
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <label className="block text-left mb-2 font-medium">Archivo OWL</label>
      <div className="flex gap-4 items-center">
        <input type="file" accept=".owl" onChange={handleFile} />
        <button
          className="rounded-md px-4 py-2 bg-indigo-600 text-white disabled:opacity-60"
          disabled={uploading}
        >
          {uploading ? "Subiendo..." : "Subir"}
        </button>
      </div>
      {fileName && <p className="mt-3 text-sm text-gray-600">Archivo: {fileName}</p>}
    </div>
  );
}
