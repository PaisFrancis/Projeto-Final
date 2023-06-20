import { PrismaClient, Reservation } from "@prisma/client";

export const prisma = new PrismaClient();

const getAllReservations = () => prisma.reservation.findMany();

const getReservation = (id: string) => {
  return prisma.reservation.findUnique({
    where: {
      id,
    },
  });
};

const createReservation = async (
  userId: string,
  tableId: number,
  reservationTime: Date
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.id !== userId) {
    throw new Error(
      "Unauthorized creation of reservation. Cannot create reservation for other users"
    );
  }

  return prisma.reservation.create({
    data: { userId, tableId, reservationTime },
  });
};

const updateReservation = (id: string, reservation: Reservation) => {
  return prisma.reservation.update({
    where: { id },
    data: reservation,
  });
};

const deleteReservation = (id: string) => {
  return prisma.reservation.delete({
    where: { id },
  });
};

export {
  createReservation,
  getReservation,
  getAllReservations,
  updateReservation,
  deleteReservation,
};
