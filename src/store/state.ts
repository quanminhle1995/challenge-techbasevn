import { ICountry } from "@/interface/ICountry";

export type State = {
  countries: ICountry[],
  selectedCountry: ICountry,
  dataByCountry: ICountry[];
};
export const state: State = {
  countries: [],
  selectedCountry: {
    country: "Viet Nam",
    iso2: "VN",
    slug: "vietnam",
  },
  dataByCountry: []
};