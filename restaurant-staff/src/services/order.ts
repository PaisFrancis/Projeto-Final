import { OrderStatus } from "../models/order";
import { api } from "./";

export async function newOrder(
  tableNumber: number,
  items: { name: string; quantity: number }[],
  status: OrderStatus
) {
  return api
    .post("/order", { tableNumber, items, status })
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

interface PartialOrder {
  id: string;
  status?: OrderStatus;
  // add other properties of Order here as needed, making them optional
}

export async function updateOrder(order: PartialOrder) {
  return api
    .put(`/order/${order.id}`, order)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function getAllOrders() {
  return api
    .get("/order")
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function getOrder(orderId: string) {
  return api
    .get(`/order/${orderId}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function deleteOrder(orderId: string) {
  return api
    .delete(`/order/${orderId}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}
