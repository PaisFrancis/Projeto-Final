import { api } from ".";
import { Table } from "../models/table";

// Get all items
export async function getAllTables() {
  return api
    .get("/table")
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

// Delete an item by its ID
export async function deleteTable(tableNumber: number) {
  return api
    .delete(`/table/${tableNumber}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}
