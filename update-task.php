<?php

include "database.php";

if ($_POST) {
    $id = $_POST["idTask"];
    $name = $_POST["nombre"];
    $description = $_POST["description"];

    $resp = $pdo->prepare("UPDATE `tasks` SET `nombre` = :nombre, `description` = :descripcion WHERE `idTask` = :id");
    $resp->bindParam(':id', $id, PDO::PARAM_INT);
    $resp->bindParam(':nombre', $name);
    $resp->bindParam(':descripcion', $description);

    $resp->execute();

    if ($resp->rowCount() > 0) {
        echo "ok";
    } else {
        echo "error";
    }
}
