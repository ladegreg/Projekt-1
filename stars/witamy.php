<?php
	
	session_start();
	
	if(!isset($_SESSION['udanarejestracja']))
	{
		header('Location: index.php');
		exit();
	}
	else
	{
		unset ($_SESSION['udanarejestracja']);
	}
	// Usuwamy zmiene rejestracji
	if (isset($_SESSION['fr_login'])) unset($_SESSION['fr_login']);
	if (isset($_SESSION['fr_email'])) unset($_SESSION['fr_email']);
	if (isset($_SESSION['fr_haslo1'])) unset($_SESSION['fr_haslo1']);
	if (isset($_SESSION['fr_haslo2'])) unset($_SESSION['fr_haslo2']);
	if (isset($_SESSION['fr_regulamin'])) unset($_SESSION['fr_regulamin']);
	
	if (isset($_SESSION['e_login'])) unset($_SESSION['e_login']);
	if (isset($_SESSION['e_email'])) unset($_SESSION['e_email']);
	if (isset($_SESSION['e_haslo'])) unset($_SESSION['e_haslo']);
	if (isset($_SESSION['e_regulamin'])) unset($_SESSION['e_regulamin']);
	if (isset($_SESSION['e_bot'])) unset($_SESSION['e_bot']);
?>

<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8" />
		<meta hppt-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <link rel="stylesheet" type="text/css" href="style/style.css">
		<script src='https://www.google.com/recaptcha/api.js'></script>
        <title>Star Saga</title>
    </head>
    <body>
		<div id="contyner">
			<div id="reklama">
				<script type="text/javascript" id="AdTaily_Widget" src="http://static.adtaily.pl/widget.js#r8yhRCo85iMIaHi"></script>
<noscript><a href="http://www.adtaily.pl">Reklama w internecie</a></noscript>
			</div>		
			<div id="logo">
				Star Saga
			</div>
			<div id="reg" class="poziom">
				<form method="post">
					Login:</br><input type="text" name="login"/></br>
<?php
	if (isset($_SESSION['e_login']))
	{
		echo '<div class="erorr">'.$_SESSION['e_login'].'</div>';
		unset($_SESSION['e_login']);
	}
?>
					E-mail:</br><input type="text" name="email"/></br>
<?php
	if (isset($_SESSION['e_email']))
	{
		echo '<div class="erorr">'.$_SESSION['e_email'].'</div>';
		unset($_SESSION['e_email']);
	}
?>
					Twoje hasło:</br><input type="password" name="haslo1"/></br>
<?php
	if (isset($_SESSION['e_haslo']))
	{
		echo '<div class="erorr">'.$_SESSION['e_haslo'].'</div>';
		unset($_SESSION['e_haslo']);
	}
?>
					Powtórz hasło:</br><input type="password" name="haslo2"/></br>
					<label>
					<input type="checkbox" name="regulamin" />Akceptuję regulamin
<?php
	if (isset($_SESSION['e_regulamin']))
	{
		echo '<div class="erorr">'.$_SESSION['e_regulamin'].'</div>';
		unset($_SESSION['e_regulamin']);
	}
?>
					</label></br>
					<div class="g-recaptcha" data-sitekey="6LdqVwwUAAAAAM4DDHct8SEK0OuKbxUmF14SckEj"></div>
					<input type="submit" value="Zarejestruj się"/>
<?php
	if (isset($_SESSION['e_bot']))
	{
		echo '<div class="erorr">'.$_SESSION['e_bot'].'</div>';
		unset($_SESSION['e_bot']);
	}
?>
				</form>
			</div>
			<div id="inf" class="poziom">
				ggggggggggg</br>
<?php

	if(isset($_SESSION['blad']))	echo $_SESSION['blad'];

?>
			<p>Dziękujemy za rejestrację - zaloguj się na swoje konto!</p>
			</div>
			<div id="log" class="poziom">
				<form action="zaloguj.php" method="post">
					Login:</br><input type="text" name="login"/></br>
					Hasło:</br><input type="password" name="haslo"/></br>
					<input type="submit" value="Zaloguj się"/>
				</form>

			</div>
			<div style="clear-both"></div>
		</div>
	</body>
</html>