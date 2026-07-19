import React from "react";
import { Link } from "react-router-dom";
import StaffDivider from "../components/StaffDivider.jsx";
import ComingSoon from "../components/ComingSoon.jsx";
import { programData } from "../data/programData.js";
import { PROGRAM_PUBLISHED } from "../config.js";

export default function Program() {
  return (
    <div className="pt-24 pb-16 px-5 max-w-md mx-auto md:max-w-2xl">
      <p className="font-mono text-[11px] tracking-widest2 text-pine uppercase mb-2">
        Program
      </p>
      <h1 className="font-display text-3xl font-bold text-ink mb-6">
        プログラム
      </h1>

      {!PROGRAM_PUBLISHED ? (
        <ComingSoon />
      ) : (
        <>
      <StaffDivider label="演奏順" className="mb-8" />

      <ol className="flex flex-col">
        {programData.map((piece) => (
          <li key={piece.id} className="border-b border-rule/30 first:border-t">
            <Link
              to={`/piece/${piece.id}`}
              className="group flex items-center gap-4 py-5 active:bg-paper-dark/50 transition-colors"
            >
              <span className="font-mono text-xs text-ink-soft/60 w-10 shrink-0">
                {String(piece.order).padStart(2, "0")}
              </span>

              <span className="flex-1 min-w-0">
                <span className="block font-display text-lg font-bold text-ink truncate">
                  {piece.title}
                </span>
                <span className="block text-sm text-ink-soft mt-0.5 truncate">
                  {piece.composer} 作曲
                </span>
                <span className="block text-xs text-ink-soft/70 truncate">
                  {piece.performer}
                </span>
              </span>

              <span className="font-mono text-pine text-base shrink-0 transition-transform group-active:translate-x-1">
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
        </>
      )}
    </div>
  );
}
