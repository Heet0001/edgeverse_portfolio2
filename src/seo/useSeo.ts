import { useEffect } from "react";
import { applySeoToDocument } from "./applySeoToDocument";
import type { SeoConfig } from "./types";

export function useSeo(config: SeoConfig | null | undefined): void {
  const jsonLdKey = config?.jsonLd ? JSON.stringify(config.jsonLd) : "";

  useEffect(() => {
    if (!config) return;
    applySeoToDocument(config);
  }, [
    config?.title,
    config?.description,
    config?.path,
    config?.image,
    config?.noindex,
    jsonLdKey,
  ]);
}
