import { Reservation } from "./reservation";

export type Table = {
  number: number;
  createdAt: Date;
  updatedAt: Date;
  capacity: number;
  available: boolean;
  reservation: Reservation;
};
