<?php 
    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassowrd = '';
    $dbName = 'forcpq';

    $conexao = new mysqli($dbHost,$dbUsername,$dbPassowrd,$dbName);

    if($conexao ->connect_errno)
    {
        echo 'Erro';
    }

    else
    {
    echo 'Conectado com sucesso';

    }
    ?>