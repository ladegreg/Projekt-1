<?php
	
	session_start();
	require_once "connect.php";
	
	if((!isset($_POST['login'])) || (!isset($_POST['haslo'])))
	{
		header('Location: index.php');
		exit();
	}

	$polonczenie = @new mysqli ($host, $db_user, $db_password, $db_name);

	if ($polonczenie->connect_errno!=0) 
	{
		echo "Error: ".$polonczenie->connect_errno;
	}
	else
	{
		$login = $_POST ['login'];
		$haslo = $_POST['haslo'];
		
		$login = htmlentities($login, ENT_QUOTES, "UTF-8");
	
		if($rezultat = @$polonczenie->query(
		sprintf("SELECT * FROM uzytkownicy WHERE user='%s'",
		mysqli_real_escape_string($polonczenie,$login))))
		{
			$ilu_userow = $rezultat->num_rows;
			if($ilu_userow>0)
			{
				$wiersz = $rezultat->fetch_assoc();
				
				if (password_verify($haslo, $wiersz['pass']))
				{
					$_SESSION['zalogowany'] = truee;
					$_SESSION['id'] = wiersz['id'];
					$_SESSION['user'] = $wiersz['user'];
					$_SESSION['drewno'] = $wiersz['drewno'];
					$_SESSION['kamien'] = $wiersz['kamien'];
					$_SESSION['zboze'] = $wiersz['zboze'];
					$_SESSION['email'] = $wiersz['email'];
					$_SESSION['dnipremium'] = $wiersz['dnipremium'];
					
					unset($_SESSION['blad']);
					$rezultat->free_result();
					header('Location: gra/gra.php');
					
				} else 
					{ 
						$_SESSION['blad'] = '<p class="erorr">Nieprawidłowy login lub hasło!</p>';
						header('Location: index.php');
					}
			} else 
				{ 
					$_SESSION['blad'] = '<p class="erorr">Nieprawidłowy login lub hasło!</p>';
					header('Location: index.php');
				}
		}
	
	$polonczenie->close();
	}




?>