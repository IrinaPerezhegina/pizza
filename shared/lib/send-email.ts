import { Resend } from "resend";

export const sendEmail = async (
  to: string,
  subject: string,
  template: React.ReactNode
) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data, error } = await resend.emails.send({
    from: "onboardind@resend.dev",
    to,
    subject,
    react: template,
  });
  if (error) {
    throw new Error("Ошибка отправки сообщения");
  }
  return data;
};
