import { Resend } from "resend";
import { PayOrderTemplate } from "../components";

export const sendEmail = async (to: string, subject: string, params?: any) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "onboardind@resend.dev",
    to,
    subject,
    react: PayOrderTemplate(params),
  });
  if (error) {
    throw new Error("Ошибка отправки сообщения");
  }
  return data;
};
// 18:26:47
