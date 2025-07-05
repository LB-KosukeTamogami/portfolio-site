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
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          backgroundColor: '#0f0f0f',
        }}
      >
        {/* グラデーション背景 - ProfileCardと同じデザイン */}
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
            zIndex: 10,
          }}
        >
          {/* メインタイトル */}
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              margin: 0,
              marginBottom: 32,
              background: 'linear-gradient(to right, #60a5fa, #a78bfa)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '0.05em',
            }}
          >
            LandBridge株式会社
          </h1>
          
          {/* サブタイトル */}
          <p
            style={{
              fontSize: 48,
              color: '#e2e8f0',
              margin: 0,
              fontWeight: '500',
            }}
          >
            ポートフォリオサイト
          </p>
          
          {/* 装飾的な要素 */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 60,
              opacity: 0.6,
            }}
          >
            <div
              style={{
                width: 100,
                height: 3,
                background: 'linear-gradient(to right, transparent, #60a5fa, transparent)',
              }}
            />
            <div
              style={{
                width: 100,
                height: 3,
                background: 'linear-gradient(to right, transparent, #a78bfa, transparent)',
              }}
            />
            <div
              style={{
                width: 100,
                height: 3,
                background: 'linear-gradient(to right, transparent, #818cf8, transparent)',
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}