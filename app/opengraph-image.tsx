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
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)
            `,
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '80px',
            height: '100%',
            position: 'relative',
            zIndex: 10,
          }}
        >
          {/* Logo/Company Name */}
          <div
            style={{
              fontSize: 36,
              fontWeight: 'bold',
              color: '#3b82f6',
              marginBottom: 24,
              letterSpacing: '0.05em',
            }}
          >
            LandBridge株式会社
          </div>
          
          {/* Main Title */}
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            Web制作・アプリ開発の
          </h1>
          <h1
            style={{
              fontSize: 64,
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              textAlign: 'center',
              lineHeight: 1.2,
              marginBottom: 32,
            }}
          >
            実績紹介
          </h1>
          
          {/* Description */}
          <p
            style={{
              fontSize: 24,
              color: '#94a3b8',
              margin: 0,
              textAlign: 'center',
              marginBottom: 48,
            }}
          >
            最新技術で課題解決をサポート
          </p>
          
          {/* Stats */}
          <div
            style={{
              display: 'flex',
              gap: 60,
              marginTop: 32,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 48, fontWeight: 'bold', color: '#3b82f6' }}>15+</div>
              <div style={{ fontSize: 18, color: '#94a3b8', marginTop: 8 }}>開発実績</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 48, fontWeight: 'bold', color: '#8b5cf6' }}>4</div>
              <div style={{ fontSize: 18, color: '#94a3b8', marginTop: 8 }}>サービス領域</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 48, fontWeight: 'bold', color: '#10b981' }}>100%</div>
              <div style={{ fontSize: 18, color: '#94a3b8', marginTop: 8 }}>満足度</div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}