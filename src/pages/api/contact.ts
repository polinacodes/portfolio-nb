// src/pages/api/contact.ts
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get('name')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    // Validación de seguridad en el servidor
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'missing_fields' }),
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'invalid_email' }),
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'Portfolio <hola@polinacodes.dev>',
      to: 'hola@polinacodes.dev',
      replyTo: email,
      subject: `Nuevo mensaje de ${name} [Portfolio]`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 4px solid black; background: #FAF5FF;">
          <h2 style="text-transform: uppercase; margin-bottom: 20px;">¡Tenés un nuevo contacto!</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="background: white; padding: 15px; border: 2px solid black; margin-top: 15px;">
            <strong>Mensaje:</strong><br/>
            ${message.replace(/\n/g, '<br/>')}
          </div>
        </div>
      `
    });

    if (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, error: 'server_error' }),
      { status: 500 }
    );
  }
};