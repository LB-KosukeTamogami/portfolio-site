import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'LandBridge Portfolio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(to bottom right, #1e40af, #7c3aed)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          <h1 style={{ fontSize: 72, fontWeight: 'bold', margin: 0 }}>
            LandBridge Portfolio
          </h1>
          <p style={{ fontSize: 32, margin: 0, opacity: 0.8 }}>
            Webサイト・アプリケーション開発
          </p>
          <div
            style={{
              display: 'flex',
              gap: 30,
              marginTop: 40,
              fontSize: 24,
              opacity: 0.7,
            }}
          >
            <span>✓ ホームページ制作</span>
            <span>✓ Webアプリ開発</span>
            <span>✓ モバイルアプリ開発</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}