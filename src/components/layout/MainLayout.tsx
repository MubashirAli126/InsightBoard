import { useLocation } from "react-router-dom";
import RightPanel from "../dashboard/RightPanel";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/";

  return (
      <div className="flex flex-1">
        {/* Center content */}
        <div className={`flex-1 p-6 ${isDashboard ? '' : ''}`}>
          {children}
        </div>
        {/* Right Panel on Dashboard */}
        {isDashboard && (
          <aside className="w-80 p-4 border-l" style={{backgroundColor: "#FEFAF7"}}>
            <RightPanel />
          </aside>
        )}
      </div>
  );
};

export default MainLayout;