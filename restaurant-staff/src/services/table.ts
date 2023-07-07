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

// Get all tables
export async function getAllTables() {
  return api
    .get("/table")
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

// Get table
export async function getTable(number: number) {
  return api
    .get(`/table/${number}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

// Clear table total

export async function clearTable(number: number) {
  return api
    .put(`/table/clear/${number}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}

// Delete a table by its number
export async function deleteTable(tableNumber: number) {
  return api
    .delete(`/table/${tableNumber}`)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}
