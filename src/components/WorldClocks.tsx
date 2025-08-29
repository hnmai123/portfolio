"use client";

import { useEffect, useRef, useState } from "react";

type Zone = { label: string; tz: string };

const PRESETS: Zone[] = [
  { label: "Melbourne", tz: "Australia/Melbourne" },
  { label: "Ho Chi Minh", tz: "Asia/Ho_Chi_Minh" },
  { label: "Taipei", tz: "Asia/Taipei" },
  { label: "London", tz: "Europe/London" },
  { label: "New York", tz: "America/New_York" },
  { label: "Vancouver", tz: "America/Vancouver" },
];

function fmtTime(d: Date, tz: string) {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: tz,
  }).format(d);
}

function fmtDate(d: Date, tz: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: tz,
  }).format(d);
}

// safer than slicing the string; gets numeric H/M/S in target tz
function getHMS(d: Date, tz: string) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: tz,
  }).formatToParts(d);

  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  const h = Number(map.hour);
  const m = Number(map.minute);
  const s = Number(map.second);
  return { h, m, s };
}

// inside AnalogClock
const to3 = (n: number) => n.toFixed(3);

function AnalogClock({
  h,
  m,
  s,
  size = 96,
}: {
  h: number;
  m: number;
  s: number;
  size?: number;
}) {
  const r = size / 2;
  const cx = r,
    cy = r;

  // Hands rotate via refs (no React re-render each frame)
  const hourRef = useRef<SVGGElement | null>(null);
  const minRef = useRef<SVGGElement | null>(null);
  const secRef = useRef<SVGGElement | null>(null);

  // Initial static positions (SSR-safe) — point straight up; we’ll rotate on client
  const hourLen = r * 0.45;
  const minLen = r * 0.65;
  const secLen = r * 0.75;

  useEffect(() => {
    // Start time baseline using props (updated once per second by parent)
    // We animate smoothly from that baseline using performance.now()
    let raf: number | null = null;
    const start = performance.now();
    const startH = h,
      startM = m,
      startS = s;

    const loop = () => {
      const elapsed = (performance.now() - start) / 1000; // seconds
      const sFrac = startS + elapsed;
      const mFrac = startM + sFrac / 60;
      const hFrac = (startH % 12) + mFrac / 60;

      // angles
      const secAngle = (sFrac / 60) * 360;
      const minAngle = (mFrac / 60) * 360;
      const hourAngle = (hFrac / 12) * 360;

      // apply transforms (rotate around center)
      if (secRef.current)
        secRef.current.setAttribute(
          "transform",
          `rotate(${secAngle} ${cx} ${cy})`,
        );
      if (minRef.current)
        minRef.current.setAttribute(
          "transform",
          `rotate(${minAngle} ${cx} ${cy})`,
        );
      if (hourRef.current)
        hourRef.current.setAttribute(
          "transform",
          `rotate(${hourAngle} ${cx} ${cy})`,
        );

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      if (raf) cancelAnimationFrame(raf);
    };
  }, [h, m, s, cx, cy]);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-label="Analog clock"
      className="shrink-0"
      suppressHydrationWarning
    >
      {/* face */}
      <circle
        cx={cx}
        cy={cy}
        r={r - 2}
        className="fill-white dark:fill-gray-900 stroke-gray-300 dark:stroke-gray-700"
        strokeWidth="2"
      />
      {/* ticks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i / 12) * 360,
          rad = (Math.PI / 180) * (a - 90);
        const p1x = cx + r * 0.82 * Math.cos(rad),
          p1y = cy + r * 0.82 * Math.sin(rad);
        const p2x = cx + r * 0.9 * Math.cos(rad),
          p2y = cy + r * 0.9 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={to3(p1x)}
            y1={to3(p1y)}
            x2={to3(p2x)}
            y2={to3(p2y)}
            className="stroke-gray-400 dark:stroke-gray-600"
            strokeWidth={i % 3 === 0 ? 2.5 : 1.5}
          />
        );
      })}

      {/* Hands (draw straight up; rotate via <g> transform on client) */}
      <g ref={hourRef}>
        <line
          x1={cx}
          y1={cy}
          x2={cx}
          y2={to3(cy - hourLen)}
          className="stroke-gray-800 dark:stroke-white"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>
      <g ref={minRef}>
        <line
          x1={cx}
          y1={cy}
          x2={cx}
          y2={to3(cy - minLen)}
          className="stroke-gray-800 dark:stroke-white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
      <g ref={secRef}>
        <line
          x1={cx}
          y1={cy}
          x2={cx}
          y2={to3(cy - secLen)}
          className="stroke-red-500"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      {/* center pin */}
      <circle cx={cx} cy={cy} r="3" className="fill-red-500" />
      <circle
        cx={cx}
        cy={cy}
        r="1.5"
        className="fill-white dark:fill-gray-900"
      />
    </svg>
  );
}

export default function WorldClocks() {
  const [now, setNow] = useState<Date>(() => new Date());

  // tick every second
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PRESETS.map((z) => {
          const time = fmtTime(now, z.tz);
          const date = fmtDate(now, z.tz);
          const { h, m, s } = getHMS(now, z.tz);
          const isNight = h < 6 || h >= 18;

          return (
            <div
              key={z.tz}
              className="relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-800/60 backdrop-blur p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-lg font-semibold">{z.label}</div>
                <div
                  className={`h-2.5 w-2.5 rounded-full ${isNight ? "bg-indigo-500" : "bg-amber-400"} shadow`}
                />
              </div>

              <div className="flex items-center gap-4">
                {/* Analog clock */}
                <AnalogClock h={h} m={m} s={s} size={96} />

                {/* Digital time & date */}
                <div>
                  <div className="text-3xl font-bold tabular-nums leading-none">
                    {time}
                  </div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {date}
                  </div>
                  <div className="mt-3 text-xs text-gray-500">
                    Time Zone:{" "}
                    <code className="rounded bg-gray-100 dark:bg-gray-900 px-1 py-0.5">
                      {z.tz}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
