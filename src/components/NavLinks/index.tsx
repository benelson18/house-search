"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import styles from "./navlinks.module.css";
import { cn } from "@/lib/utils";

export default function NavLinks() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  return (
    <div className="mr-4 flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image
          src="/home-search-icon.png"
          width={24}
          height={24}
          alt="House Search Icon"
          className={styles[`logo-${resolvedTheme!}`]}
        />
        <span className="font-bold">House Search</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/map"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/map" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Map
        </Link>
        <Link
          href="/towns"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "towns" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Towns
        </Link>
      </nav>
    </div>
  );
}
