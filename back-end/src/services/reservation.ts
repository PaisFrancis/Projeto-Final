import { PrismaClient, Reservation } from "@prisma/client";

export const prisma = new PrismaClient();

// this function allows the backoffice to access and view all reservations
const getAllReservations = () => prisma.reservation.findMany();

const getReservation = (id: string) => {
  return prisma.reservation.findUnique({
    where: {
      id,
    },
  });
};

// this reservation serves the purpose of creating reservation both for clients and backoffice, that is why userId is optional. On the client-side a register is required to make a reservation and the id is fetched from the token. On the backoffice side I allowed reservations without id becacuse someone might call the restaurant and book a reservation without being registered
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

//reservations can be updated
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

// I had to create this function so that the reservations on the client-side only displayed said client's reservations
const getReservationsByUserId = async (userId: string) => {
  // First, verify if the user exists
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new Error("User not found");
  }

  // If the user exists, find their reservations
  const reservations = await prisma.reservation.findMany({
    where: {
      userId,
    },
  });

  // Check if the user has any reservations
  if (reservations.length === 0) {
    throw new Error("No reservations found for this user");
  }

  return reservations;
};

export {
  createReservation,
  getReservation,
  getAllReservations,
  updateReservation,
  deleteReservation,
  getReservationsByUserId,
};
