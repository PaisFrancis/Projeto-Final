import { api } from ".";
import { Table } from "../models/table";

export async function newTable(number: number, capacity: number) {
  return api
    .post("/table", { number, capacity })
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

export async function updateTable(table: Table) {
  return api
    .put(`/table/${table.number}`, table)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

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
