"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: string;
  gap?: string;
};

export default function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  duration = "40s",
  gap = "3rem",
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:var(--marquee-duration)] [--gap:var(--marquee-gap)]",
        className
      )}
      style={
        {
          "--marquee-duration": duration,
          "--marquee-gap": gap,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 justify-around gap-[var(--gap)]",
          "animate-marquee flex-row",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 justify-around gap-[var(--gap)]",
          "animate-marquee flex-row",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
