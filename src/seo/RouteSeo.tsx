import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { getStaticPageSeo, isDynamicSeoPath } from "./pageSeo";
import { useSeo } from "./useSeo";

const RouteSeo = () => {
  const { pathname } = useLocation();
  const seo = useMemo(() => {
    if (isDynamicSeoPath(pathname)) return null;
    return getStaticPageSeo(pathname);
  }, [pathname]);

  useSeo(seo);

  return null;
};

export default RouteSeo;
