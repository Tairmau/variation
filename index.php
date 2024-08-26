<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include('vues/v_entete.php');
include('vues/v_menu.php');

if(!isset($_REQUEST['uc'])){
	$uc = 'pre-accueil';
}
else{
	$uc = $_REQUEST['uc'];
}

switch($uc)
{
    case 'pre-accueil':
        {
            include('vues/v_first-page.php');
			break;
        }
	case 'accueil':
		{
			include('vues/v_bandeau.php');
			include('vues/v_accueil.php');
			break;
		}
	case 'about':
		{
			include('vues/v_bandeau.php');
			include('vues/v_about.php');
		}
}

include('vues/v_footer.php');

?>
