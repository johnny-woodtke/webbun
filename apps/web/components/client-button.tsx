"use client";

import { Button } from "@webbun/ui";

export default function ClientButton() {
  return (
    <Button variant="default" size="default" onClick={() => alert("Hello!")}>
      Open alert
    </Button>
  );
}
