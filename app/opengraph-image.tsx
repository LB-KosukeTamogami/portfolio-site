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
            fontSize: 128,
            background: '#0f0f0f',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          {/* グラデーション背景 */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(99, 102, 241, 0.2))',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top right, transparent, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
            }}
          />
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              position: 'relative',
              zIndex: 10,
            }}
          >
            {/* 会社名 */}
            <div
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                padding: '0 20px',
                marginBottom: 16,
              }}
            >
              LandBridge株式会社
            </div>
            {/* サブタイトル */}
            <div
              style={{
                fontSize: 32,
                color: '#cbd5e1',
                fontWeight: 500,
              }}
            >
              AIによる自動コーディングを活用した開発実績
            </div>
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