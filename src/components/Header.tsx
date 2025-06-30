
import { Search, Menu, Video, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-youtube-dark border-b border-border sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuToggle}
          className="hover:bg-youtube-gray"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-youtube-red rounded-lg flex items-center justify-center">
            <Video className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold">VideoTube</h1>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative flex">
          <Input
            type="text"
            placeholder="検索"
            className="flex-1 bg-youtube-darker border-youtube-gray focus:border-youtube-red rounded-l-full rounded-r-none px-4 py-2"
          />
          <Button className="bg-youtube-gray hover:bg-youtube-gray/80 rounded-r-full rounded-l-none px-6">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="sm" className="hover:bg-youtube-gray">
          <Video className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" className="hover:bg-youtube-gray">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" className="hover:bg-youtube-gray rounded-full">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
