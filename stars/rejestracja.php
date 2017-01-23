<?php
	
	if (isset($_POST['email']))
	{
		//udana walidacja
		$wszystko_OK = true;
		//sprawdzenie poprawności
		$login = $_POST['login'];
		//spr długośi nika
		if ((strlen($login)<3) || (strlen($login)>20))
		{
			$wszystko_OK=false;
			$_SESSION['e_login'] = "Login musi posiadać od 3 do 20 znaków!";
		}
			if(ctype_alnum($login)==false)
			{
				$wszystko_OK=false;
				$_SESSION['e_login']="Login może składać się tylko z liert i cyfr (bez polskich znaków)";
			}
		// Sprawdź poprawność adresu email
		$email = $_POST['email'];
		$emailB = filter_var($email, FILTER_SANITIZE_EMAIL);
		
		if ((filter_var($emailB, FILTER_VALIDATE_EMAIL)==false) || ($emailB!=$email))
		{
			$wszystko_OK=false;
			$_SESSION['e_email']="Podaj poprawny adres e-mail!";
		}
		
		//Sprawdź poprawność hasła
		$haslo1 = $_POST['haslo1'];
		$haslo2 = $_POST['haslo2'];
		
		if (strlen($haslo1)<6 || (strlen($haslo1)>20))
		{
			$wszystko_OK = false;
			$_SESSION['e_haslo']="Hasło musi zawierać od 6 do 20 znaków";
		}

		if ($haslo1!=$haslo2)
		{
			$wszystko_OK = false;
			$_SESSION['e_haslo']="Hasła nie są identyczne!";
		}
		
		$haslo_hash = password_hash($haslo1, PASSWORD_DEFAULT);
		
		//akceptacja regulaminu
		if (!isset($_POST['regulamin']))
		{
			$wszystko_OK = false;
			$_SESSION['e_regulamin']="Potwierdź akceptacje regulaminu";
		}
		// BOT?
		
		$sekret = "6LdqVwwUAAAAAAL9p8UqCFCTBNBHDC0lVLcpuBpc";
		$sprawdz = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$sekret.'&response='.$_POST['g-recaptcha-response']);
		$odpowiedz = json_decode($sprawdz);
		if ($odpowiedz->success == false)
		{
			$wszystko_OK = false;
			$_SESSION['e_bot']="Potwierdź, że nie jesteś botem";
		}
		//zapamjetaj dane
		$_SESSION['fr_login'] = $login;
		$_SESSION['fr_email'] = $email;
		$_SESSION['fr_haslo1'] = $haslo1;
		$_SESSION['fr_haslo2'] = $haslo2;
		if (isset($_POST['regulamin'])) $_SESSION['fr_regulamin'] = true;
		
		
		require_once "connect.php";
		mysqli_report(MYSQLI_REPORT_STRICT);
		
		try
		{
			$polonczenie = new mysqli ($host, $db_user, $db_password, $db_name);
			if ($polonczenie->connect_errno!=0) 
			{
				throw new Exception(mysqli_connect_errno());
			}
			else
			{
				//cy email jusz istnieje
				$rezultat = $polonczenie->query("SELECT id FROM uzytkownicy WHERE email='$email'");
					
				if (!$rezultat) throw new Exception($polonczenie->error);
					
				$ile_takich_maili = $rezultat->num_rows;
				if ($ile_takich_maili>0)
				{
					$wszystko_OK = false;
					$_SESSION['e_email']="Istnieje już konto do tego adresu e-mail";
				}
				//cy login jusz istnieje
				$rezultat = $polonczenie->query("SELECT id FROM uzytkownicy WHERE user='$login'");
					
				if (!$rezultat) throw new Exception($polonczenie->error);
					
				$ile_takich_loginow = $rezultat->num_rows;
				if ($ile_takich_loginow>0)
				{
					$wszystko_OK = false;
					$_SESSION['e_login']="Niestety ten login jest zajęry.";
				}

				if ($wszystko_OK == true)
				{
					//wszystko ok Hura
					if ($polonczenie->query("INSERT INTO uzytkownicy VALUES (NULL, '$login', '$haslo_hash', '$email', 100, 100, 100, 14)"))
					{
						$_SESSION['udanarejestracja']=true;
						header('Location: witamy.php');
					}
				}
				$polonczenie->close();
			}
		}
		catch(Exception $e)
		{
			echo '<p class="red">Błąd serwera<p>';
			echo '</br> inf dewelopera: '.$e;
		}
	}
?>