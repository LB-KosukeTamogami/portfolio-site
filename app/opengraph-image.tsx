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
            padding: '40px',
          }}
        >
          {/* カード背景 */}
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              position: 'relative',
              backgroundColor: '#141414',
              borderRadius: '24px',
              overflow: 'hidden',
            }}
          >
            {/* グラデーション背景 1 */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(147, 51, 234, 0.2) 50%, rgba(99, 102, 241, 0.2) 100%)',
              }}
            />
            
            {/* グラデーション背景 2 */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, rgba(147, 51, 234, 0.1) 100%)',
              }}
            />
            
            {/* コンテンツ */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                padding: '80px',
                position: 'relative',
              }}
            >
              {/* 会社名 - グラデーションボックスで表現 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    height: '80px',
                    width: '8px',
                    background: 'linear-gradient(180deg, #60a5fa 0%, #a78bfa 100%)',
                    borderRadius: '4px',
                    marginRight: '24px',
                  }}
                />
                <h1
                  style={{
                    fontSize: '72px',
                    fontWeight: 'bold',
                    color: '#60a5fa',
                    margin: '0',
                    letterSpacing: '0.02em',
                  }}
                >
                  LandBridge株式会社
                </h1>
              </div>
              
              {/* サブタイトル */}
              <p
                style={{
                  fontSize: '32px',
                  fontWeight: '500',
                  color: '#cbd5e1',
                  margin: '0',
                  marginBottom: '40px',
                  textAlign: 'center',
                }}
              >
                AIによる自動コーディングを活用した開発実績
              </p>
              
              {/* 装飾的な要素 */}
              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)',
                    borderRadius: '2px',
                  }}
                />
                <div
                  style={{
                    width: '40px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #a78bfa 0%, #818cf8 100%)',
                    borderRadius: '2px',
                  }}
                />
                <div
                  style={{
                    width: '20px',
                    height: '4px',
                    background: '#60a5fa',
                    borderRadius: '2px',
                    opacity: '0.5',
                  }}
                />
              </div>
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