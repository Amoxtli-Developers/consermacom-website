const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { nombre, correo, asunto, mensaje } = req.body;

    if (!nombre || !correo || !asunto || !mensaje) {
        return res.status(400).json({ error: "Todos los campos son requeridos" });
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

        return res.status(200).json({ ok: true });
    } catch (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: "Error al enviar el mensaje" });
    }
};
