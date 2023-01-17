<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <script src="./dist/polyfill.bundle.js" async></script>
    <script src="./dist/main.bundle.js" async></script>
    <script src="./dist/slider.bundle.js" async></script>

    <title>Page d'accueil</title>
</head>
<body>
    <header class="background-main">
        <?php include_once('./header.php'); ?>     
    </header>
    <main>
        <section class="intro">
            <div class="intro__block-1">
                <h1>Qui sommes-nous ?</h1>   
                <p>Nous sommes Apolline et Antony, deux baroudeurs amoureux du voyage et de la nature.<br> Après notre rencontre en 2021, nous nous sommes lancés dans la folle aventure de parcourir le monde ensemble.</p>
            </div>
            <div>
                <h2>Nos inspirations</h2>
                <img src="./Img/home/Us.jpg" alt="a changer"> 
                <div class="intro__bloc-txt">
                    <p>Les blogs voyage ont toujours fait partie de notre quotidien. Nous nous sommes inspirés des idées, pris des astuces et des conseils, et nous avons aussi retenu les erreurs à ne pas commettre pendant les séjours. Il y tant d’expériences uniques partagées sur le web…</p>
                    <p>À nous maintenant de porter notre pierre à l’édifice. </p>
                    <p>Il nous paraît évident de vous partager nos vadrouilles, nos expériences, nos découvertes et nos  diverses réflexions autour de ce qui nous fait vibrer : le voyage. Grâce à ce blog nous espérons vous faire rêver et peut-être qu’un jour ce sera votre tour de partager votre expérience, qui sait ?</p>
            
                </div>
            </div>
            <div>
                <h2 class="h2--reverse">Un blog à notre image</h2>
                <img class="img--reverse" src="./Img/home/photo-us.jpeg" alt="a changer">
                <div class="intro__bloc-txt intro__bloc-txt--reverse">        
                    <p>Nous avons décidé de créer de A à Z notre « bébé » blog spécialisé dans le voyage. Antony utilise ses compétences dans la programmation pour structurer le blog. Apolline se charge de créer les contenus et de choisir les plus beaux clichés, histoire de vous faire rêver encore plus ;) </p>
                    <p>Tout cela nécessite des connaissances dans différents domaines, et l’apprentissage n’est qu’à ses débuts pour chacun d’entre nous. C’est un long travail qui, on espère, vous séduira. </p>
                    <p>N’hésitez pas à visiter notre page <a href="aPropos.php">“À propos”</a> pour en savoir plus. </p>
                </div>
            </div>
        </section>
        <section class="container-last-article">
        <h1>Nos derniers articles</h1>
        <article class="slides">
            <a href="index.php">
                <div id="art-1">
                    <img src="https://picsum.photos/id/684/600/400" alt="">
                    <h2>titre titre titre</h2>
                    <p class="date">00 mois 0000</p>
                    <p class="read-article">Lire l'article<span class="arrow"></span></p>
                </div>
            </a>
            <a href="index.php">
                <div id="art-2">
                <img src="https://picsum.photos/id/684/600/400" alt="">
                    <h2>titre titre titre</h2>
                    <p class="date">00 mois 0000</p>
                    <p class="read-article">Lire l'article<span class="arrow"></p>
                </div>
            </a>
        </article> 
        <div class="slider">
            <a href="#art-1"></a>
            <a href="#art-2"></a>
        </div>
        </section>
        <div class="separation-line-article"></div>
        <section class="container-last-article">
            <h1>bons plans</h1>
            <article class="slides">
                <a href="index.php"><div id="bp-1">
                <img src="https://picsum.photos/id/684/600/400" alt="">
                <h2>titre titre titre</h2>
                    <p class="date">00 mois 0000</p>
                    <p class="read-article">Lire l'article<span class="arrow"></span></p>
                </div></a>
            </article>
            <div class="slider">
                <a href="#bp-1"></a>
            </div>
        </section>
    </main>
    <footer>
        <?php include_once('./footer.php'); ?>
    </footer>
</body>
</html>