"use client";

import { IconMoon, IconSun } from "@tabler/icons-react";
import { Button } from "@nextui-org/button";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="flat"
      isIconOnly
      onPress={() => {
        console.log("ThemeSwitcher.tsx: theme:", theme);
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </Button>
  );
}
