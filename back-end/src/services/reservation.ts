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
  customerName: string,
  tableId: number,
  reservationTime: Date,
  userId?: string
) => {
  // First, verify if the table exists
  const table = await prisma.table.findUnique({ where: { number: tableId } });

  if (!table) {
    throw new Error("Table not found");
  }

  // Check if the table already has a reservation at the specified time
  const existingReservation = await prisma.reservation.findFirst({
    where: {
      tableId: table.number,
      reservationTime: reservationTime,
    },
  });

  if (existingReservation) {
    throw new Error("Table already has a reservation at this time");
  }

  if (userId) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new Error("User not found");
    }

    // Create reservation with user
    return prisma.reservation.create({
      data: {
        userId,
        customerName,
        tableId,
        reservationTime,
      },
    });
  }

  // Create reservation without user
  return prisma.reservation.create({
    data: {
      customerName,
      tableId,
      reservationTime,
    },
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
