import { MapPin } from 'lucide-react';
import userImage from '../../assets/images/user.jpg';
export default function UserProfileCard() {
  return (
    <div className="text-center space-y-1 py-6">
      <img src={userImage} className="w-20 h-20 rounded-full mx-auto" alt="profile" />
      <p className="font-medium text-lg">Mubashir Ali</p>
      <p className="font-medium text-sm">Javascript Developer</p>
      <div className="flex justify-center items-center text-sm" style={{color:"#8A38F5"}}>
        <MapPin className="w-4 h-4 mr-1" />
        Karachi, Pakistan
      </div>
    </div>
  );
}
