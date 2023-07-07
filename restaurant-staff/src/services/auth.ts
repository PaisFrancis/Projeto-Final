import { User } from "../models/user";
import { api } from "./";

type AuthResponse = {
  token: string;
};

export type RegisterData = {
  email: string;
  password: string;
  role: string;
  firstName: string;
  lastName?: string;
};

export async function login(
  email: string,
  password: string
): Promise<AuthResponse> {
  return api
    .post("/auth/login", { email, password })
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error.message);
    });
}

export async function register(data: RegisterData): Promise<AuthResponse> {
  return api
    .post("/auth/register", data)
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error.message);
    });
}

export async function profile(): Promise<User> {
  return api
    .get("/auth/profile")
    .then(({ data }) => data)
    .catch((error) => {
      throw new Error(error.message);
    });
}
