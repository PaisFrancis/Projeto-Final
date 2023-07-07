export type Reservation = {
  id: string;
  customerName: string;
  reservationTime: Date;
  tableId: number;
  createdAt?: Date;
  updatedAt?: Date;
};
