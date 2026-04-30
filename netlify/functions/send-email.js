const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: JSON.stringify({ error: "Method not allowed" }) };
    }

    let body;
    try {
        body = JSON.parse(event.body);
    } catch {
        return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON" }) };
    }

    const { nombre, correo, asunto, mensaje } = body;

    if (!nombre || !correo || !asunto || !mensaje) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Todos los campos son requeridos" }),
        };
    }

    try {
        await resend.emails.send({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            replyTo: correo,
            subject: `[Consermacom] ${asunto}`,
            html: `
                <h2>Nuevo mensaje de contacto</h2>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Correo:</strong> ${correo}</p>
                <p><strong>Asunto:</strong> ${asunto}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${mensaje.replace(/\n/g, "<br/>")}</p>
            `,
        });

        return { statusCode: 200, body: JSON.stringify({ ok: true }) };
    } catch (error) {
        console.error("Resend error:", error);
        return { statusCode: 500, body: JSON.stringify({ error: "Error al enviar el mensaje" }) };
    }
};
