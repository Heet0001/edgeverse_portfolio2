import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function getNavOffset() {
  const navHeight = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--nav-height") ||
      "72",
    10,
  );

  return navHeight + 16;
}

function scrollToHash(hash: string, behavior: ScrollBehavior = "smooth") {
  const id = hash.replace(/^#/, "");
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - getNavOffset();
  window.scrollTo({ top, behavior });
  return true;
}

export function useHashScroll() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    let cancelled = false;
    let attempts = 0;

    const tryScroll = () => {
      if (cancelled) return;

      if (scrollToHash(location.hash)) return;

      attempts += 1;
      if (attempts < 40) {
        requestAnimationFrame(tryScroll);
      }
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(tryScroll);
    });

    const onLoad = () => {
      if (!cancelled) scrollToHash(location.hash);
    };

    window.addEventListener("load", onLoad, { once: true });

    const timeoutId = window.setTimeout(() => {
      if (!cancelled) scrollToHash(location.hash);
    }, 300);

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, location.hash]);
}
