import TopIconsRow from '../jobs/TopIconsRow';
import UserProfileCard from '../jobs/UserProfileCard';
import JobPostedSection from '../jobs/JobPostedSection';
import RecentActivity from '../jobs/RecentActivity';

export default function RightPanel() {
  return (
    <div className="w-full p-2 space-y-4">
      <TopIconsRow />
      <UserProfileCard />
      <hr />
      <JobPostedSection />
      <hr />
      <RecentActivity />
    </div>
  );
}
