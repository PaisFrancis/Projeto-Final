import { PrismaClient, User, UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();

export async function register(
  email: string,
  password: string,
  role: UserRole = UserRole.USER,
  firstName: string,
  lastName?: string
) {
  /* console.log(
    "Register function called with:",
    email,
    password,
    role,
    firstName,
    lastName
  ); */
  const user = await prisma.user.create({
    data: {
      email,
      password: await bcrypt.hash(password, 8),
      role,
      profile: {
        create: {
          firstName,
          lastName,
        },
      },
    },
  });

  console.log("User created", user);

  return createToken(user);
}

export const findById = async (id: string) =>
  prisma.user.findUnique({
    where: { id },
    include: { profile: true },
  });

export async function attemptLogin(email: string, password: string) {
  const user = await prisma.user.findFirst({
    where: {
      email,
      deleted: false,
    },
  });

  const match = user && (await bcrypt.compare(password, user.password));

  if (!user || !match) {
    throw new Error("Bad credentials");
  }

  return createToken(user);
}

function createToken(user: User): string {
  const token = sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 180,
      email: user.email,
      user_id: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET!
  );

  return token;
}

export const updateUser = (id: string, user: User) => {
  return prisma.user.update({
    where: { id },
    data: user,
  });
};
