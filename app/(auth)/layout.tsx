import { GlassPane } from "@/components/GlassPane";

export default function AuthRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="w-full h-full flex items-center">{children}</GlassPane>
      </body>
    </html>
  );
}
