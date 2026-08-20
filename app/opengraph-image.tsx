import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_ROLE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0b0f16",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 88,
            height: 88,
            borderRadius: 16,
            background: "#16233d",
            color: "#5b8def",
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          GA
        </div>
        <div style={{ display: "flex", fontSize: 64, fontWeight: 700, color: "#e8eaee" }}>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#5b8def", marginTop: 16 }}>
          {SITE_ROLE}
        </div>
      </div>
    ),
    { ...size },
  );
}