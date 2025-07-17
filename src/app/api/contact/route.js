import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { lastname, firstname, mail, message } = await request.json();

        await resend.emails.send({
            from: 'Contact <onboarding@resend.dev>',
            to: 'mourier.matthieu@gmail.com', // Remplacez par l'adresse où vous voulez recevoir les messages
            subject: `Nouveau message de ${firstname} ${lastname}`,
            html: `
                <h2>Nouveau message depuis votre portfolio</h2>
                <p><strong>Nom :</strong> ${lastname}</p>
                <p><strong>Prénom :</strong> ${firstname}</p>
                <p><strong>Email de contact :</strong> ${mail}</p>
                <hr />
                <h3>Message :</h3>
                <p>${message}</p>
            `,
        });

        return NextResponse.json({ message: "Email envoyé avec succès !" }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Erreur lors de l'envoi de l'email." }, { status: 500 });
    }
}
