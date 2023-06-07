import { GlassPane } from "@/components/GlassPane";
import Sidebar from "@/components/sidebar/Sidebar";

export default function DashboardRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen candy-mesh p-6">
        <GlassPane className="w-full h-full flex items-center p-6">
          <Sidebar />
          <div className="flex items-center h-full w-full ms-6">{children}</div>
        </GlassPane>
      </body>
    </html>
  );
}
