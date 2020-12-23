export interface ICountry {
  country: string;
  iso2?: string;
  slug?: string;
  confirmed?: number;
  deaths?: number;
  recovered?: number;
  date?: string;
}