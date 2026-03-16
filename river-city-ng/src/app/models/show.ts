
export interface Show {
  id: number;
  title: string;
  location: string;
  date: string;      // or Date, with a mapper
  time: string;
  description: string;
  image: string;     // just the file name
  url: string;
  mapUrl: string;
  active: boolean;
  added: string;
  _links: any[];
}