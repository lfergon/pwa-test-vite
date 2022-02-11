export type Tea = {
  name: string;
  id: string;
  description: string;
  price: number;
  producerId: string;
};

export type AllTeas = {
  data: Tea[];
};
