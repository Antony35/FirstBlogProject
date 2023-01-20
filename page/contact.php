<?php session_start();
//created a random number to check if the form have been already submit
$random = rand(1, 100);
$_SESSION['random'] = $random;
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href=".././css/style.css">
  <script src=".././dist/polyfill.bundle.js" async></script>
  <script src=".././dist/main.bundle.js" async></script>
  <script src=".././dist/contact.bundle.js" async></script>
  <title>Contact</title>
</head>
<body>
  <header>
    <div class="background">
      <?php include_once('./header.php'); ?>
    </div>
  </header>
  <main>
    <section class="contact">
      <div>
        <h1>Envie de discuter ?</h1> 
        <p>Vous voulez nous contacter, nous poser vos questions ou simplement nous parler sur divers sujets, alors n’hésitez pas à remplir le formulaire ci-dessous.</p>
        <p>Nous nous ferons un plaisir de vous répondre.</p>
      </div>
      <form method="POST" action="submit_contact.php">
        <div>
          <label for="name">Votre Nom :</label>
          <input type="text" id="name" name="user_name" autofocus maxlength="26" required pattern="^[a-zA-Z\- áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ]+$">
          <p id="name-error">Nom invalide</p>
        </div>
        <div>
          <label for="email">Votre e-mail :</label>
          <input type="email" id="email" name="user_email" maxlength="128" required pattern="^([a-z0-9.]+)@([a-z0-9]+)\.+([a-z]{1,4})$">
          <p id="email-error">Email invalide</p>
        </div>
        <div>
          <label for="msg">Votre message :</label>
          <textarea id="msg" name="user_message" htmlspecialchars required></textarea>
        </div>
        <div>
          <input type="hidden" id="recaptchaResponse" name="recaptcha-response">
          <input class="submit-btn" id="submit" type="submit" name="submit-btn" value="Envoyer">
          <input type="hidden" name="random" value="<?php echo($random) ?>">
        </div>
      </form>
      <!-- script recaptcha en attente de réparation probleme je ne recois pas le token -->
      <!--  <script src="https://www.google.com/recaptcha/api.js?render=6LcXXwokAAAAAL2zJNKzOT9kDjUjkHXaw-K1etLf"></script>
      <script>
        function onClick(e) {
          e.preventDefault();
          grecaptcha.ready(function() {
            grecaptcha.execute('6LcXXwokAAAAAL2zJNKzOT9kDjUjkHXaw-K1etLf', {action: 'submit'}).then(function(token) {
              document.getElementById("recaptchaResponse").value = "token";
            });
          });
        }
      </script> -->
      <div>
        <p>À très vite,</p>
      </div>
    </section>
  </main>
  <footer>
  <?php include_once('./footer.php'); ?>
  </footer>
</body>
</html>