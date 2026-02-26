"use server";

import { db } from "@/lib/db";

export async function createOrder(data: any) {
  // Order creation logic
}

export async function getOrders() {
  return db.order.findMany();
}
