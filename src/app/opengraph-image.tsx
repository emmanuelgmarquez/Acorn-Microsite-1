import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { siteTitle } from "@/lib/metadata";

export const alt = `${siteTitle} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social share image generated at build time from src/content/site.ts. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f7f5f0",
          color: "#1a1a17",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 40, height: 4, background: "#1f5c4a" }} />
          <div style={{ fontSize: 26, color: "#1f5c4a", fontFamily: "sans-serif", letterSpacing: 2 }}>
            PORTFOLIO & RÉSUMÉ
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 84, lineHeight: 1.05 }}>{siteTitle}</div>
          <div style={{ fontSize: 34, color: "#57554e", fontFamily: "sans-serif", maxWidth: 1000 }}>
            {site.role}
          </div>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {["Email", "Lifecycle", "Automation", "WordPress", "Front-end"].map((t) => (
            <div
              key={t}
              style={{
                fontSize: 24,
                fontFamily: "sans-serif",
                padding: "10px 22px",
                borderRadius: 999,
                border: "2px solid #cfc9bc",
                background: "#ffffff",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
