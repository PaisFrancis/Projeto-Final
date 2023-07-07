import { Item } from "../models/item";
import { api } from "./";

export async function newItem(
  name: string,
  description: string,
  price: number,
  observations?: string
) {
  return api
    .post("/item", { name, description, price, observations })
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function updateItem(item: Item) {
  return api
    .put(`/item/${item.id}`, item)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function getAllItems() {
  return api
    .get("/item")
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function deleteItem(itemId: string) {
  return api
    .delete(`/item/${itemId}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}
