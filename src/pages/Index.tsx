
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import VideoCard from '@/components/VideoCard';
import { cn } from '@/lib/utils';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // サンプル動画データ
  const videos = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=225&fit=crop",
      title: "React初心者向けチュートリアル - コンポーネントの基礎から学ぶ",
      channel: "Tech Learning",
      views: "123万回視聴",
      timestamp: "2日前",
      duration: "15:42",
      verified: true
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
      title: "JavaScript ES6+ 完全ガイド - モダンなプログラミング手法",
      channel: "Code Masters",
      views: "87万回視聴",
      timestamp: "1週間前",
      duration: "28:15",
      verified: true
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225&fit=crop",
      title: "Web開発者のための効率的なワークフロー構築",
      channel: "Developer Hub",
      views: "45万回視聴",
      timestamp: "3日前",
      duration: "12:30"
    },
    {
      id: 4,
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop",
      title: "TypeScriptで作る本格的なWebアプリケーション",
      channel: "Pro Coders",
      views: "210万回視聴",
      timestamp: "5日前",
      duration: "45:20",
      verified: true
    },
    {
      id: 5,
      thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=225&fit=crop",
      title: "UI/UXデザインの基本原則 - ユーザーファーストなデザイン",
      channel: "Design Studio",
      views: "156万回視聴",
      timestamp: "1週間前",
      duration: "22:45"
    },
    {
      id: 6,
      thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=225&fit=crop",
      title: "Next.js 14の新機能とパフォーマンス最適化",
      channel: "Tech Learning",
      views: "89万回視聴",
      timestamp: "4日前",
      duration: "18:30",
      verified: true
    },
    {
      id: 7,
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
      title: "GraphQLとREST APIの比較 - どちらを選ぶべきか",
      channel: "API Masters",
      views: "67万回視聴",
      timestamp: "6日前",
      duration: "25:10"
    },
    {
      id: 8,
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225&fit=crop",
      title: "Docker完全入門 - コンテナ技術の基礎から実践まで",
      channel: "DevOps Pro",
      views: "134万回視聴",
      timestamp: "1週間前",
      duration: "35:45",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar isOpen={sidebarOpen} />
      
      <main
        className={cn(
          "transition-all duration-300 pt-4",
          sidebarOpen ? "ml-60" : "ml-16"
        )}
      >
        <div className="px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 animate-fade-in">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                thumbnail={video.thumbnail}
                title={video.title}
                channel={video.channel}
                views={video.views}
                timestamp={video.timestamp}
                duration={video.duration}
                verified={video.verified}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
