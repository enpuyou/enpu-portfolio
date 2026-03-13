import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getAllPosts } from "@/lib/posts";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} — Enpu You` };
}

// Minimal markdown renderer — no external dependency needed
function renderMarkdown(md: string): string {
  return md
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("## ")) {
        return `<h2>${trimmed.slice(3)}</h2>`;
      }
      if (trimmed.startsWith("### ")) {
        return `<h2>${trimmed.slice(4)}</h2>`;
      }
      if (trimmed.startsWith("> ")) {
        const inner = trimmed
          .split("\n")
          .map((l) => l.replace(/^>\s?/, ""))
          .join(" ");
        return `<blockquote>${inner}</blockquote>`;
      }
      // inline: bold, italic, links
      const html = trimmed
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>")
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
        .replace(/\n/g, " ");
      return `<p>${html}</p>`;
    })
    .filter(Boolean)
    .join("\n");
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const html = renderMarkdown(post.content);

  return (
    <main
      style={{
        paddingTop: "4rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="col">
        {/* Back */}
        <Link
          href="/"
          style={{
            display: "inline-block",
            fontSize: "var(--type-sm)",
            color: "var(--color-text-muted)",
            letterSpacing: "0.04em",
            marginBottom: "3rem",
            transition: "color var(--motion-fast) ease",
          }}
        >
          ← back
        </Link>

        {/* Header */}
        <header style={{ marginBottom: "2.5rem" }}>
          <h1
            style={{
              fontFamily: '"Helvetica Neue", -apple-system, sans-serif',
              fontSize: "var(--type-base)",
              fontWeight: 500,
              color: "var(--color-text)",
              marginBottom: "0.5rem",
              lineHeight: 1.4,
            }}
          >
            {post.title}
          </h1>
          <span
            style={{
              fontSize: "var(--type-sm)",
              color: "var(--color-text-muted)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {post.date}
          </span>
        </header>

        <hr className="divider" />

        {/* Body */}
        <article
          className="reader-body"
          style={{ marginTop: "2rem" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </main>
  );
}
