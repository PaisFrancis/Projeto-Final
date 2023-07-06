import { api } from "./";

export async function getAllItems() {
  return api
    .get("/item")
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err.message);
    });
}
