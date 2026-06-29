export type LegalListItem =
  | string
  | {
      label: string;
      text: string;
    };

export type LegalSubsection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  items?: LegalListItem[];
};

export type LegalSection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  items?: LegalListItem[];
  subsections?: LegalSubsection[];
};

export type LegalDocumentContent = {
  lastUpdated: string;
  heroSubtitle: string;
  introParagraphs: string[];
  sections: LegalSection[];
  contact?: {
    title: string;
    paragraphs?: string[];
    items?: LegalListItem[];
  };
};
