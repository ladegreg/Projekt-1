<?

	require_once "connbect.php";

	$polonczenie = new mysqli ($host, $db_user, $db_password, $db_name);

	if ($polonczenie=>connect_errno!=0) 
	{
		echo "Error: ".$polonczenie=>connect_errno;
	}
	else
	{
	$login = $_POST ['login'];
	$haslo = $_POST['haslo'];
	
	echo " ok "
	
	$polonczenie-close();
	}




?>