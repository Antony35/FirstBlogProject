<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/album.js" async></script>
    <title>Page d'accueil</title>
</head>
<body>
    <header>
        <?php include_once('./header.php'); ?>     
    </header>
 
    <div class="home-img"></div>
    <section class="about-us">
        <img src="./Img/Us.jpg" alt="Une photo de nous Antony et Apolline le sourire aux lèvre">
        <article class="about-us__text">
            <p>Hello !<br />
            Nous sommes Apolline et Antony,<br />
            deux baroudeurs amoureux de la nature. On s’est lancés dans la folle aventure de parcourir le monde !</p>
            <p>Nous te partageons dans ce blog nos expériences de voyage, nos conseils et notre passion pour la vie en van aménagé.</p>
            <p>Pour en savoir plus, clique <a href="#">ici</a></p>
        </article>
    </section>
    <section class="comming-soon">
        <p>COMING SOON</p>
   </section>
    <footer>
        <?php include_once('./footer.php'); ?>
    </footer>
</body>
</html>