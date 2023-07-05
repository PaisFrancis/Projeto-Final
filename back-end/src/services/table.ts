import { OrderStatus, PrismaClient, Table } from "@prisma/client";

export const prisma = new PrismaClient();

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

const createTable = async (number: number, capacity: number) => {
  return prisma.table.create({
    data: {
      number,
      capacity,
    },
  });
};

const updateTable = async (number: number, capacity: number) => {
  return prisma.table.update({
    where: { number },
    data: { capacity },
  });
};

const deleteTable = (number: number) => {
  return prisma.table.delete({
    where: { number },
  });
};

export { createTable, getTable, getAllTables, updateTable, deleteTable };
