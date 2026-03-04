export default function SetupGuide({ missingVars }: { missingVars: string[] }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Decoupled Starter!</h1>
        <p className="text-gray-600 mb-6">Let\u2019s connect your app to your Drupal backend to get started.</p>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Missing Environment Variables:</h2>
        <ul className="list-disc pl-5 space-y-1">
          {missingVars.map(v => <li key={v} className="text-red-600 font-mono text-sm">{v}</li>)}
        </ul>
        <p className="text-gray-500 text-sm mt-6">Set these in your .env.local file and restart the dev server.</p>
      </div>
    </div>
  )
}
