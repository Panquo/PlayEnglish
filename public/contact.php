<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Contact</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <?php 
    $act=4;
    include 'php/header.php'?>

    <div class="page-wrap">
        <main class="maindiv">
            <p class=crop>
                This is where you can give us your feedback, send us some love or report a bug ! </br> Don't be shy, we don't bite! Here you can report everything by completing a simple form, and we'll reply to you as soon as possible !
            </p>
            <form action="/my-handling-form-page" method="post">
                <div>
                    <label for="name">Nom :</label>
                    <input type="text" id="name" name="user_name">
                </div>
                <div>
                    <label for="mail">e-mail :</label>
                    <input type="email" id="mail" name="user_mail">
                </div>
                <div>
                    <label for="msg">Message :</label>
                    <textarea id="msg" name="user_message"></textarea>
                </div>
                <div class="button">
                    <button type="submit">Envoyer le message</button>
                </div>
            </form>
            <a href="index.php" target="_parent">retour</a>
        </main>
    </div>
    
<?php include 'php/footer.php'?>

</body>
</html>