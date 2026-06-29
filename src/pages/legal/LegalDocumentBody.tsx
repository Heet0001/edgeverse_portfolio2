import type { LegalDocumentContent, LegalListItem } from "./legalContent.types";
import styles from "./legal.module.scss";

const renderEmailLinks = (text: string) => {
  if (!text.includes("contact@edgeverse.ai")) {
    return text;
  }

  const parts = text.split("contact@edgeverse.ai");
  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? (
        <a className={styles.contactLink} href="mailto:contact@edgeverse.ai">
          contact@edgeverse.ai
        </a>
      ) : null}
    </span>
  ));
};

const renderListItem = (item: LegalListItem, index: number) => {
  if (typeof item === "string") {
    return <li key={index}>{item}</li>;
  }

  return (
    <li key={index}>
      <strong>{item.label}:</strong> {item.text}
    </li>
  );
};

const LegalDocumentBody = ({ content }: { content: LegalDocumentContent }) => {
  return (
    <section className={styles.body}>
      <div className={styles.bodyInner}>
        {content.introParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className={styles.introParagraph}>
            {renderEmailLinks(paragraph)}
          </p>
        ))}

        {content.sections.map((section) => (
          <div key={section.title} className={styles.sectionBlock}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>

            {section.intro ? (
              <p className={styles.paragraph}>{section.intro}</p>
            ) : null}

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className={styles.paragraph}>
                {renderEmailLinks(paragraph)}
              </p>
            ))}

            {section.items && section.items.length > 0 ? (
              <ul className={styles.list}>
                {section.items.map((item, index) => renderListItem(item, index))}
              </ul>
            ) : null}

            {section.subsections?.map((subsection) => (
              <div key={subsection.title} className={styles.subsectionBlock}>
                <h3 className={styles.subsectionTitle}>{subsection.title}</h3>

                {subsection.intro ? (
                  <p className={styles.paragraph}>{subsection.intro}</p>
                ) : null}

                {subsection.paragraphs?.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className={styles.paragraph}>
                    {renderEmailLinks(paragraph)}
                  </p>
                ))}

                {subsection.items && subsection.items.length > 0 ? (
                  <ul className={styles.list}>
                    {subsection.items.map((item, index) => renderListItem(item, index))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        ))}

        {content.contact ? (
          <div className={styles.contactBox}>
            <h2 className={styles.sectionTitle}>{content.contact.title}</h2>

            {content.contact.paragraphs?.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className={styles.paragraph}>
                {renderEmailLinks(paragraph)}
              </p>
            ))}

            {content.contact.items && content.contact.items.length > 0 ? (
              <ul className={styles.list}>
                {content.contact.items.map((item, index) => {
                  const text =
                    typeof item === "string"
                      ? item
                      : `${item.label}: ${item.text}`;

                  if (text.includes("contact@edgeverse.ai")) {
                    const [before, after] = text.split("contact@edgeverse.ai");
                    return (
                      <li key={index}>
                        {before}
                        <a className={styles.contactLink} href="mailto:contact@edgeverse.ai">
                          contact@edgeverse.ai
                        </a>
                        {after}
                      </li>
                    );
                  }

                  return renderListItem(item, index);
                })}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default LegalDocumentBody;
