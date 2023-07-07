import { PrismaClient, MenuItem } from "@prisma/client";

const prisma = new PrismaClient();

// function used to display menu
const getAllMenuItems = () => prisma.menuItem.findMany();

// not used yet
const getMenuItem = (id: string) => {
  return prisma.menuItem.findUnique({
    where: {
      id,
    },
  });
};

// function used by the backoffice to create new menuItems
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

// menuItems may be updated since price, description or observations may vary
const updateMenuItem = (id: string, menuItem: MenuItem) => {
  return prisma.menuItem.update({
    where: { id },
    data: menuItem,
  });
};

// function used by backoffice
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
