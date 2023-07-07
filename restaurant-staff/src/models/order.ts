import { Table } from "./table"; // assuming you have this model defined

export enum OrderStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
  READY = "READY",
  // include other status values as necessary
}

export interface Order {
  id: string;
  table: Table;
  tableId: number;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  observations?: string;
  orders: OrderItem[];
}

export interface OrderItem {
  id: string;
  order: Order;
  orderId: string;
  menuItem: MenuItem;
  menuItemId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}
