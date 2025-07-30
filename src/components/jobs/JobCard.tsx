import Switch from './Switch';

type JobCardProps = {
  item: string;
  title: string;
  description: string;
};

export default function JobCard({ item, title, description }: JobCardProps) {
  return (
    <div className="flex justify-between items-center p-3 rounded-lg bg-sidebar-gradient shadow-sm">
      <div className="bg-white text-xl px-4 py-2 rounded-md" style={{color:"#14151A"}}>
        {item}
      </div>
      <div className="flex-1 px-4">
        <div className="text-sm font-medium" style={{color:"#14151A"}}>{title}</div>
        <div className="text-xs" style={{color:"#0D112666"}}>{description}</div>
      </div>
      <Switch defaultChecked />
    </div>
  );
}
