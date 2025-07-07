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
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                fontSize: 60,
                fontWeight: 'bold',
                color: '#60a5fa',
                padding: '0 20px',
              }}
            >
              LandBridge株式会社
            </div>
            <div
              style={{
                fontSize: 36,
                color: '#e2e8f0',
                marginTop: 20,
              }}
            >
              ポートフォリオサイト
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