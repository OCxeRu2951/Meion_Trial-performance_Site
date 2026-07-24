import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { programData } from "../data/programData.js";
import { PROGRAM_PUBLISHED } from "../config.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // ページ遷移したらメニューを自動で閉じる
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // メニューが開いている間は背景スクロールを止める
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-5 py-4 bg-paper/85 backdrop-blur-sm border-b border-rule/40">
        <Link to="/" className="font-display text-base font-bold tracking-wide text-ink">
          試演会
        </Link>

        {/* バーガーメニューボタン */}
        <button
          type="button"
          aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[7px] focus:outline-none focus-visible:ring-2 focus-visible:ring-pine rounded"
        >
          <span
            className={`block h-[2px] w-6 bg-ink transition-all duration-300 ease-in-out origin-center ${
              isOpen ? "translate-y-[9px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-all duration-300 ease-in-out origin-left ${
              isOpen ? "-translate-x-2 scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-all duration-300 ease-in-out origin-center ${
              isOpen ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* 背景オーバーレイ */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-30 bg-ink/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* サイドバー本体：右からスライドイン */}
      <aside
        className={`fixed top-0 right-0 z-40 h-full w-[78%] max-w-xs bg-paper-dark border-l border-rule/50 shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex h-full flex-col pt-24 px-6 pb-8 overflow-y-auto">
          <div className="font-mono text-[11px] tracking-widest2 text-ink-soft/60 uppercase mb-4">
            Menu
          </div>

          <Link
            to="/"
            className="py-3 font-display text-lg font-bold text-ink border-b border-rule/30"
          >
            ホーム
          </Link>
          <Link
            to="/program"
            className="py-3 font-display text-lg font-bold text-ink border-b border-rule/30"
          >
            プログラム
          </Link>

          <div className="mt-6 font-mono text-[11px] tracking-widest2 text-ink-soft/60 uppercase mb-2">
            作品一覧
          </div>
          {PROGRAM_PUBLISHED ? (
            <div className="flex flex-col">
              {programData.map((piece) => (
                <Link
                  key={piece.id}
                  to={`/piece/${piece.id}`}
                  className="py-2.5 text-sm text-ink-soft border-b border-rule/20 flex items-baseline gap-3"
                >
                  <span className="font-mono text-xs text-pine">
                    {String(piece.order).padStart(2, "0")}
                  </span>
                  <span className="flex-1">{piece.title}</span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm text-ink-soft/60 py-1">現在準備中です</p>
          )}

          <div className="mt-auto pt-8 font-mono text-[10px] text-ink-soft/50 tracking-wide">
            作曲コース・MSDコース 試演会
            <br />
            11.7 SAT 14:00 – Doホール
          </div>
        </nav>
      </aside>
    </>
  );
}
