export default function AdminPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <p className="text-gray-400">
        Portfolio management system will be available after successful deployment.
      </p>
      <div className="mt-8 p-4 bg-gray-800 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Quick Stats</h2>
        <p>Site Status: Deployed Successfully ✅</p>
        <p>Database: Connected to Supabase</p>
      </div>
    </div>
  )
}