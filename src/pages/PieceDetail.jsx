import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import StaffDivider from "../components/StaffDivider.jsx";
import { programData } from "../data/programData.js";
import { PROGRAM_PUBLISHED } from "../config.js";

export default function PieceDetail() {
  const { id } = useParams();
  const index = programData.findIndex((p) => p.id === id);
  const piece = programData[index];

  if (!PROGRAM_PUBLISHED || !piece) {
    return <Navigate to="/program" replace />;
  }

  const prev = programData[index - 1];
  const next = programData[index + 1];

  return (
    <div className="pt-24 pb-16 px-5 max-w-md mx-auto md:max-w-4xl">
      <Link
        to="/program"
        className="inline-flex items-center gap-2 font-mono text-xs text-ink-soft/70 mb-6"
      >
        <span aria-hidden="true">←</span> プログラムへ戻る
      </Link>

      <StaffDivider current={piece.order} total={programData.length} className="mb-8" />

      {/*
        レイアウト：
        - モバイル：flex-col（縦並び）
        - PC（md〜）：flex-row（横並び） 左＝作品名・内容・作曲者 / 右＝演奏順・写真
      */}
      <div className="flex flex-col md:flex-row md:items-start md:gap-12">
        {/* 左側：作品情報 */}
        <div className="flex-1 min-w-0 order-2 md:order-1">
          <p className="font-mono text-[11px] tracking-widest2 text-pine uppercase mb-2">
            No. {String(piece.order).padStart(2, "0")}
          </p>
          <h1 className="font-display text-3xl font-bold text-ink leading-snug">
            {piece.title}
          </h1>
          <p className="mt-2 font-display text-lg text-ink-soft">
            {piece.composer}
          </p>
          <p className="mt-1 text-sm text-ink-soft/80">{piece.performer}</p>

          <div className="mt-6 h-px bg-rule/40" />

          <p className="mt-6 text-[15px] leading-[1.9] text-ink-soft whitespace-pre-line">
            {piece.description}
          </p>
        </div>

        {/* 右側：演奏順・写真 */}
        <div className="order-1 md:order-2 md:w-64 md:shrink-0 mb-6 md:mb-0">
          <div className="flex items-baseline justify-between md:justify-start md:gap-3 mb-3">
            <span className="font-mono text-4xl font-bold text-ink/90">
              {String(piece.order).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs text-ink-soft/60">
              / {String(programData.length).padStart(2, "0")}
            </span>
          </div>
          <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-rule/40 bg-paper-dark">
            <img
              src={piece.image}
              alt={`${piece.title} のイメージ`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* 前後の作品への導線 */}
      <div className="mt-12 flex items-stretch justify-between gap-4 border-t border-rule/40 pt-6">
        {prev ? (
          <Link to={`/piece/${prev.id}`} className="flex-1 min-w-0">
            <span className="block font-mono text-[10px] text-ink-soft/50">PREV</span>
            <span className="block font-display text-sm font-bold text-ink truncate">
              ← {prev.title}
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
        {next ? (
          <Link to={`/piece/${next.id}`} className="flex-1 min-w-0 text-right">
            <span className="block font-mono text-[10px] text-ink-soft/50">NEXT</span>
            <span className="block font-display text-sm font-bold text-ink truncate">
              {next.title} →
            </span>
          </Link>
        ) : (
          <span className="flex-1" />
        )}
      </div>
    </div>
  );
}
