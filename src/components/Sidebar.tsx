import { Home, TrendingUp, Users, Library, History, PlaySquare, Clock, ThumbsUp, Download, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'ホーム', active: true },
    { icon: TrendingUp, label: 'トレンド' },
    { icon: Users, label: '登録チャンネル' },
  ];

  const libraryItems = [
    { icon: Library, label: 'ライブラリ' },
    { icon: History, label: '履歴' },
    { icon: PlaySquare, label: 'あなたの動画' },
    { icon: Clock, label: '後で見る' },
    { icon: ThumbsUp, label: '高く評価した動画' },
    { icon: Download, label: 'オフライン' },
  ];

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 h-full bg-youtube-dark border-r border-border transition-all duration-300 z-40 overflow-y-auto",
        isOpen ? "w-60" : "w-16"
      )}
    >
      <div className="py-2">
        <div className="space-y-1 px-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn(
                "w-full justify-start hover:bg-youtube-gray",
                item.active && "bg-youtube-gray",
                !isOpen && "justify-center"
              )}
            >
              <item.icon className="h-5 w-5" />
              {isOpen && <span className="ml-3">{item.label}</span>}
            </Button>
          ))}
        </div>

        {isOpen && (
          <>
            <div className="border-t border-border my-3"></div>
            <div className="space-y-1 px-2">
              {libraryItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start hover:bg-youtube-gray"
                >
                  <item.icon className="h-5 w-5" />
                  <span className="ml-3">{item.label}</span>
                </Button>
              ))}
            </div>

            <div className="border-t border-border my-3"></div>
            <div className="space-y-1 px-2">
              <Button
                variant="ghost"
                className="w-full justify-start hover:bg-youtube-gray"
              >
                <Settings className="h-5 w-5" />
                <span className="ml-3">設定</span>
              </Button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
