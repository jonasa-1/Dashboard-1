import { ReactNode } from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  ShieldCheck, 
  Mic, 
  Settings, 
  Search, 
  Bell, 
  Calendar,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreVertical,
  Eye,
  Key,
  Lock,
  Link as LinkIcon,
  Image as ImageIcon,
  FileText,
  MapPin,
  Paperclip,
  Undo,
  Redo,
  Bold,
  Italic,
  List as ListIcon,
  X
} from 'lucide-react';

export type Page = 'dashboard' | 'diary' | 'vault' | 'diktafon';

export interface DiaryEntry {
  id: string;
  title: string;
  content: string;
  date: string;
  time: string;
  location: string;
  tags: string[];
}

export interface SecureNote {
  id: string;
  title: string;
  type: 'finance' | 'home' | 'personal';
  lastModified: string;
  preview: string;
}

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string;
  tags?: string[];
}
