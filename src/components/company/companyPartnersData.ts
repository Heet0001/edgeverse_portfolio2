import atherLogo from "../../assets/images/ather.png";
import cavilLogo from "../../assets/images/cavil.png";

export type CompanyPartner = {
  name: string;
  logo?: string;
};

export const COMPANY_TRUSTED_PARTNERS: CompanyPartner[] = [
  { name: "Ather Energy", logo: atherLogo },
  { name: "Cavil Wireless", logo: cavilLogo },
];
