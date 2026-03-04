"use client";

import { useEffect } from "react";

import dark32 from "./favicon_io_dark/favicon-32x32.png";
import light32 from "./favicon_io_light/favicon-32x32.png";

export function FaviconSwitcher() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateFavicon = (
      event?: MediaQueryList | MediaQueryListEvent,
    ): void => {
      const isDark = event ? event.matches : mediaQuery.matches;

      // Thème sombre du navigateur → logo clair
      // Thème clair du navigateur → logo foncé
      const href = isDark ? light32.src : dark32.src;
      const head = document.head;
      const rels = ["icon", "shortcut icon"];

      rels.forEach((rel) => {
        let link = head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

        if (!link) {
          link = document.createElement("link");
          link.rel = rel;
          head.appendChild(link);
        }

        link.type = "image/png";
        link.href = href;
      });
    };

    updateFavicon();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateFavicon);

      return () => {
        mediaQuery.removeEventListener("change", updateFavicon);
      };
    }

    mediaQuery.addEventListener("change", updateFavicon);

    return () => {
      mediaQuery.removeEventListener("change", updateFavicon);
    };
  }, []);

  return null;
}
