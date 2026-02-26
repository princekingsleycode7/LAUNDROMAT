"use server";

import { sendWhatsAppMessage } from "@/lib/whatsapp";

export async function notifyCustomer(phone: string, message: string) {
  return sendWhatsAppMessage(phone, message);
}
