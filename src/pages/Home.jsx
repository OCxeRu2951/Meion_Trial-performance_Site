import React from "react";
import { Link } from "react-router-dom";
import StaffDivider from "../components/StaffDivider.jsx";
import { programData } from "../data/programData.js";
import { PROGRAM_PUBLISHED } from "../config.js";

export default function Home() {
  return (
    <div className="pt-24 pb-16 px-5 max-w-md mx-auto md:max-w-2xl">
      {/* ファーストビュー */}
      <section className="fade-up">
        <p className="font-mono text-[11px] tracking-widest2 text-pine uppercase mb-3">
          Composition / Media Sound Design
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold leading-[1.3] text-ink">
          試演会
        </h1>
        <p className="mt-3 font-display text-lg text-ink-soft">
          作曲コース・MSDコース
        </p>

        <StaffDivider className="mt-8" animate />

        <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-4 gap-y-3 text-sm">
          <dt className="font-mono text-ink-soft/60">DATE</dt>
          <dd className="font-display text-lg font-bold text-ink">
            11月7日（土） 14:00 開演
          </dd>

          <dt className="font-mono text-ink-soft/60">VENUE</dt>
          <dd className="font-display text-lg font-bold text-ink">Doホール</dd>

          <dt className="font-mono text-ink-soft/60">PIECES</dt>
          <dd className="font-display text-lg font-bold text-ink">
            {PROGRAM_PUBLISHED ? `全${programData.length}作品` : "近日公開"}
          </dd>
        </dl>
      </section>

      {/* アクセス情報 */}
      <section className="mt-12 border border-rule/40 rounded-sm p-5 bg-paper-dark/60 fade-up">
        <h2 className="font-display text-base font-bold text-ink mb-3">
          アクセス
        </h2>
        <p className="text-sm leading-relaxed text-ink-soft">
          Doホールは博聞館4階、エレベータを出て右手すぐです。
          開場は開演の30分前、13:30 を予定しています。学内の方はもちろん、学外からのご来場も歓迎します。
        </p>
        <p className="mt-3 text-sm leading-relaxed text-ink-soft">
          入場無料・自由席。上履きの必要はありません。
        </p>
      </section>

      {/* プログラムへの導線 */}
      <Link
        to="/program"
        className="mt-10 flex items-center justify-between border-t border-b border-ink/80 py-4 fade-up"
      >
        <span className="font-display text-lg font-bold text-ink">
          プログラムを見る
        </span>
        <span className="font-mono text-pine text-lg">→</span>
      </Link>
    </div>
  );
}
