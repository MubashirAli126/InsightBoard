import JobCard from "../jobs/JobCard";

export default function JobPostedSection() {
  const jobList = [
    { item: "12", title: "Frontend Engineer", description: "Total application" },
    { item: "15", title: "React Developer", description: "Total application" },
    { item: "24", title: "UI/UX Designer", description: "Total application" },
  ];

  return (
    <div className="space-y-4 pb-6">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-base">Job Posted</h3>
        <button className="bg-sidebar-gradient text-black px-3 py-1 rounded-full text-sm">+ Add</button>
      </div>

      <div className="space-y-4">
        {jobList.map((job, idx) => (
          <JobCard key={idx} item={job.item} title={job.title} description={job.description} />
        ))}
      </div>
    </div>
  );
}
