"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { Button } from "@nextui-org/button";
import React from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="flat"
      isIconOnly
      onClick={() => {
        console.log("ThemeSwitcher.tsx: theme:", theme);
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </Button>
  );
}
