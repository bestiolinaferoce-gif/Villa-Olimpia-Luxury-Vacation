import { NextResponse } from "next/server"

export async function GET() {
  const resendConfigured = Boolean(process.env.RESEND_API_KEY)
  const whatsappConfigured = Boolean(process.env.WHATSAPP_ACCESS_TOKEN && process.env.WHATSAPP_PHONE_NUMBER_ID)
  const webhookDisabled = process.env.LEADS_WEBHOOK_DISABLED === "true"
  const webhookConfigured = Boolean(process.env.LEADS_WEBHOOK_URL) && !webhookDisabled
  const telegramConfigured = Boolean(process.env.LEADS_TELEGRAM_BOT_TOKEN && process.env.LEADS_TELEGRAM_CHAT_ID)
  const autoresponderEnabled = process.env.LEADS_AUTOREPLY_ENABLED !== "false"
  const persistEnabled = process.env.LEADS_PERSIST_ENABLED !== "false"

  return NextResponse.json(
    {
      ok: true,
      channels: {
        resendConfigured,
        whatsappConfigured,
        webhookConfigured,
        webhookDisabled,
        telegramConfigured,
        autoresponderEnabled,
        persistEnabled,
      },
    },
    { status: 200 }
  )
}
