"use client";

import { useEffect, useState } from "react";

/** Live clock for a timezone, hydration-safe. */
export default function LocalTime({
  timezone,
  className,
}: {
  timezone: string;
  className?: string;
}) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: timezone,
    });
    const update = () => setTime(fmt.format(new Date()));
    update();
    const id = window.setInterval(update, 10_000);
    return () => window.clearInterval(id);
  }, [timezone]);

  return (
    <span className={className} suppressHydrationWarning>
      {time || "––:––"}
    </span>
  );
}
