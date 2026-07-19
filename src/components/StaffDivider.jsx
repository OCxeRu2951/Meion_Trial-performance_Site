import React from "react";

/**
 * 五線譜（staff）をモチーフにしたディバイダー。
 * 作曲コースの「譜面」とMSDコースの「波形／信号」の両方を、
 * 一本の線のアニメーションで橋渡しする、このサイトのシグネチャー要素。
 *
 * current / total を渡すと、現在の演奏順を五線上の「音符」として
 * プログレスのように表示する（プログラム進行 = 譜面上の位置、というアイデア）。
 */
export default function StaffDivider({
  current,
  total,
  label,
  className = "",
  animate = true,
}) {
  const lines = [14, 24, 34, 44, 54];
  const hasProgress = Boolean(current && total && total > 1);
  const noteX = hasProgress
    ? 40 + ((current - 1) / (total - 1)) * 520
    : null;

  return (
    <div className={`w-full select-none ${className}`}>
      {label && (
        <div className="mb-2 font-mono text-[11px] tracking-widest2 text-ink-soft/70 uppercase">
          {label}
        </div>
      )}
      <svg
        viewBox="0 0 600 68"
        className="w-full h-auto overflow-visible"
        aria-hidden="true"
      >
        {lines.map((y, i) => (
          <path
            key={y}
            d={`M0 ${y} H600`}
            stroke="#A69C86"
            strokeWidth="1.2"
            className={animate ? "staff-line-path" : ""}
            style={animate ? { animationDelay: `${i * 90}ms` } : undefined}
            fill="none"
          />
        ))}
        {hasProgress && (
          <g style={{ animation: animate ? "fade-up 0.5s ease-out 0.9s both" : "none" }}>
            <line
              x1={noteX}
              y1="34"
              x2={noteX}
              y2="14"
              stroke="#BD8A2C"
              strokeWidth="1.4"
            />
            <ellipse
              cx={noteX}
              cy="36"
              rx="7"
              ry="5.5"
              fill="#BD8A2C"
              transform={`rotate(-18 ${noteX} 36)`}
            />
          </g>
        )}
      </svg>
      {hasProgress && (
        <div className="mt-1 flex justify-between font-mono text-[11px] text-ink-soft/60">
          <span>No. 01</span>
          <span>
            {String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span>No. {String(total).padStart(2, "0")}</span>
        </div>
      )}
    </div>
  );
}
