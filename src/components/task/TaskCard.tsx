interface TaskCardProps {
  title: string;
  dateCreated: Date;
  date?: Date;
  priority?: string;
}

export function TaskCard({ title }: TaskCardProps) {
  return <div className="border rounded p-4">{title}</div>;
}
