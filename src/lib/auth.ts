import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { UserRole } from "@prisma/client";

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function hashPIN(pin: string) {
  return bcrypt.hash(pin, 10);
}

export async function verifyPIN(pin: string, hash: string) {
  return bcrypt.compare(pin, hash);
}

export function generatePIN() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function createSession(userId: string, role: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const cookieStore = await cookies();
  cookieStore.set("session", JSON.stringify({ userId, role }), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;
  if (!session) return null;
  return JSON.parse(session) as { userId: string; role: UserRole };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("session");
}
