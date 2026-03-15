import Link from "next/link";
import type { ServiceGroup } from "@/types/services";
import ServiceChip from "./ServiceChip";

interface Props {
  group: ServiceGroup;
}

export default function ServiceCard({ group }: Props) {
  return (
    <div
      className="rounded-xl border border-zinc-800 bg-zinc-900 p-5 flex flex-col gap-4
                 hover:border-zinc-600 transition-colors duration-200"
    >
      <div>
        <h2 className="text-lg font-semibold text-zinc-100">{group.title}</h2>
        <p className="text-sm text-zinc-400 mt-1">{group.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.services.map((svc) => (
          <ServiceChip key={svc.label} service={svc} />
        ))}
      </div>

      <Link
        href={`/services/${group.slug}`}
        className="mt-auto text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
      >
        View instructions →
      </Link>
    </div>
  );
}
