import { Outlet } from "react-router";
import { Navigation } from "@/app/components/Navigation";

import { Footer } from "@/app/components/Footer";
import { ScrollToTop } from "@/app/components/ScrollToTop";

export function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
