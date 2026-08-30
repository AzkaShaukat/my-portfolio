'use server';

import nodemailer from 'nodemailer';

async function sendEmail(fullname: string, email: string, message: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.NODEMAILER_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.NODEMAILER_USER,
        pass: process.env.NODEMAILER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NODEMAILER_USER,
      to: process.env.USER_TO,
      replyTo: email,
      subject: `Portfolio Contact: ${fullname} sent you a message`,
      html: `
      <h2>New Message from your Portfolio</h2>
      <p><strong>Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return {
      success: "Message sent successfully, I'll get back to you soon. 🤖",
    };
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return {
      error:
        'There seems a problem with the email service, please try again later. 🤖',
    };
  }
}

export async function sendMessageServerAction(
  _previousState: any,
  formData: FormData
) {
  // Validate inputs first
  const fullname = (formData.get('fullname') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const message = (formData.get('message') as string)?.trim();

  // validate fullname
  if (fullname?.length <= 2) {
    return {
      fullnameError:
        'Wow, your name seems to be in stealth mode! 😄 How about unleashing the full version this time?',
    };
  }

  // validate email using regex
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return {
      emailError:
        'Oops! Looks like your email just threw a curveball at my regex skills 😅. Let’s give it another shot—what do you say?',
    };
  }

  // validate message
  if (message?.length <= 10) {
    return {
      messageError: 'That’s a bit brief! 😅 Let it flow—share the whole story!',
    };
  }

  // If validation passes, try to send email
  try {
    const response = await sendEmail(fullname, email, message);
    console.log('Response: ', response);
    if (response.success) {
      return {
        success: "Message sent successfully, I'll get back to you soon. 🤖",
      };
    }
    return {
      error: 'Something went wrong, please try again later. 🤖',
    };
  } catch (error: any) {
    return {
      error: 'Something went wrong, please try again later. 🤖',
    };
  }
}
