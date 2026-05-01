"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  iconSrc: string;
  badge?: string;
};

const GROUPS: { title: string; items: NavItem[] }[] = [
  {
    title: "Thể thao",
    items: [
      { label: "BÓNG ĐÁ", href: "/", iconSrc: "/icon-football.png", badge: "HOT" },
      { label: "BÓNG RỔ", href: "/bong-ro", iconSrc: "/icon-basketball.png" },
      { label: "TENNIS", href: "/tennis", iconSrc: "/icon-tenis.png" },
      { label: "CẦU LÔNG", href: "/cau-long", iconSrc: "/icon-badminton.png" },
      { label: "BÓNG CHUYỀN", href: "/bong-chuyen", iconSrc: "/icon-volleyball.png" },
      { label: "ESPORTS", href: "/esports", iconSrc: "/icon-esport.png" },
    ],
  },
  {
    title: "Danh mục",
    items: [
      { label: "Lịch thi đấu", href: "/lich-thi-dau", iconSrc: "/icon-calendar.png" },
      { label: "Bảng Xếp hạng", href: "/bang-xep-hang", iconSrc: "/icon-bxh.png" },
      { label: "Soi kèo", href: "/soi-keo", iconSrc: "/icon-tyle.png" },
      { label: "Tỷ lệ kèo nhà cái", href: "/ty-le-keo", iconSrc: "/icon-tyle.png" },
    ],
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-4">
      {GROUPS.map((g) => (
        <div key={g.title}>
          <div className="px-4 pt-3 text-[11px] font-semibold uppercase tracking-wider text-white/45">
            {g.title}
          </div>
          <div className="mt-2 space-y-1">
            {g.items.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group relative flex items-center justify-between",
                    "px-4 py-2 text-[12px] font-semibold",
                    "transition",
                    isActive ? "text-[rgb(var(--neon))]" : "text-white/75",
                    "hover:text-white",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "absolute left-0 top-1/2 h-7 w-[3px] -translate-y-1/2 rounded-r",
                      isActive
                        ? "bg-[rgb(var(--neon))] shadow-[0_0_18px_rgba(57,255,20,0.35)]"
                        : "bg-transparent group-hover:bg-white/10",
                    ].join(" ")}
                    aria-hidden="true"
                  />

                  <span className="flex items-center gap-3">
                    <Image
                      src={item.iconSrc}
                      alt=""
                      width={16}
                      height={16}
                      className={[
                        "h-4 w-4",
                        isActive ? "opacity-100" : "opacity-80 group-hover:opacity-100",
                      ].join(" ")}
                    />
                    <span className={isActive ? "" : "tracking-wide"}>{item.label}</span>
                  </span>

                  {item.badge ? (
                    <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-extrabold text-white shadow-[0_8px_16px_rgba(0,0,0,0.35)]">
                      {item.badge}
                    </span>
                  ) : null}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </nav>
  );
}

