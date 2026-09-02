import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Genius Foods — Cardápio digital para restaurantes pelo WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(135deg, #3D1A6E 0%, #2A1050 60%, #1a0a35 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(249,115,22,0.35)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -100,
            left: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(232,53,122,0.25)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#F97316",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
            }}
          >
            🍽️
          </div>
          <div style={{ display: "flex", color: "#ffffff", fontSize: 56, fontWeight: 800 }}>
            Genius Foods
          </div>
        </div>
        <div
          style={{
            display: "flex",
            color: "#F3EEFF",
            fontSize: 30,
            fontWeight: 500,
            maxWidth: 860,
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          Cardápio digital com pedidos pelo WhatsApp, painel em tempo real e IA
        </div>
      </div>
    ),
    { ...size }
  );
}
