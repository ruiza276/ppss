import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Button } from "@/components/ui/button"
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu"

export const metadata: Metadata = {
  title: "Pleasure Point Studios",
  description: "PPSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning={true}>
    <body>
    <Provider>{children}
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
    <main className="flex flex-col gap-8 row-start-2">
    <MenuRoot positioning={{ placement: "top-start"}} size={"md"} variant="subtle" >
      <MenuTrigger asChild>
        <Button size="2xl" variant="outline">
          Menu
        </Button>
      </MenuTrigger>
        <MenuContent>
          <MenuItem asChild value="policies">
          <a
            href="/Policies"
            target="_blank"
            rel="noreferrer"
          >
            Policies
          </a>
          </MenuItem>
          <MenuItem asChild value="faqs">
          <a
            href="/FAQs"
            target="_blank"
            rel="noreferrer"
          >
            FAQs
          </a>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
      </main>
      </div>
      </Provider>
      </body>
    </html>  
  );
}
