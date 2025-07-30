// components/RightSidebar/RecentActivity.tsx
import { Redo2  , FolderSymlink , CircleX, FolderOutput   } from 'lucide-react';
import { JSX } from 'react';

type Activity = {
  icon: JSX.Element;
  text: string;
  bgColor: string;
};

const activities: Activity[] = [
  {
    icon: <Redo2 className="w-6 h-6" style={{color:"#674FC7"}} />,
    text: 'Your subscription expires today',
    bgColor: '#E5E2FF99',
  },
  {
    icon: <FolderSymlink className="w-6 h-6" style={{color:"#FFCB48"}} />,
    text: 'There are 4 new applications',
    bgColor: '#FFEFC499',
  },
  {
    icon: <CircleX className="w-6 h-6" style={{color:"#FF0019CC"}} />,
    text: 'You have closed the job for UI/UX',
    bgColor: '#FEEBED',
  },
  {
    icon: <FolderOutput className="w-6 h-6" style={{color:"#26BD6C"}} />,
    text: 'You have drafted a job',
    bgColor: '#EDFDF4',
  },
];

const RecentActivity = () => {
  return (
    <div className="space-y-4 mt-6">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-base">Recent Activity</h3>
        <button className="bg-sidebar-gradient text-black px-3 py-1 rounded-full text-sm">@</button>
      </div>
      <ul className="space-y-6">
        {activities.map((activity, index) => (
          <li key={index} className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center`} style={{ backgroundColor: activity.bgColor }}>
              {activity.icon}
            </div>
            <p className="text-sm text-gray-700">{activity.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;