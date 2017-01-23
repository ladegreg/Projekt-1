<?php
	session_start();
	
	if(!isset($_SESSION['zalogowany']))
	{
		header('Location: ../index.php');
		exit();
	}
	
?>
<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="utf-8" />
		<meta hppt-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <link rel="stylesheet" type="text/css" href="style/stylegra.css">
        <title>Star Saga</title>
    </head>
    <body> 
		<div id="contyner">
			<div id="reklama">
				<script type="text/javascript" id="AdTaily_Widget" src="http://static.adtaily.pl/widget.js#r8yhRCo85iMIaHi"></script>
<noscript><a href="http://www.adtaily.pl">Reklama w internecie</a></noscript>
			</div>
			<div id="gr">
		<div id="gornabelka">
<?php
	echo "<b>Drewno</b>: ".$_SESSION['drewno'];
	echo " | <b>Kamień</b>: ".$_SESSION['kamien'];
	echo " | <b>Zboże</b>: ".$_SESSION['zboze'];
	echo " | <b>Dni Premium</b>: ".$_SESSION['dnipremium'];
?>
		</div>
		<div id="mm">
		<div id="menug" class="poziom">
		<ol id="menu">
    <li class="dol"><a href="#">INWESTYCJE</a>
      <ul>
        <li><a href="#">link - 1</a></li>

        <li class="prawo"><a href="#">link - 2</a>
          <ol>
            <li><a href="#">dodany - 1</a></li>
            <li><a href="#">dodany - 2</a></li>
            <li><a href="#">dodany - 3</a></li>
            <li><a href="#">dodany - 4</a></li>
            <li><a href="#">dodany - 5</a></li>
            <li><a href="#">dodany - 6</a></li>
          </ol>
        </li>

        <li class="prawo"><a href="#">link - 3</a>
          <ol>
            <li><a href="#">dodany - 1</a></li>
            <li><a href="#">dodany - 2</a></li>
            <li><a href="#">dodany - 3</a></li>
            <li><a href="#">dodany - 4</a></li>
          </ol>
        </li>

        <li><a href="#">link - 4</a></li>
        <li><a href="#">link - 5</a></li>
      </ul>
    </li>

    <li class="dol"><a href="#">PRODUKCJA</a>
      <ul>
        <li><a href="#">link - 1</a></li>

        <li class="prawo"><a href="#">link - 2</a>
          <ol>
            <li><a href="#">dodany - 1</a></li>
            <li><a href="#">dodany - 2</a></li>
            <li><a href="#">dodany - 3</a></li>
            <li><a href="#">dodany - 4</a></li>
            <li><a href="#">dodany - 5</a></li>
          </ol>
        </li>

        <li><a href="#">link - 3</a></li>
      </ul>
    </li>

    <li><a href="#">WYPRAWY</a></li>

    <li class="dol"><a href="#">UPRAWY</a>
      <ul>
        <li><a href="#">link - 1</a></li>
        <li><a href="#">link - 2</a></li>
        <li><a href="#">link - 3</a></li>
        <li><a href="#">link - 4</a></li>
      </ul>
    </li>
	
	    <li><a href="#">MAGAZYNY</a></li>

    <li class="dol"><a href="#">ZAŁOGA</a>
      <ul>
        <li><a href="#">link - 1</a></li>
        <li><a href="#">link - 2</a></li>
        <li><a href="#">link - 3</a></li>
        <li><a href="#">link - 4</a></li>
      </ul>
    </li>
	
		    <li><a href="#">WOJSKO</a></li>

    <li class="dol"><a href="#">BUDYNKI</a>
      <ul>
        <li><a href="#">link - 1</a></li>
        <li><a href="#">link - 2</a></li>
        <li><a href="#">link - 3</a></li>
        <li><a href="#">link - 4</a></li>
      </ul>
    </li>
	
			    <li><a href="#">GENERATOR</a></li>

    <li class="dol"><a href="#">WYDOBYCIE</a>
      <ul>
        <li><a href="#">link - 1</a></li>
        <li><a href="#">link - 2</a></li>
        <li><a href="#">link - 3</a></li>
        <li><a href="#">link - 4</a></li>
      </ul>
    </li>
	
	<li><a href="#">HANDEL</a></li>
	
  </ol>
  </div>
		</div>
			<div id="inf" class="poziom">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
				<?php
				?>
			</div>
			</div>
			<div style="clear-both"></div>


		</div>
	</body>
</html>