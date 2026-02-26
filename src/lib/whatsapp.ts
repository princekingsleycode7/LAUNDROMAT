import twilio from "twilio";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const whatsappNumber = process.env.TWILIO_WHATSAPP_NUMBER;

const client = accountSid && authToken ? twilio(accountSid, authToken) : null;

export async function sendWhatsAppMessage(to: string, body: string) {
  if (!client || !whatsappNumber) return null;
  
  return client.messages.create({
    from: `whatsapp:${whatsappNumber}`,
    to: `whatsapp:${to}`,
    body,
  });
}
