<!DOCTYPE html>
<html lang="en">
<head>
    <title>PlayEnglish | learn english with funny games !</title>
    <meta name="description" content="PlayEnglish is a small platform where you can learn english vocabulary, words, etc... by playing interactive games ">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php 
    $act=1;
    include 'php/header.php'?>
    <?php include 'php/banner.php'?>
    
    <div class="page-wrap">
        <main class="maindiv">
            <p style="font-size:20px;">
                Welcome to PlayEnglish ! The website where you can learn english by playing funny games ! On this website you can find various games like hanged man or cross words and that help you learn new vocabulary and spell words faster.
            </p>
            <div class=sections>
                <h3><a href="subpages/games.html">Games</a></h3>
                <p class=crop>
                    This is where you can find our games. We developped 4 different games for now but more are to come ! </br> The games we developped are : Cross words, False friends quiz, Hanged men an WordsPerMinute, you can play them on the games section !
                </p>
                <a href="subpages/games.html">View more</a>
            </div>
            <div class=sections>
                <h3><a href="subpages/about.html">About Us</a></h3>
                <p class=crop>
                    In this section you'll learn about us but not only !</br>
                    PlayEnglish is a fictious website created for an english project. This project was initiated by english teachers of the Engineering school of TelecomNancy in France. The goal was to create an IT tool to help people learn english. In our case, we decided to create a website including various types of fun games to learn and revise english vocabulary.
                </p>
                <a href="subpages/about.html">View more</a>
            </div>
            <div class=sections>
                <h3><a href="subpages/contact.html">Contact</a></h3>
                <p class=crop>
                    This is where you can give us your feedback, send us some love or report a bug ! </br> Don't be shy, we don't bite! Here you can report everything by completing a simple form, and we'll reply to you as soon as possible !
                </p>
                <a href="subpages/contact.html">View more</a>
            </div>
            <hr>
            <a href="subpages/hanged.html">go</a>
        
        </main>
    </div>
    <?php include 'php/footer.php'?>
    
</body>
</html>