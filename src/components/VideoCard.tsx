
import { MoreVertical, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface VideoCardProps {
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
  verified?: boolean;
}

const VideoCard = ({ thumbnail, title, channel, views, timestamp, duration, verified = false }: VideoCardProps) => {
  return (
    <div className="video-card group">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1 py-0.5 rounded">
          {duration}
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>
      
      <div className="p-3">
        <div className="flex gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-youtube-red to-purple-600 rounded-full flex-shrink-0 flex items-center justify-center">
            <span className="text-white text-sm font-bold">{channel[0]}</span>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm leading-5 line-clamp-2 mb-1 group-hover:text-white transition-colors">
              {title}
            </h3>
            
            <div className="flex items-center text-xs text-muted-foreground mb-1">
              <span>{channel}</span>
              {verified && <CheckCircle className="w-3 h-3 ml-1 text-muted-foreground" />}
            </div>
            
            <div className="text-xs text-muted-foreground">
              {views} • {timestamp}
            </div>
          </div>
          
          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
