"use client";

import { usePreview } from "./PreviewContext";

export function LeftPanel() {
  const { preview } = usePreview();

  const getDomain = (url: string) => {
    if (!url) return "";
    try {
      const domain = new URL(url).hostname;
      return domain.replace("www.", "");
    } catch {
      return "";
    }
  };

  return (
    <>
      <style>{`
        @keyframes preview-fade-in {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes preview-fade-out {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-8px);
          }
        }

        .preview-card {
          animation: preview-fade-in 200ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .preview-card.exit {
          animation: preview-fade-out 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div
        style={{
          position: "fixed",
          left: "2rem",
          top: "50%",
          transform: "translateY(-50%)",
          width: 280,
          pointerEvents: preview ? "auto" : "none",
          zIndex: 10,
        }}
      >
        {preview && (
          <div
            className="preview-card"
            style={{
              background: "var(--color-bg-subtle)",
              border: "1px solid var(--color-border)",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(8px)",
              transition: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Image/Thumbnail */}
            {preview.image ? (
              <div
                style={{
                  width: "100%",
                  height: "160px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                <img
                  src={preview.image}
                  alt={preview.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.95,
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "160px",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                  borderBottom: "1px solid var(--color-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-text-muted)",
                  fontSize: "var(--type-sm)",
                }}
              >
                {getDomain(preview.url || "")}
              </div>
            )}

            {/* Content */}
            <div
              style={{
                padding: "1rem",
              }}
            >
              <h3
                style={{
                  color: "var(--color-text)",
                  fontSize: "var(--type-sm)",
                  fontWeight: 600,
                  lineHeight: 1.4,
                  marginBottom: "0.5rem",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {preview.title}
              </h3>

              <p
                style={{
                  color: "var(--color-text-secondary)",
                  fontSize: "13px",
                  lineHeight: 1.5,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {preview.description}
              </p>

              {preview.url && (
                <div
                  style={{
                    marginTop: "0.75rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--color-border)",
                    fontSize: "12px",
                    color: "var(--color-text-muted)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {getDomain(preview.url || "")}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
