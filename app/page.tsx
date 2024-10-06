"use client";

import { useEffect, useState } from "react";
import mermaid from "mermaid";

export default function Home() {
  const [mermaidData, setMermaidData] = useState(`graph LR
A[Start] --> B{Decision}
B -- Yes --> C[Process]
B -- No --> D[End]
C --> E[Output]
E --> F[End]
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
    <div>
      <div className="mermaid">{mermaidData}</div>
    </div>
  );
}
