<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sécuriser les données reçues
    $name = htmlspecialchars($_POST['name']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse e-mail qui recevra les messages
    $to = "serain231@gmail.com";

    // Sujet de l'email
    $email_subject = "Formulaire de contact: $subject";

    // Corps du message
    $email_body = "Nom : $name\n";
    $email_body .= "Prénom : $prenom\n";
    $email_body .= "Email : $email\n\n";
    $email_body .= "Message :\n$message";

    // En-têtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Envoyer l'email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message envoyé avec succès !";
    } else {
        echo "Erreur lors de l'envoi du message. Veuillez réessayer.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>
