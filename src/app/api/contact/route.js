import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactEmail from '@/components/emails/contactEmail';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const data = await request.formData();

        const lastname = data.get('lastname');
        const firstname = data.get('firstname');
        const mail = data.get('mail');
        const message = data.get('message');
        const file = data.get('file');

        let attachments = [];
        if (file && file.size > 0) {
            const fileBuffer = await file.arrayBuffer();
            attachments.push({
                filename: file.name,
                content: Buffer.from(fileBuffer),
            });
        }

        await resend.emails.send({
            from: 'Contact Portfolio <onboarding@resend.dev>',
            to: 'mourier.matthieu@gmail.com',
            subject: `Nouveau message de ${firstname} ${lastname}`,
            react: <ContactEmail
                firstname={firstname}
                lastname={lastname}
                mail={mail}
                message={message}
            />,
            attachments,
        });

        return NextResponse.json({ message: "Email envoyé avec succès !" }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Erreur lors de l'envoi de l'email." }, { status: 500 });
    }
}
