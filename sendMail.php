<?php
if(!empty($_POST['submitmsg'])) {
    $userName = htmlentities($_POST['username']);
    $userMail = htmlentities($_POST['usermail']);
    $userContentObject = $_POST['userobject'];
    $userContent = htmlentities($_POST['usermessage']);
    $message = "Ce message provient de la section contact du site BTT business
    Nom: {$userName}
    Email: {$userMail}
    Message: {$userContent}"; 
    //$retour = mail("philtshika05@gmail.com" , "objet", "message", "From:joe@gmail.com");
    $retour = mail("philtshika05@gmail.com" , $userContentObject, $message, "From:contact@exemplesite.fr" . "\r\n Reply-to {$userMail}");
    if($retour) {
        echo "<p>mail envoyé avec bravo</p>";
    }

    

}

?>