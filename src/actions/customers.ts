"use server";

import { db } from "@/lib/db";

export async function getCustomers() {
  return db.customer.findMany();
}
