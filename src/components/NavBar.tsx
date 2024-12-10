"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import React from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">一些表情包</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link color="foreground" href="/">
            当前状态
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/browse"}>
          <Link color="foreground" href="/browse">
            列表
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/random"}>
          <Link color="foreground" href="/random">
            随机vv
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="w-full" href="/" size="lg">
            当前状态
          </Link>
          <Link className="w-full" href="/browse" size="lg">
            列表
          </Link>
          <Link className="w-full" href="/random" size="lg">
            随机vv
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
