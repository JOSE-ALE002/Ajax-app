<?php

include "database.php";

if ($_POST) {
    $id = $_POST["id"];
    $resp = $pdo->prepare("DELETE FROM `tasks` WHERE `idTask` = :id");
    $resp->bindParam(':id', $id, PDO::PARAM_INT);

    $resp->execute();

    if ($resp->rowCount() > 0) {
        echo "ok";
    } else {
        echo "error";
    }
}
