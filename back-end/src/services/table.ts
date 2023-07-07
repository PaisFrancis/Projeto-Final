import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// Function will allows us to fetch all the tables to display them for: reservation purposes on both client-side and backoffice-side.
const getAllTables = async () => {
  const tables = await prisma.table.findMany({
    where: {
      deleted: false,
    },
    include: { orders: true, reservation: true },
  });

  const tablesWithTotal = tables.map((table) => {
    const total = table.orders.reduce((acc, order) => acc + order.total, 0);
    return { ...table, total };
  });

  return tablesWithTotal;
};

// this function allows the waiter to get the total of said table
const getTable = async (number: number) => {
  const table = await prisma.table.findFirst({
    where: {
      number,
      deleted: false,
    },
    include: {
      orders: {
        select: {
          total: true,
          items: true,
        },
      },
      reservation: true,
    },
  });

  if (table) {
    const total = table.orders.reduce((acc, order) => acc + order.total, 0);
    table.total = total;
  }

  return table;
};

//this function allows the backoffice to create tables
const createTable = async (number: number, capacity: number) => {
  return prisma.table.create({
    data: {
      number,
      capacity,
    },
  });
};

//this function allows the backoffice to update both table number and table capacity. I decided to allow the update of the unique identifier because the display of the tables in the physical restaurant might change and for organization purposes I decided this would facilitate
const updateTable = async (number: number, capacity: number) => {
  return prisma.table.update({
    where: { number },
    data: { capacity },
  });
};

// This next function allows us to clear a table.total for when a client is done so that the table is ready for a new client.  Since the table.total is calculated with the orders we also have to reset those.

const clearTableTotal = async (number: number) => {
  // Get the table
  const table = await prisma.table.findUnique({
    where: { number },
    include: { orders: true },
  });

  if (!table) throw new Error("Table not found");

  await Promise.all(
    table.orders.map((order) =>
      prisma.order.update({
        where: {
          id: order.id,
        },
        data: {
          total: 0,
          status: "COMPLETED",
        },
      })
    )
  );

  // Clear the table's total
  await prisma.table.update({
    where: {
      number: table.number,
    },
    data: {
      total: 0,
    },
  });
};

const deleteTable = (number: number) => {
  return prisma.table.delete({
    where: { number },
  });
};

export {
  createTable,
  getTable,
  getAllTables,
  updateTable,
  clearTableTotal,
  deleteTable,
};
