import { Html, Head, Preview, Heading, Section, Text } from '@react-email/components';

export default function ContactEmail({ firstname, lastname, mail, message }) {

    return (
        <Html lang="fr" dir="ltr">
            <Head>
                <title>Nouveau message de contact</title>
            </Head>
            <Preview>Nouveau message depuis votre portfolio</Preview>
            <Section style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
                <Heading style={{ color: '#333' }}>Nouveau message de {firstname} {lastname}</Heading>
                <Text style={{ color: '#555' }}>Vous avez reçu un nouveau message via le formulaire de votre portfolio.</Text>
                <hr />
                <Section>
                    <Text><strong>Email de contact :</strong> {mail}</Text>
                    <Text><strong>Message :</strong></Text>
                    <Text style={{ padding: '10px', border: '1px solid #ddd', backgroundColor: '#fff' }}>
                        {message}
                    </Text>
                </Section>
            </Section>
        </Html>
    );
}
