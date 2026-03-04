export default function ContentSetupGuide({ drupalBaseUrl }: { drupalBaseUrl?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="max-w-lg bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Connected!</h1>
        <p className="text-gray-600 mb-4">Your app is connected to Drupal{drupalBaseUrl ? ` at ${drupalBaseUrl}` : ''}, but no homepage content was found.</p>
        <p className="text-gray-600">Import your content JSON to populate your site.</p>
      </div>
    </div>
  )
}
