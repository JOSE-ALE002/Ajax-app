<?php

include "database.php";


if($_POST["nombre"]) {
    $nombre = $_POST["nombre"];
    $description = $_POST["description"];    

    $resp = $pdo->prepare("INSERT INTO tasks VALUES(NULL, '$nombre', '$description')");

    if(!$resp) {
        die("Query error");
    }

    try {
        if($resp->execute()){
            echo "ok";
        } else {
            echo "error";
        }
    } catch (PDOException $th) {
        echo "error";
    }
}