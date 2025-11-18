import Link from "next/link";

type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
};

export const metadata = {
  title: "Blog",
  description: "Latest posts and articles",
};

async function getPosts(): Promise<Post[]> {
  // Replace with real fetch to your CMS / API
  return Promise.resolve([
    {
      id: "1",
      title: "Welcome to the blog",
      excerpt: "A short intro to the blog and what to expect.",
      date: "2025-01-01",
      slug: "welcome-to-the-blog",
    },
    {
      id: "2",
      title: "Project updates",
      excerpt: "Updates on recent portfolio projects and learnings.",
      date: "2025-02-15",
      slug: "project-updates",
    },
  ]);
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString();
  } catch {
    return iso;
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <header style={{ marginBottom: 24 }}>
        <h1 style={{ margin: 0 }}>Blog</h1>
        <p style={{ marginTop: 8, color: "#555" }}>
          Articles, updates, and notes about my projects and experiments.
        </p>
      </header>

      {posts.length === 0 ? (
        <p>No posts yet. Check back soon.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {posts.map((post) => (
            <li
              key={post.id}
              style={{
                padding: 16,
                border: "1px solid #e6e6e6",
                borderRadius: 8,
                marginBottom: 12,
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h2 style={{ margin: "0 0 6px 0" }}>{post.title}</h2>
                <p style={{ margin: 0, color: "#666" }}>{post.excerpt}</p>
                <small
                  style={{ display: "block", marginTop: 8, color: "#999" }}
                >
                  {formatDate(post.date)}
                </small>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
