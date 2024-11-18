"use client";

import { Button } from "@webbun/ui";

export default function ClientButton() {
  return (
    <Button variant="destructive" size="lg" onClick={() => alert("Hello!")}>
      Open alert
    </Button>
  );
}
