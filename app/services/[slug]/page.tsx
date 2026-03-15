import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICE_GROUPS } from "@/lib/services.config";
import { getMarkdownContent } from "@/lib/markdown";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import ServiceChip from "@/components/ServiceChip";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICE_GROUPS.map((g) => ({ slug: g.slug }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const group = SERVICE_GROUPS.find((g) => g.slug === slug);
  if (!group) notFound();

  const { content } = await getMarkdownContent(group.markdownFile);

  return (
    <main className="px-6 py-10 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-6 inline-block"
      >
        ← Back to services
      </Link>

      <h1 className="text-3xl font-semibold text-zinc-100 mb-2">{group.title}</h1>
      <p className="text-zinc-400 mb-4">{group.description}</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {group.services.map((svc) => (
          <ServiceChip key={svc.label} service={svc} />
        ))}
      </div>

      <hr className="border-zinc-800 mb-8" />

      <MarkdownRenderer content={content} />
    </main>
  );
}
