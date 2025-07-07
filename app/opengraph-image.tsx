import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'LandBridge Portfolio'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0f0f0f',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px',
            }}
          >
            {/* 上部のグラデーションバー */}
            <div
              style={{
                width: '120px',
                height: '4px',
                background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)',
                borderRadius: '2px',
                marginBottom: '32px',
              }}
            />
            
            {/* 会社名 */}
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                color: '#ffffff',
                margin: '0',
                marginBottom: '24px',
                letterSpacing: '0.02em',
              }}
            >
              LandBridge株式会社
            </h1>
            
            {/* サブタイトル */}
            <p
              style={{
                fontSize: '28px',
                color: '#94a3b8',
                margin: '0',
                marginBottom: '32px',
                textAlign: 'center',
              }}
            >
              AIによる自動コーディングを活用した開発実績
            </p>
            
            {/* 下部のグラデーションバー */}
            <div
              style={{
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #a78bfa 0%, #60a5fa 100%)',
                borderRadius: '2px',
              }}
            />
          </div>
        </div>
      ),
      {
        ...size,
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}