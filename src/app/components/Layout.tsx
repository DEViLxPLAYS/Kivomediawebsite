import { Outlet } from "react-router";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
