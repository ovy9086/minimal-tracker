import { GlassPane } from "@/components/GlassPane";
import Sidebar from "@/components/sidebar/Sidebar";

export default function AuthRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6 flex flex-row">
        <Sidebar />
        <GlassPane className="w-full h-full flex items-center justify-center">{children}</GlassPane>
      </body>
    </html>
  );
}
