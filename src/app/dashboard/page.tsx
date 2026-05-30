import { TaskCard } from "@/components/task/TaskCard";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <h1>Dashboard</h1>
      <TaskCard title="Study React" />
      <TaskCard title="Schedule Builder" />
    </div>
  );
}
