import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const gender = String(formData.get("gender") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const attachment = formData.get("attachment");

    if (!name || !email || !gender || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill all required fields." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER || process.env.MAIL_USER;
    const emailPass = process.env.EMAIL_PASS || process.env.MAIL_PASS;
    const emailHost = process.env.MAIL_HOST || "smtp.gmail.com";
    const emailTo = process.env.CONTACT_TO_EMAIL || "manjeetsinghh052003@gmail.com";

    if (!emailUser || !emailPass) {
      return NextResponse.json(
        {
          error:
            "Server email is not configured. Add EMAIL_USER/EMAIL_PASS or MAIL_USER/MAIL_PASS in .env.local.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: emailHost,
      port: 587,
      secure: false,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    const mailAttachments: {
      filename: string;
      content: Buffer;
      contentType: string;
    }[] = [];

    if (attachment && attachment instanceof File && attachment.size > 0) {
      if (attachment.type !== "application/pdf") {
        return NextResponse.json(
          { error: "Only PDF attachments are allowed." },
          { status: 400 }
        );
      }

      if (attachment.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: "Attachment must be 5MB or less." },
          { status: 400 }
        );
      }

      const arrayBuffer = await attachment.arrayBuffer();
      mailAttachments.push({
        filename: attachment.name,
        content: Buffer.from(arrayBuffer),
        contentType: "application/pdf",
      });
    }

    await transporter.sendMail({
      from: `Portfolio Contact Form <${emailUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Gender: ${gender}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Gender:</strong> ${escapeHtml(gender)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
      attachments: mailAttachments,
    });

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    const message =
      error instanceof Error && error.message
        ? `Unable to send message. ${error.message}`
        : "Unable to send message right now. Please try again.";

    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
