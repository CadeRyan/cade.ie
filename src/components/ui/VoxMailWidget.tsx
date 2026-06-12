"use client";

import { useEffect } from "react";

const SCRIPT_ID = "voxMailScript";
const SERVICE_ID = "8a15c64efd7ec";

/** Injects Cade's own VoxMail voice-message widget (used on the contact page). */
export default function VoxMailWidget() {
  useEffect(() => {
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.defer = true;
    script.setAttribute("data-serviceID", SERVICE_ID);
    script.src = `https://us-central1-vcml-7b6cd.cloudfunctions.net/getScript?serviceID=${SERVICE_ID}`;
    document.body.appendChild(script);
  }, []);

  return null;
}
