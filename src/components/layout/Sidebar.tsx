import {
  LayoutDashboard ,
  CalendarCheck ,
  Briefcase,
  Folder ,
  ChartNoAxesColumn ,
  Package,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import clsx from 'clsx';

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard  />, key: 'dashboard', path: '/' },
  { name: 'Jobs', icon: <Briefcase />, key: 'jobs', path: '/jobs' },
  { name: 'Schedule', icon: <CalendarCheck />, key: 'schedule', path: '/schedule' },
  { name: 'Document', icon: <Folder  />, key: 'document', path: '/document' },
  { name: 'Statistics', icon: <ChartNoAxesColumn  />, key: 'Statistics', path: '/statistics' },
  { name: 'Package View', icon: <Package />, key: 'packages', path: '/packages' },
];

const Sidebar = () => {
  const [active, setActive] = useState('dashboard');
  const navigate = useNavigate();

  const handleNavigation = (item: typeof menuItems[0]) => {
    setActive(item.key);
    navigate(item.path); 
  };

  return (
    <aside className="bg-sidebar-gradient w-64 shadow-md sticky top-0 h-screen flex flex-col justify-between">
      {/* Logo */}
      <div className="px-6 py-4 text-2xl font-semibold">Sample Logo</div>
      {/* Menu Items */}
      <nav className="flex-1 overflow-auto">
        <ul className="p-4 space-y-2">
          {menuItems.map((item) => (
            <li key={item.key}>
              <button
                className={clsx(
                  'flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sm font-medium transition hover:bg-gray-100',
                  active === item.key   ? 'bg-menuActive text-black' : 'hover:bg-menuHover hover:text-black text-gray-700'
                )}
                onClick={() => handleNavigation(item)}
              >
                <span className="w-5 h-5">{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;