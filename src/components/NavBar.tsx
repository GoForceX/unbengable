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
import { usePathname, useRouter } from "next/navigation";
import { Card, CardBody } from "@nextui-org/card";
import { IconHome, IconList } from "@tabler/icons-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Navbar isMenuOpen={isMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
          onChange={() => setIsMenuOpen(!isMenuOpen)}
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">一些表情包</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem isActive={pathname === "/"}>
          <Link color="foreground" href="/">
            主页
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === "/browse"}>
          <Link color="foreground" href="/browse">
            列表
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem className="gap-6 flex flex-col">
          <Card
            isPressable
            onPress={() => {
              router.push("/");
              setIsMenuOpen(false);
            }}
          >
            <CardBody className="flex-row justify-center items-center gap-8">
              <IconHome color="grey" />
              <p>主页</p>
            </CardBody>
          </Card>
          <Card
            isPressable
            onPress={() => {
              router.push("/browse");
              setIsMenuOpen(false);
            }}
          >
            <CardBody className="flex-row justify-center items-center gap-8">
              <IconList color="grey" />
              <p>列表</p>
            </CardBody>
          </Card>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
