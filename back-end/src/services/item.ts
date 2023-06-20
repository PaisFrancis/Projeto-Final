import { PrismaClient, MenuItem } from "@prisma/client";

const prisma = new PrismaClient();

const getAllMenuItems = () => prisma.menuItem.findMany();

const getMenuItem = (id: string) => {
  return prisma.menuItem.findUnique({
    where: {
      id,
    },
  });
};

const createMenuItem = (
  name: string,
  price: number,
  description: string,
  observations: string | null
) => {
  return prisma.menuItem.create({
    data: {
      name,
      price,
      description,
      observations,
    },
  });
};

const updateMenuItem = (id: string, menuItem: MenuItem) => {
  return prisma.menuItem.update({
    where: { id },
    data: menuItem,
  });
};

const deleteMenuItem = (id: string) => {
  return prisma.menuItem.delete({
    where: { id },
  });
};

export {
  createMenuItem,
  getMenuItem,
  getAllMenuItems,
  updateMenuItem,
  deleteMenuItem,
};
