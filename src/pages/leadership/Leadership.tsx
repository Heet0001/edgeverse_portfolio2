import { useMemo, useState } from "react";
import { type LeaderPublic } from "../../api/leaders";
import { API_ORIGIN } from "../../api/client";
import CareerWaveMesh from "../../components/careers/CareerWaveMesh";
import { FALLBACK_ADVISORS, FALLBACK_LEADERS } from "./leadershipData";
import styles from "./leadership.module.scss";

const resolveImg = (src: string) => {
  if (!src) return "";
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("/assets/") || src.startsWith("/src/")) return src;
  return `${API_ORIGIN}${src.startsWith("/") ? "" : "/"}${src}`;
};

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.linkedInIcon}>
    <path
      fill="currentColor"
      d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5H4.5V23H.5zM8.5 8.5H12.3V10.5H12.35C12.88 9.5 14.2 8.4 16.1 8.4 20.2 8.4 21 11.1 21 14.7V23H17V15.2c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.2V23H8.5z"
    />
  </svg>
);

const LinkedInLink = ({ name, href }: { name: string; href: string }) => {
  if (!href) {
    return (
      <span
        className={`${styles.linkedInBadge} ${styles.linkedInBadgeDisabled}`}
        aria-label={`${name} LinkedIn`}
      >
        <LinkedInIcon />
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.linkedInBadge}
      aria-label={`${name} on LinkedIn`}
    >
      <LinkedInIcon />
    </a>
  );
};

const Leadership = () => {
  const [selectedLeaderId, setSelectedLeaderId] = useState(
    FALLBACK_LEADERS[0]._id,
  );
  const [selectedAdvisorId, setSelectedAdvisorId] = useState(
    FALLBACK_ADVISORS[0]._id,
  );

  const displayLeaders = useMemo(
    () => [...FALLBACK_LEADERS].sort((a, b) => a.order - b.order),
    [],
  );

  const displayAdvisors = useMemo(
    () => [...FALLBACK_ADVISORS].sort((a, b) => a.order - b.order),
    [],
  );

  const selectedLeader =
    displayLeaders.find((leader) => leader._id === selectedLeaderId) ??
    displayLeaders[0];

  const selectedAdvisor =
    displayAdvisors.find((advisor) => advisor._id === selectedAdvisorId) ??
    displayAdvisors[0];

  const renderProfileDetails = (
    member: LeaderPublic,
    panelClassName: string,
  ) => (
    <article className={panelClassName} aria-live="polite">
      <h3 className={styles.profileName}>{member.name}</h3>
      {member.role ? (
        <p className={styles.profileRole}>{member.role}</p>
      ) : null}

      {member.bio ? (
        <p className={styles.profileBio}>{member.bio}</p>
      ) : null}

      <div className={styles.profileLinkedIn}>
        <LinkedInLink name={member.name} href={member.linkedIn} />
      </div>
    </article>
  );

  const renderTeamPanel = (
    members: LeaderPublic[],
    active: LeaderPublic,
    onSelect: (id: string) => void,
  ) => (
    <div className={styles.teamLayout}>
      {renderProfileDetails(active, styles.profilePanel)}

      <div className={styles.memberGrid} role="list">
        {members.map((member) => {
          const isActive = member._id === active._id;

          return (
            <div key={member._id} className={styles.memberItem} role="listitem">
              <button
                type="button"
                className={`${styles.memberCard} ${
                  isActive ? styles.memberCardActive : styles.memberCardInactive
                }`}
                onClick={() => onSelect(member._id)}
                aria-pressed={isActive}
                aria-expanded={isActive}
                aria-label={`View profile for ${member.name}`}
              >
                <div className={styles.memberPhotoWrap}>
                  {member.image ? (
                    <img
                      src={resolveImg(member.image)}
                      alt=""
                      className={styles.memberPhoto}
                    />
                  ) : (
                    <span className={styles.memberInitials}>
                      {getInitials(member.name)}
                    </span>
                  )}
                  {isActive ? (
                    <span
                      className={styles.memberPhotoGradient}
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <span className={styles.memberName}>{member.name}</span>
                {member.role ? (
                  <span className={styles.memberRole}>{member.role}</span>
                ) : null}
              </button>

              {isActive
                ? renderProfileDetails(member, styles.memberMobileProfile)
                : null}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <main>
      <section
        id="page-hero"
        className={styles.hero}
        aria-label="Leadership hero"
      >
        <CareerWaveMesh
          className={styles.waveWrap}
          svgClassName={styles.waveSvg}
        />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p className={styles.kicker}>Leadership</p>
            <h1 className={styles.h1}>Meet the team.</h1>
            <p className={styles.heroBlurb}>
              Engineers, researchers, and builders creating India's first ARAS —
              spanning AI, embedded systems, hardware design, and product
              development.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-label="Our leadership team">
        <div className={styles.inner}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Leadership Team</h2>
            <span className={styles.sectionRule} aria-hidden="true" />
          </header>

          {renderTeamPanel(
            displayLeaders,
            selectedLeader,
            setSelectedLeaderId,
          )}
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.advisorySection}`}
        aria-label="Advisory board"
      >
        <div className={styles.inner}>
          <header className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Advisory Board</h2>
            <span className={styles.sectionRule} aria-hidden="true" />
          </header>

          {renderTeamPanel(
            displayAdvisors,
            selectedAdvisor,
            setSelectedAdvisorId,
          )}
        </div>
      </section>
    </main>
  );
};

export default Leadership;
