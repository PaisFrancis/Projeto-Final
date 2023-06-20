import { OrderStatus, PrismaClient, Table } from "@prisma/client";

export const prisma = new PrismaClient();

const getAllTables = async () => {
  const tables = await prisma.table.findMany({
    where: {
      deleted: false,
    },
    include: { orders: true },
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

const createTable = async (
  number: number,
  capacity: number,
  available: boolean
) => {
  return prisma.table.create({
    data: {
      number,
      capacity,
      available,
    },
  });
};

const updateTable = async (number: number, table: Table) => {
  const orders = await prisma.order.findMany({
    where: {
      tableId: number,
    },
    select: {
      total: true,
    },
  });

  const total = orders.reduce((acc, order) => acc + order.total, 0);

  const updatedTable = await prisma.table.update({
    where: { number },
    data: {
      ...table,
      total,
    },
  });

  return updatedTable;
};

const deleteTable = (number: number) => {
  return prisma.table.delete({
    where: { number },
  });
};

export { createTable, getTable, getAllTables, updateTable, deleteTable };
