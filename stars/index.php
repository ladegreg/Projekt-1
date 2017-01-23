<?php
	
	session_start();
	
	if((isset($_SESSION['zalogowany'])) && ($_SESSION['zalogowany']==truee))
	{
		header('Location: gra/gra.php');
		exit();
	}
	require_once "rejestracja.php";
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
				<label>
					<div id="inp">
						<div id="impp"><span id="fig">&#187;</span> Login:</br><input size="22" type="text" value="
<?php
	if (isset($_SESSION['fr_login']))
	{
		echo $_SESSION['fr_login'];
		unset($_SESSION['fr_login']);
	}
					
?>" name="login"/>
<?php
	if (isset($_SESSION['e_login']))
	{
		echo '<div class="erorr">'.$_SESSION['e_login'].'</div>';
		unset($_SESSION['e_login']);
	}
?>
						</div>
					</div>
				</label>
				<label>
					<div id="inp">
						<div id="impp"><span id="fig">&#187;</span> E-mail:</br><input size="22" type="text" value="<?php
	if (isset($_SESSION['fr_email']))
	{
		echo $_SESSION['fr_email'];
		unset($_SESSION['fr_email']);
	}
					
?>"name="email"/></br>
<?php
	if (isset($_SESSION['e_email']))
	{
		echo '<div class="erorr">'.$_SESSION['e_email'].'</div>';
		unset($_SESSION['e_email']);
	}
?>
						</div>
					</div>
				</label>
				<label>
					<div id="inp">
						<div id="impp"><span id="fig">&#187;</span> Twoje hasło:</br><input size="22" type="password" value="<?php
	if (isset($_SESSION['fr_haslo1']))
	{
		echo $_SESSION['fr_haslo1'];
		unset($_SESSION['fr_haslo1']);
	}
					
?>" name="haslo1"/></br>
<?php
	if (isset($_SESSION['e_haslo']))
	{
		echo '<div class="erorr">'.$_SESSION['e_haslo'].'</div>';
		unset($_SESSION['e_haslo']);
	}
?>
						</div>
					</div>
				</label>
				<label>
					<div id="inp">
						<div id="impp"><span id="fig">&#187;</span> Powtórz hasło:</br><input size="22" type="password" value="<?php
	if (isset($_SESSION['fr_haslo2']))
	{
		echo $_SESSION['fr_haslo2'];
		unset($_SESSION['fr_haslo2']);
	}
					
?>" name="haslo2"/></br>
						</div>
					</div>
				</label>
				<label>
					<div id="inp">
						<div id="impp"><input type="checkbox" name="regulamin"<?php
	if (isset($_SESSION['fr_regulamin']))
	{
		echo "checked";
		unset($_SESSION['fr_regulamin']);
	}
?> /><span id="fig">&#187;</span> Akceptuję regulamin
<?php
	if (isset($_SESSION['e_regulamin']))
	{
		echo '<div class="erorr">'.$_SESSION['e_regulamin'].'</div>';
		unset($_SESSION['e_regulamin']);
	}
?>
						</div>
					</div>
				</label>
				<div id="inpca">
					<div class="g-recaptcha" data-sitekey="6LdqVwwUAAAAAM4DDHct8SEK0OuKbxUmF14SckEj"></div>			
<?php
	if (isset($_SESSION['e_bot']))
	{
		echo '<div class="erorr">'.$_SESSION['e_bot'].'</div>';
		unset($_SESSION['e_bot']);
	}
?>
				</div>
					<button class="buttonr" style="vertical-align:middle" type="submit"><span>Rejestracja</span></button>
				</form>
			</div>
			<div id="inf" class="poziom">
				<p><b>StarSaga</b> online jest to gra ekonomiczna wzorowana na grze Kolony z C64 Atari. Akcja gry rozgrywa sie w przyszłosci kiedy to Imperium ziemskie jest w fazie najwiekszego rozkwitu. Gra zaczyna sie w 2053 roku. Tysiace statków kolonizacyjnych jest rozsyłane po galaktyce aby zasiedlac ieograniczoną przestrzeń kosmiczną. Imperator wyznacza Ciebie na dowudcę jednego ze statków. Twoim zadaniem jest zarzadzac kolonią tak by stała się niezależna ekonomicznie, militarnie, naukowo, czy też populacyjnie i ogłosiła niepodległość.</p> </br>
<?php
	if(isset($_SESSION['blad']))	echo $_SESSION['blad'];
?>
			</div>
			<div id="log" class="poziom">
				<form action="zaloguj.php" method="post">
				<label>
					<div id="inpl">
						<div id="imppl">
							<span id="fig">&#187;</span> Login:</br><input type="text" name="login"/></br>
						</div>
					</div>
				</label>
				<label>
					<div id="inpl">
						<div id="imppl">
							<span id="fig">&#187;</span> Hasło:</br><input type="password" name="haslo"/></br>
						</div>
					</div>
				</label>
					<button class="buttonl" style="vertical-align:middle" type="submit"><span>Zaloguj się"</span></button>
				</form>

			</div>
			<div style="clear-both"></div>
		</div>
	</body>
</html>