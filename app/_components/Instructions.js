export default function Instructions() {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-semibold text-slate-900 mb-4">
        Instructions:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 text-sm">
        <div className="bg-slate-50 p-3 rounded">
          <div className="font-medium text-slate-700">Form</div>
          <div className="text-slate-600 font-mono">
            Fill out the form and generate your clean environment.
          </div>
        </div>
        <div className="bg-slate-50 p-3 rounded">
          <div className="font-medium text-slate-700">Preview</div>
          <div className="text-slate-600 font-mono">
            Adjust the settings to see live changes in the preview.
          </div>
        </div>
        <div className="bg-slate-50 p-3 rounded">
          <div className="font-medium text-slate-700">Github</div>
          <div className="text-slate-600 font-mono">
            Once satisfied, click the &quot;Push&quot; button to create your
            clean environment.
          </div>
        </div>
        <div className="bg-slate-50 p-3 rounded">
          <div className="font-medium text-slate-700">Vercel</div>
          <div className="text-slate-600 font-mono">
            Vercel will automatically deploy your changes and provide a preview
            url.
          </div>
        </div>
      </div>
    </div>
  );
}
