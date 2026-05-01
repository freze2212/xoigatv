"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { SidebarNav } from "./SidebarNav";

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="flex h-5 w-6 flex-col justify-center gap-1.5" aria-hidden>
      <span
        className={[
          "h-0.5 w-full rounded-full bg-[#39ff14] transition-transform duration-200",
          open ? "translate-y-2 rotate-45" : "",
        ].join(" ")}
      />
      <span
        className={[
          "h-0.5 w-full rounded-full bg-[#39ff14] transition-opacity duration-200",
          open ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <span
        className={[
          "h-0.5 w-full rounded-full bg-[#39ff14] transition-transform duration-200",
          open ? "-translate-y-2 -rotate-45" : "",
        ].join(" ")}
      />
    </span>
  );
}

function LogoSoccerBall({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" fill="#fff" stroke="#39ff14" strokeWidth="1.25" />
      <path
        fill="none"
        stroke="#39ff14"
        strokeWidth="1.1"
        strokeLinejoin="round"
        d="M12 3.5l2.2 4.1 4.7 1-3.4 3.4.8 4.8L12 14.9l-4.3 2.9.8-4.8-3.4-3.4 4.7-1z"
      />
      <path
        fill="none"
        stroke="#39ff14"
        strokeWidth="0.9"
        d="M7.7 8.6h8.6M6.2 13.2h11.6M9.4 5.8l2.6 12.4M14 5.8L9.6 18.2"
      />
    </svg>
  );
}

function MobileWordmark() {
  return (
    <span className="inline-flex items-center text-2xl font-black italic leading-none tracking-tight sm:text-3xl">
      <span className="text-[#39ff14]">X</span>
      <span className="mx-px inline-flex h-[1.15em] w-[1.15em] shrink-0 items-center justify-center align-middle">
        <LogoSoccerBall className="h-full w-full" />
      </span>
      <span className="text-[#39ff14]">IGA</span>
      <span className="text-[#FFFF00]">.TV</span>
    </span>
  );
}

export function TopHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black shadow-[0_10px_24px_rgba(0,0,0,0.35)] md:bg-[#1C1C1C]">
        <div className="flex h-14 w-full items-center gap-2 px-3 md:h-[56px] md:gap-2.5 md:px-4">
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#39ff14]/40 md:hidden"
            aria-expanded={menuOpen}
            aria-controls={panelId}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? "Đóng menu" : "Mở menu"}</span>
            <HamburgerIcon open={menuOpen} />
          </button>

          <div className="flex min-w-0 flex-1 justify-center md:contents">
            <Link
              href="/"
              className="flex min-w-0 items-center justify-center md:justify-start"
              onClick={() => setMenuOpen(false)}
            >
              <span className="md:hidden">
                <MobileWordmark />
              </span>
              <Image
                src="/logo-xoiga.png"
                alt="XOIGA.TV"
                width={213}
                height={40}
                priority
                className="hidden h-[40px] w-[213px] object-contain md:block"
              />
            </Link>
          </div>

          <div className="h-10 w-10 shrink-0 md:hidden" aria-hidden="true" />

          <div className="hidden flex-1 md:block" />

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="https://t.me/CSKHGG88KJC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[30px] items-center justify-center rounded-full bg-transparent p-0 transition duration-150 hover:-translate-y-px hover:brightness-105"
            >
              <Image src="/btn-cskh.png" alt="btn-cskh" width={157} height={30} />
              <span className="sr-only">CSKH 24/7</span>
            </Link>

            <Link
              href="https://gg8850.com/?id=525443428"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[30px] items-center justify-center rounded-full bg-transparent p-0 transition duration-150 hover:-translate-y-px hover:brightness-105"
            >
              <Image src="/btn-regis.png" alt="btn-regis" width={159} height={30} />
              <span className="sr-only">Đăng ký +68K</span>
            </Link>
          </div>

          <div className="hidden md:block md:w-[260px] lg:w-[300px]">
            <label className="sr-only" htmlFor="q">
              Tìm kiếm
            </label>
            <div className="flex h-[26px] w-full items-center rounded-full border border-white/10 bg-black/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_6px_12px_rgba(0,0,0,0.26)] focus-within:border-[rgba(57,255,20,0.38)] focus-within:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_0_0_3px_rgba(57,255,20,0.08)]">
              <input
                id="q"
                placeholder="Tìm trận đấu, đội bóng..."
                className="h-full w-full border-0 bg-transparent px-2.5 text-[11px] text-white/85 outline-none placeholder:text-white/35"
              />
            </div>
          </div>

          <div className="hidden items-center gap-1.5 md:flex">
            <button
              className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-transparent transition duration-150 hover:-translate-y-px hover:brightness-110 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(57,255,20,0.18)]"
              type="button"
              aria-label="Thông báo"
            >
              <Image src="/icon-alert.png" alt="icon-alert" width={17} height={21} />
            </button>
            <button
              className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-transparent transition duration-150 hover:-translate-y-px hover:brightness-110 focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(57,255,20,0.18)]"
              type="button"
              aria-label="Tài khoản"
            >
              <Image src="/icon-user.png" alt="icon-user" width={17} height={21} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/65 md:hidden"
            aria-label="Đóng menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id={panelId}
            className="fixed bottom-0 left-0 top-14 z-50 w-[min(300px,88vw)] overflow-y-auto border-r border-white/10 bg-[#0a0a0a] shadow-[8px_0_32px_rgba(0,0,0,0.5)] md:hidden"
          >
            <nav className="py-3" aria-label="Điều hướng chính">
              <SidebarNav />
            </nav>
          </div>
        </>
      ) : null}
    </>
  );
}
