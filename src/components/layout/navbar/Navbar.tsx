import styles from "./navbar.module.css";
import logo from "../../../assets/images/edgeverse_newlogo.png";
import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import { usePageHeroNavState } from "../../../hooks/usePageHeroNavState";
import { NAV_MEGA_MENUS, type NavMegaMenuKey } from "./navConfig";
import NavMegaMenu from "./NavMegaMenu";

const Navbar = () => {
  const location = useLocation();
  const { pastHero, lightHero } = usePageHeroNavState();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<NavMegaMenuKey | null>(null);
  const mobileMenuId = useId();
  const closeTimerRef = useRef<ReturnType<typeof window.setTimeout> | null>(
    null,
  );
  const headerRef = useRef<HTMLElement>(null);

  const megaOpen = activeMega !== null;
  const isHeroTop = !pastHero && !mobileOpen;
  const useHeroNavStyle = isHeroTop && !lightHero;
  const useTransparentBar = isHeroTop && !megaOpen;
  const navMode = useHeroNavStyle ? "hero" : "solid";

  useLayoutEffect(() => {
    setActiveMega(null);
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openMega = useCallback(
    (key: NavMegaMenuKey) => {
      clearCloseTimer();
      setActiveMega(key);
    },
    [clearCloseTimer],
  );

  const scheduleCloseMega = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = window.setTimeout(() => setActiveMega(null), 50);
  }, [clearCloseTimer]);

  const activeMenu = NAV_MEGA_MENUS.find((m) => m.key === activeMega);

  const linkClass = (active?: boolean) =>
    [
      styles.link,
      useHeroNavStyle ? styles.linkHero : styles.linkSolid,
      active && styles.linkActive,
    ]
      .filter(Boolean)
      .join(" ");

  const screenBlur = createPortal(
    <div
      className={`${styles.screenBlur} ${megaOpen ? styles.screenBlurOpen : ""} ${
        useHeroNavStyle ? "nav-screen-blur-hero" : "nav-screen-blur-solid"
      }`}
      aria-hidden={!megaOpen}
    />,
    document.body,
  );

  return (
    <>
      {screenBlur}
      <header
        ref={headerRef}
        className={styles.navbar}
        data-nav-mode={navMode}
        onMouseLeave={scheduleCloseMega}
      >
        <div
          className={`${styles.bar} ${
            megaOpen
              ? styles.barMegaOpen
              : useTransparentBar
                ? styles.barHero
                : `${styles.barSolid} nav-bar-glass-solid`
          }`}
        >
          <div className={styles.inner}>
            <a className={styles.brand} href="/">
              <img
                className={`${styles.logo} ${useHeroNavStyle ? styles.logoHero : styles.logoSolid}`}
                src={logo}
                alt="EdgeVerse"
              />
            </a>

            <nav className={styles.links} aria-label="Primary">
              {NAV_MEGA_MENUS.map((menu) => (
                <div
                  key={menu.key}
                  className={styles.navItem}
                  onMouseEnter={() => openMega(menu.key)}
                  onFocus={() => openMega(menu.key)}
                >
                  <a
                    href={
                      menu.key === "company"
                        ? "/about"
                        : menu.key === "technology"
                          ? "/product"
                          : menu.key === "industries"
                            ? "/technology"
                            : `/${menu.key}`
                    }
                    className={linkClass(activeMega === menu.key)}
                    aria-expanded={activeMega === menu.key}
                  >
                    <span>{menu.label}</span>
                    <span
                      className={`${styles.caret} ${useHeroNavStyle ? styles.caretHero : styles.caretSolid}`}
                      aria-hidden="true"
                    />
                  </a>
                  {activeMega === menu.key && (
                    <span className={styles.linkUnderline} aria-hidden="true" />
                  )}
                </div>
              ))}
            </nav>

            <div className={styles.actions}>
              <button
                type="button"
                className={`${styles.hamburgerBtn} ${useHeroNavStyle ? styles.hamburgerHero : styles.hamburgerSolid}`}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls={mobileMenuId}
                onClick={() => setMobileOpen((v) => !v)}
              >
                <span className={styles.hamburgerIcon} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {activeMenu && (
          <div className={styles.megaWrap} onMouseEnter={clearCloseTimer}>
            <NavMegaMenu
              menu={activeMenu}
              open={activeMega === activeMenu.key}
              navMode={navMode}
              onContentMouseEnter={clearCloseTimer}
              onContentMouseLeave={scheduleCloseMega}
              onNavigate={() => setActiveMega(null)}
            />
          </div>
        )}

        <div
          className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOverlayOpen : ""}`}
          aria-hidden={!mobileOpen}
          onClick={() => setMobileOpen(false)}
        >
          <div className={styles.mobileBackdrop} aria-hidden="true" />
          <div
            id={mobileMenuId}
            className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.mobileHeader}>
              <span className={styles.mobileTitle}>Menu</span>
              <button
                type="button"
                className={styles.closeBtn}
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <span className={styles.closeIcon} aria-hidden="true" />
              </button>
            </div>
            <nav className={styles.mobileLinks} aria-label="Mobile primary">
              {NAV_MEGA_MENUS.map((menu) => (
                <div key={menu.key} className={styles.mobileGroup}>
                  <div className={styles.mobileGroupLabel}>{menu.label}</div>
                  {menu.columns.flat().map((item) => (
                    <a
                      key={item.href + item.title}
                      href={item.href}
                      className={styles.mobileLinkSub}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              ))}
              <a
                href="/contact"
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
