export default function ResultCard({ item }: { item: any }) {
  return (
    <div className="bg-white p-5 rounded-xl shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{item.label || item.title || "Sin título"}</h3>
          <p className="text-sm text-gray-600 mt-1">{item.description || item.abstract || item.summary}</p>
        </div>
        <div className="text-sm text-gray-500">
          <div>{item.type || item.class || ""}</div>
        </div>
      </div>
    </div>
  );
}
