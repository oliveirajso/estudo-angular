export interface Slid {
  value: number;
  alt: string;
  imgSrc: string;
  checked: boolean;
}
export interface SlidDetails {
  [key: number]: Slid;
}
