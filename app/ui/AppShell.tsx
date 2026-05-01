import Link from "next/link";
import Image from "next/image";
import { SidebarNav } from "./SidebarNav";
import { TopHeader } from "./TopHeader";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-app">
      <TopHeader />

      <div className="w-full px-0 pb-6 pt-3">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[260px_1fr] md:gap-4 md:px-0">
          <aside className="hidden rounded-none border border-white/5 bg-black/35 backdrop-blur-sm md:sticky md:top-[72px] md:block md:h-[calc(100vh-88px)] md:overflow-auto">
            <SidebarNav />
          </aside>

          <main className="min-w-0 px-3 md:px-4">
            <div className="mb-4 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-[0_10px_26px_rgba(0,0,0,0.35)]">
              <Image
                src="/banner.png"
                alt="banner"
                width={2048}
                height={300}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

