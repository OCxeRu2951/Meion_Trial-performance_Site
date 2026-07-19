import React from "react";
import StaffDivider from "./StaffDivider.jsx";

/**
 * プログラム未確定の間に表示する「準備中」プレースホルダー。
 * 五線譜モチーフを使い、他画面とトーンを揃えている。
 */
export default function ComingSoon({ note }) {
  return (
    <div className="fade-up py-10 text-center">
      <StaffDivider className="mb-10" animate={false} />
      <p className="font-mono text-[11px] tracking-widest2 text-pine uppercase mb-3">
        Coming Soon
      </p>
      <p className="font-display text-2xl font-bold text-ink mb-3">
        現在準備中です
      </p>
      <p className="text-sm text-ink-soft leading-relaxed max-w-xs mx-auto">
        {note || "曲目・演奏順が確定次第、こちらのページで公開します。しばらくお待ちください。"}
      </p>
      <StaffDivider className="mt-10" animate={false} />
    </div>
  );
}
