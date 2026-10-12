import { ImageResponse } from "next/og";

export const alt = "RE-CUP — Một lần sử dụng, nhiều vòng giá trị";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        color: "#173F2C",
        background: "#F3EBDD",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: 250,
          background: "#DDE5CC",
          right: -70,
          top: 42,
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 250,
          height: 420,
          borderRadius: "70px 70px 110px 110px",
          background: "#805438",
          right: 58,
          top: 112,
          display: "flex",
          border: "14px solid #A77A55",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 184,
          height: 48,
          borderRadius: "50%",
          background: "#173F2C",
          right: 91,
          top: 128,
          display: "flex",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 17,
            border: "2px solid #173F2C",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 5,
              background: "#C8754D",
              display: "flex",
            }}
          />
        </div>
        <span style={{ fontSize: 24, fontWeight: 700 }}>RE-CUP</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
        <span
          style={{
            fontFamily: "serif",
            fontSize: 112,
            lineHeight: 0.82,
            letterSpacing: "-7px",
          }}
        >
          Một lần sử dụng,
        </span>
        <span
          style={{
            marginTop: 26,
            color: "#805438",
            fontFamily: "serif",
            fontSize: 82,
            fontStyle: "italic",
            lineHeight: 0.9,
            letterSpacing: "-4px",
          }}
        >
          nhiều vòng giá trị.
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(23,63,44,0.22)",
          paddingTop: 20,
          fontSize: 17,
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        <span>Circular packaging concept</span>
        <span style={{ marginRight: 350 }}>Rethink · Return · Regrow</span>
      </div>
    </div>,
    size,
  );
}

