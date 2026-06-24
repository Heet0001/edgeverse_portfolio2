import atherLogo from "../../assets/images/ather.png";
import cavilLogo from "../../assets/images/cavil.png";

export type CompanyPartner = {
  name: string;
  logo?: string;
};

export const COMPANY_TRUSTED_PARTNERS: CompanyPartner[] = [
  { name: "Cavil Wireless", logo: cavilLogo },
  { name: "Ather Energy", logo: atherLogo },
];
