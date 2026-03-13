import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
      }}
    >
      <svg viewBox="0 0 100 100" width="32" height="32">
        <path
          d="M52,3 C71,0 86,11 93,26 C101,42 98,58 92,71 C84,86 70,97 53,98 C37,99 22,92 13,79 C4,66 0,49 5,34 C10,18 26,5 42,2 C46,1 49,2 52,3Z"
          fill="white"
        />
      </svg>
    </div>,
    { ...size }
  );
}
