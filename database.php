<?php

/* Conectar a una base de datos de MySQL invocando al controlador */
$host = 'mysql:dbname=tasks;host=localhost';
$usuario = 'root';
$contraseña = '';

try {
    $pdo = new PDO($host, $usuario, $contraseña);
    // echo "Estas conectado a la base de datos";
} catch (PDOException $e) {
    echo 'Falló la conexión: ' . $e->getMessage();
}
