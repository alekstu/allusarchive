import { SERVICE_GROUPS } from "@/lib/services.config";
import ServiceCard from "@/components/ServiceCard";

export default function HomePage() {
  return (
    <main className="px-6 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-zinc-100 mb-2">Services</h1>
      <p className="text-zinc-400 mb-8">
        Click a service to open it, or view the instructions to get started.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICE_GROUPS.map((group) => (
          <ServiceCard key={group.slug} group={group} />
        ))}
      </div>
    </main>
  );
}
