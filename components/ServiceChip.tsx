import type { ServiceLink } from "@/types/services";

interface Props {
  service: ServiceLink;
}

export default function ServiceChip({ service }: Props) {
  return (
    <a
      href={service.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md bg-zinc-800 border border-zinc-700
                 px-3 py-1 text-xs font-medium text-zinc-300
                 hover:bg-zinc-700 hover:text-zinc-100 transition-colors"
    >
      {service.label}
      <span className="text-zinc-500">↗</span>
    </a>
  );
}
