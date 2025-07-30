import { Info, Settings, ChevronDown } from 'lucide-react';
import userImage from '../../assets/images/user.jpg';

export default function TopIconsRow() {
  return (
    <div className="flex justify-end items-center space-x-4">
      <button><Info className="w-5 h-5 text-gray-500" /></button>
      <button><Settings className="w-5 h-5 text-gray-500" /></button>
      <div className="relative flex items-center space-x-2 cursor-pointer">
        <img src={userImage} alt="User" className="w-8 h-8 rounded-full" />
        <ChevronDown className="w-4 h-4 text-gray-900" />
      </div>
    </div>
  );
}
