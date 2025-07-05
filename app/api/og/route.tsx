import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            position: 'relative',
            backgroundColor: '#0f0f0f',
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
          
          {/* コンテンツ */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              position: 'relative',
            }}
          >
            <h1
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                margin: 0,
                marginBottom: 24,
                color: '#60a5fa',
                letterSpacing: '0.02em',
              }}
            >
              LandBridge株式会社
            </h1>
            
            <p
              style={{
                fontSize: 40,
                color: '#e2e8f0',
                margin: 0,
              }}
            >
              ポートフォリオサイト
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e) {
    console.error('OG Image generation failed:', e)
    return new Response('Failed to generate image', { status: 500 })
  }
}