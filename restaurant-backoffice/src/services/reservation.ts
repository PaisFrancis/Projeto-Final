import { Reservation } from "../models/reservation";
import { api } from "./";

export async function newReservation(
  customerName: string,
  tableId: number,
  reservationTime: Date
) {
  return api
    .post("/reservation", { customerName, tableId, reservationTime })
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function updateReservation(reservation: Reservation) {
  return api
    .put(`/reservation/${reservation.id}`, reservation)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function deleteReservation(reservationId: string) {
  return api
    .delete(`/reservation/${reservationId}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function getReservations() {
  return api
    .get("/reservation")
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}
