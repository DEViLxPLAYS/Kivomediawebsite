import { createBrowserRouter } from "react-router";
import { Home } from "@/app/pages/Home";
import { Services } from "@/app/pages/Services";
import { Work } from "@/app/pages/Work";
import { Process } from "@/app/pages/Process";
import { About } from "@/app/pages/About";
import { Contact } from "@/app/pages/Contact";
import { PackageComparison } from "@/app/pages/PackageComparison";
import { Layout } from "@/app/components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "work", Component: Work },
      { path: "pricing", Component: PackageComparison },
      { path: "process", Component: Process },
      { path: "about", Component: About },
      { path: "contact", Component: Contact },
    ],
  },
]);
