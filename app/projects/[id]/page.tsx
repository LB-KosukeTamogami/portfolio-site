// デバッグ用のシンプルバージョン
export default async function ProjectDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Next.js 15では params は Promise
  const { id } = await params

  return (
    <div style={{ 
      padding: '50px', 
      backgroundColor: 'white', 
      color: 'black',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        PROJECT DETAIL PAGE WORKS!
      </h1>
      <p style={{ fontSize: '24px', marginBottom: '10px' }}>
        Project ID: {id}
      </p>
      <p style={{ fontSize: '18px' }}>
        If you can see this, the route is working correctly.
      </p>
    </div>
  )
}