import { PrismaClient, OrderStatus, Order } from "@prisma/client";

export const prisma = new PrismaClient();

// not used yet
const getAllOrders = () =>
  prisma.order.findMany({
    include: {
      table: true,
      items: {
        include: {
          menuItem: true,
        },
      },
    },
  });

// not used yet
const getOrder = (id: string) =>
  prisma.order.findFirst({
    where: {
      id,
    },
    include: { items: true, table: true },
  });

// this function allows for the creation of an order for a table. It takes quantity so that if 2 items are ordered said item increments in quantity.
const createOrder = async (
  tableNumber: number,
  items: { name: string; quantity: number }[],
  status: OrderStatus
) => {
  // Fetch the required menu items and their prices
  const menuItems = await prisma.menuItem.findMany({
    where: {
      name: {
        in: items.map((item) => item.name),
      },
    },
  });

  // Calculate the total price of the order
  const totalPrice = items.reduce((acc, curr) => {
    const menuItem = menuItems.find((item) => item.name === curr.name);
    return acc + (menuItem?.price || 0) * curr.quantity;
  }, 0);

  // Create the order
  return prisma.order.create({
    data: {
      table: {
        connect: {
          number: tableNumber,
        },
      },
      total: totalPrice,
      status: status,
      items: {
        create: items.map((item) => {
          const menuItem = menuItems.find(
            (menuItem) => menuItem.name === item.name
          );
          return {
            menuItem: {
              connect: {
                name: menuItem?.name,
              },
            },
            quantity: item.quantity,
          };
        }),
      },
    },
    include: {
      table: true,
      items: {
        include: {
          menuItem: true,
        },
      },
    },
  });
};

// this function allows the update of the orders. Mainly useful to update the status. (not used yet)
const updateOrder = (id: string, orderUpdate: Partial<Order>) => {
  return prisma.order.update({
    where: { id },
    data: orderUpdate,
  });
};

// not used yet
const deleteOrder = async (id: string) => {
  // Find the associated order items
  const orderItems = await prisma.orderItem.findMany({
    where: {
      orderId: id,
    },
  });

  // Delete the associated order items
  const deleteOrderItems = prisma.orderItem.deleteMany({
    where: {
      orderId: id,
    },
  });

  // Delete the order
  const deleteOrder = prisma.order.delete({
    where: {
      id,
    },
  });

  // Perform the deletion in a transaction to ensure atomicity
  return prisma.$transaction([deleteOrderItems, deleteOrder]);
};

export { getOrder, getAllOrders, createOrder, updateOrder, deleteOrder };
