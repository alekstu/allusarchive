interface Props {
  content: string;
}

export default function MarkdownRenderer({ content }: Props) {
  return (
    <article
      className="prose prose-invert prose-zinc max-w-none
                 prose-headings:text-zinc-100
                 prose-p:text-zinc-300
                 prose-li:text-zinc-300
                 prose-strong:text-zinc-200
                 prose-code:bg-zinc-800 prose-code:text-zinc-200 prose-code:rounded prose-code:px-1
                 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-700
                 prose-a:text-slate-400 prose-a:no-underline hover:prose-a:underline
                 prose-hr:border-zinc-700"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
