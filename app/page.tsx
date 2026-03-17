import { ThemeToggle } from "@/components/ThemeToggle";
import { NameHover } from "@/components/NameHover";
import { LinkPreview } from "@/components/LinkPreview";
import { FocusBlock } from "@/components/FocusBlock";

const writing = [
  {
    slug: "on-building-a-read-it-later-app",
    title: "On building a read-it-later app",
    date: "Dec 2025",
    description: "Notes on async pipelines, semantic search, and why I keep building tools I already use.",
  },
  {
    slug: "running-a-record-store-in-suzhou",
    title: "Running a record store in Suzhou",
    date: "Jun 2025",
    description: "Eight months managing a vinyl shop and performance venue in China. What I learned about music, community, and logistics.",
  },
  {
    slug: "on-backend-pipelines",
    title: "Notes on high-throughput ingestion",
    date: "Mar 2025",
    description: "Patterns for building reliable data pipelines at scale — lessons from three years of enterprise SaaS.",
  },
];

const links = [
  {
    label: "GitHub",
    href: "https://github.com/enpuyou",
    external: true,
    preview: {
      title: "GitHub Profile",
      description: "Software engineer's public projects and contributions",
      image: "https://opengraph.githubusercon tent.com/1234567890/enpuyou/github-dark",
    },
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/enpuyou",
    external: true,
    preview: {
      title: "LinkedIn Profile",
      description: "Professional experience and endorsements",
    },
  },
  {
    label: "Email",
    href: "mailto:enpuyou@gmail.com",
    external: false,
    preview: {
      title: "Send Email",
      description: "enpuyou@gmail.com",
    },
  },
  {
    label: "CV",
    href: "/cv.pdf",
    external: true,
    preview: {
      title: "Resume / CV",
      description: "Full professional background and experience",
    },
  },
];

export default function Home() {
  return (
    <main
      className="main-layout"
      style={{
        paddingTop: "13rem",
        paddingBottom: "10rem",
        paddingLeft: "35rem",
        paddingRight: "8rem",
      }}
    >
      {/* Fixed toggle — upper right corner of viewport */}
      <div
        className="theme-toggle-fixed"
        style={{
          position: "fixed",
          top: "1.5rem",
          right: "1.75rem",
          zIndex: 50,
        }}
      >
        <ThemeToggle />
      </div>

      <div className="col">
        {/* Bio */}
        <FocusBlock initiallyVisible>
          <div
            style={{
              color: "var(--color-text)",
              fontSize: "var(--type-base)",
              lineHeight: 1.25,
              marginBottom: "4rem",
            }}
          >
            <p style={{ marginBottom: "0.85em" }}>
              Originally from Jinhua, <NameHover /> is a software engineer currently based in Seattle. He builds backend systems and
              {" "}
              <a
                href="https://www.read-sedi.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                sed.i
              </a>{""}, a tool for personal reading and curation. A graduate from Allegheny College with double majors in Computer Science and Classical Piano, he is currently completing the master&apos;s program in information systems at the University of Washington.
            </p>

            <p style={{ marginBottom: "0.85em" }}>
              Previously at{" "}
              <a href="https://sciencelogic.com" target="_blank" rel="noopener noreferrer">
                ScienceLogic
              </a>
              , he worked on webhook service, ingestion and postprocessing pipelines, and components for multi-tenant analytics
              for IT monitoring software.
            </p>

            <p style={{ marginBottom: "0.85em" }}>
              Outside of work, he managed{" "}
              <a href="https://baihui.live/shows/dv-live-w-yong-yandsen-25-06-02/en/" target="_blank" rel="noopener noreferrer">
                dv
              </a>
              , an independent record store and venue focused on vinyl, natural wine, and experimental music in Suzhou; co-owned a community{" "}
              <a
                href="https://www.wesa.fm/politics-government/2023-02-07/pittsburgh-will-soon-offer-to-train-food-service-and-retail-workers-in-de-escalation-naloxone-use"
                target="_blank"
                rel="noopener noreferrer"
              >
                café
              </a>{" "}
              in Pittsburgh that led to the establishment of a city-wide crisis support program for frontend retail and food service workers.
            </p>

            <p style={{ marginBottom: "0.85em" }}>
              Enpu also plays records for dance parties. Having performed at many venues in China and Japan, you can catch him playing records at Otherworld in Seattle every now and then, and his latest mix on {" "}
              <a
                className="link-apple"
                href="https://music.apple.com/us/album/bbd-selects-019-enpu-dj-mix/1871105815"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Music
              </a>{""}.
            </p>
          </div>
        </FocusBlock>

        {/* Writing */}
        {/* <FocusBlock>
          <section style={{ marginBottom: "4rem" }}>
            <p
              style={{
                fontSize: "var(--type-sm)",
                color: "var(--color-text-muted)",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Writing
            </p>
            <ul style={{ listStyle: "none" }}>
              {writing.map((post) => (
                <li
                  key={post.slug}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                    marginBottom: "0.9rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "var(--type-sm)",
                      color: "var(--color-text)",
                      minWidth: "5rem",
                      fontVariantNumeric: "tabular-nums",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {post.date}
                  </span>
                  <LinkPreview
                    href={`/writing/${post.slug}`}
                    preview={{ title: post.title, description: post.description }}
                  >
                    {post.title}
                  </LinkPreview>
                </li>
              ))}
            </ul>
          </section>
        </FocusBlock> */}

        {/* Links */}
        <FocusBlock initiallyVisible>
          <section>
            <div style={{ display: "flex", gap: "1.2rem" }}>
              {links.map((link) => (
                <LinkPreview
                  key={link.label}
                  href={link.href}
                  preview={link.preview}
                  external={link.external}
                >
                  {link.label}
                </LinkPreview>
              ))}
            </div>
          </section>
        </FocusBlock>
      </div>
    </main>
  );
}
