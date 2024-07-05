<?php

    $name = $_POST["name"];
    $phone = $_POST["number"];
    $email = $_POST["email"];

    $message_mail = "<b>Cleint Name: </b>" . $name . "<br>"
    . "<b>Phone Number: </b>" . $phone . "<br>"
    . "<b>Email Address: </b>" . $email;

    $to = "royalboy7836@gmail.com";

    $subject = "Contact Form inquiry for Handwork";
        
    $message = "<h2 style='margin-top:0;margin-bottom:5px;'>Rinkudevihandworks</h2></br>";
    $message .= $message_mail;
        
    $header = "From:morningstarlucifer7836@gmail.com \r\n";
    $header .= "MIME-Version: 1.0\r\n";
    $header .= "Content-type: text/html\r\n";

    $retval = mail ($to,$subject,$message,$header);

    // Checking if Mails sent successfully
    if( $retval == true ) {
        echo "Message sent successfully...";
        <script>
        console.log("yes");
        </script>
    }
    else {
        echo "Message could not be sent...";
    }

?>