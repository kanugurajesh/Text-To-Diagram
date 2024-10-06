"use client";

import { useEffect, useState } from "react";
import mermaid from "mermaid";

export default function Home() {
  const [mermaidData, setMermaidData] = useState(`graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[fa:fa-car Car]
  `);

  const [isClient, setIsClient] = useState(false); // This flag checks if it's the client

  useEffect(() => {
    // Only run on the client side
    setIsClient(true);
    if (isClient) {
      mermaid.initialize({ startOnLoad: true });
      mermaid.contentLoaded();
    }
  }, [isClient]);

  if (!isClient) return null; // Return nothing on the server side to avoid mismatch

  return (
    <div className="mermaid">
      {mermaidData}
    </div>
  );
}
